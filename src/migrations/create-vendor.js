'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("vendor", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      first_name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
      last_name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
      },
      vendorName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      username: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true,
            isAlphanumeric: true,
          },
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true,
            isEmail: true,
          },
      },
      password_hash: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vendors');
  }
};
