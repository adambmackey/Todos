const User = require('./users');
const List = require('./lists');
const Task = require('./tasks');
const { user } = require('pg/lib/defaults');

User.hasMany(List, {
    foreignKey: 'user_id'
})
List.belongsTo(User)

List.hasMany(Task, {
    foreignKey: 'list_id'
})
Task.belongsTo(List)

module.exports = {User, List, Task}