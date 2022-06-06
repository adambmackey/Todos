const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../conections');
const List = require('./lists');


class Task extends Model {}

Task.init({
  // Model attributes are defined here
  id: {
      primaryKey: true, 
      autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  task_item: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }, 
  list_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
    references: {
        // This is a reference to another model
        model: List,
  
        // This is the column name of the referenced model
        key: 'id'
    }
  }, 

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Task' // We need to choose the model name
});

module.exports = Task