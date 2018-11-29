module.exports = (sequelize, DataTypes) => {
     
    const Vendor = sequelize.define('vendor', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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

