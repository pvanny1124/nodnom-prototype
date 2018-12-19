module.exports = (sequelize, DataTypes) => {
     
    const FoodItem = sequelize.define('FoodItems', {

      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      menuId: {
        type: DataTypes.INTEGER,
        references: {

        }
      },
      price: {
        type: DataTypes.INTEGER
      },
      itemName: {
        type: DataTypes.STRING
      },
      category: {
          type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
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

  FoodItem.associate = function (models) {
    // associations can be defined here
    FoodItem.belongsTo(models.Vendors, {foreignKey: "menuId", targetKey: "menuId"})
  };

  return FoodItem;
}

