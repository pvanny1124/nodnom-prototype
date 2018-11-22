
module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
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
        age: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        country: {
          type: DataTypes.STRING,
          allowNull: false
        },
        location: {
            type: DataTypes.STRING
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

    User.beforeCreate((user) =>
        new sequelize.Promise((resolve) => {
            bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
                resolve(hashedPassword);
            });
        }).then((hashedPw) => {
            user.password_hash = hashedPw;
        })
    );
    return User;
}


//Create table. force:true will drop the table if it exists
// Users.sync({force: true}).then(() => {
//   // Table created
//   return Users.create({
//     firstName: 'John',
//     lastName: 'Hancock',
//     age: 23,
//     country: 'USA',
//     email: 'pvanny1124@gmail.com',
//     username: 'patrickv',
//     password: 'swaggy1124'
//   }).then(user => {
//     console.log(typeof(user));
//   });
// }).then(() => {
//   return Users.findAll({
//     attributes: ['firstName', ['lastName', 'last'], "country"],
//     where: { country: 'USA'},
// }).then((user) => {
//     console.log(user[0].dataValues);
// })
// }

