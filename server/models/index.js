const User = require('./users');
const List = require('./lists');
const Task = require('./tasks');
const { user } = require('pg/lib/defaults');

User.hasMany(List)
List.belongsTo(User)

List.hasMany(Task)
Task.belongsTo(List)

module.exports = {User, List, Task}