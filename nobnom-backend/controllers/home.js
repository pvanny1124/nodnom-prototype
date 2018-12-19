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

    //Find vendor
    Vendor.findOne({ 
            where: { id: vendorId }, 
            raw: true
    }).then(foundVendor => {
          console.log(foundVendor);

          //Find all the categories that vendor has in his/her menu
          FoodItem.findAll({
              attributes: ["category"],
              where: { menuId: foundVendor.menuId },
              raw: true
          }).then(foundCategories => {
            

              //filter out duplicate categories so that we don't return duplicate information
              //in the final grouping of the data.
              
              let categories = new Set();
              foundCategories.filter(category => {
                  categories.has(category.category) ? false : categories.add(category.category); 
              })

              console.log(categories);

              

              //Once we know what categories the vendor has, 
              //find the items and group them by category.

              //Since we are dealing with asynchronous methods,
              //we can't just grab the information we want after an async call.

              //The reason is that by the time the async action is performed,
              //the code has already run to the end of file and 
              //does not see the data that we want.

              //To solve this issue, we wrap all the logic to get the 
              //Categorized information in an async function called "FindItems..."

              //Then, using JS promises, we can use this asynchronous method and 
              //"resolve" or return this information once it's processed
              //and access the data through chaining a "then" method
              //which will get the resolved data.

              //If there was an error, we could also catch and receive the error..

              let items = new Promise((resolve, reject) => {
                resolve(findItems(foundVendor, categories));
              })
              .then(items => {
                res.json({ items: items });
              })
              .catch(error => {
                res.json({ message: "items not found" });
              })
             
                
          })
          
    })
    

});

async function findItems(foundVendor, foundCategories){

        //Return an object that categorizes items 
        let categorizedItems = [];

        for(let category of foundCategories){
          console.log(category);
          let itemsWithCategory = {}
          itemsWithCategory["category"] = category;

          itemsWithCategory["items"] = await FoodItem.findAll({
                  attributes: ["itemName", "description"],
                  where: {
                    menuId: foundVendor.menuId, 
                    category: category 
                  },
                  raw: true
                })
                .then(foundItems => {
                    return foundItems; 
                })

            console.log(itemsWithCategory);
            categorizedItems.push(itemsWithCategory);
        }
        return categorizedItems
}

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
