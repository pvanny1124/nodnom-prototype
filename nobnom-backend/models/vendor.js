//use version 1 of uuid to create a unique identifier
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt-nodejs');
module.exports = (sequelize, DataTypes) => {
     
  const Vendor = sequelize.define('Vendors', {
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      menuId: {
        type: DataTypes.UUIDV1,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: uuidv1()
      },

      firstName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
      lastName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
      },
      vendorName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      
      username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true,
            isAlphanumeric: true,
          },
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true,
            isEmail: true,
          },
      },
      password_hash: {
        type: DataTypes.STRING
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  });

  Vendor.associate = function (models) {
    // associations can be defined here
    Vendor.hasMany(models.FoodItems, {foreignKey: "menuId", sourceKey: "menuId"})
  };

  Vendor.beforeCreate((user) =>
          new sequelize.Promise((resolve) => {
              bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
                  resolve(hashedPassword);
              });
          }).then((hashedPw) => {
              user.password_hash = hashedPw;
          })
    );
  return Vendor;
}

