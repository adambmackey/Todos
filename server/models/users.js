const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../conections');

class User extends Model {}

User.init({
  // Model attributes are defined here
  id: {
      primaryKey: true, 
      autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  first: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User',
  freezeTableName: true // We need to choose the model name
});

module.exports = User