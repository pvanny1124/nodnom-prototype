'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FoodItems', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          menuId: {
            type: Sequelize.UUID,
            references: {
                model: 'Vendors',
                key: 'menuId'
              },
          },
          itemName: {
            type: Sequelize.STRING
          },
          category: {
              type: Sequelize.STRING
          },
          description: {
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};