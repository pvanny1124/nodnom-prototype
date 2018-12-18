const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth')

const router = express.Router();
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'test';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config, {query:{raw:true}});
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config, {query:{raw:true}});
}
const Vendor = require("../models/vendor")(sequelize, Sequelize);
const FoodItem = require("../models/fooditem")(sequelize, Sequelize);

router.get("/users/:id/dashboard", (req, res) => {
    //TODO
})

router.get("/vendors/:id/menu", (req, res) => {
    //Return vendor's menu
    let vendorId = req.params.id;
    Vendor.findOne({ 
            where: { id: vendorId }, 
            raw: true
    }).then(foundVendor => {
          console.log(foundVendor);

          FoodItem.findAll({
              where: { menuId: foundVendor.menuId },
              raw: true
          }).then(foundItems => {
              console.log(foundItems);
              res.status(200).json(foundItems);
          })
    })

});

router.get("/vendors/:id/dashboard", (req, res) => {
    //TODO
})

//Create a new menu item
router.post("/vendors/:id/menu/newitems", (req, res) => {
    let vendorId = req.params.id;
    Vendor.findOne({ 
            attributes: ["menuId"],
            where: { id: vendorId }, 
            raw: true
    }).then(foundVendor => {
        FoodItem.create({
            menuId: foundVendor.menuId,
            itemName: req.body.itemName,
            category: req.body.category,
            description: req.body.description
         }).then(newItem => {
          console.log(newItem.toJSON());
          res.status(200).json(newItem.toJSON());
      })
    })
})



router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

router.get('/protected',
  passport.redirectIfNotLoggedIn('/login'),
  (req, res) => {
    res.send('secrets');
})


module.exports = router;
