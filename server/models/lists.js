const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../conections');
const User = require('./users');

class List extends Model {}

List.init({
  // Model attributes are defined here
  id: {
      primaryKey: true, 
      autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  crossed: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }, 
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
    references: {
        // This is a reference to another model
        model: User,
  
        // This is the column name of the referenced model
        key: 'id'
    }
  }, 

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'List' // We need to choose the model name
});

module.exports = List