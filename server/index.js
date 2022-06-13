const sequelize = require('./conections')
const express = require('express') 
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 5000
const dotenv = require('dotenv')
dotenv.config()

const userController = require('./controllers/userController')
const listController = require('./controllers/listController')
const taskController = require('./controllers/taskController')
//middleware
const app = express() 
app.use(express.json())
app.use(cors())
//End points 

//lists dashboard 

// post/ login /api/users/login
app.post('/api/users/login', userController.login)
// post/ signup /api/users/signup
app.post('/api/users/signup', userController.signUp)
// post/ lists /api/list
app.post('/api/list', listController.create)
// put/ update lists /api/lists/:id
app.put('/api/list/:listId', listController.updateList)
// delete/ delete lists /api/lits/:id
app.delete('/api/list/:listId', listController.deleteList)
// get/ get lists /api/lists/:userId
app.get('/api/list/:userId', listController.getAll)

app.get('/api/list/single/:id', listController.getSingleList)

// tasks

// get/ get tasks /api/tasks/:listId
app.get('/api/task/:listId', taskController.getTasks)
// post new task /api/tasks/:listId
app.post('/api/task/:listId', taskController.create)
// patch update complete /api/tasks/:listId/:taskId
app.patch('/api/task/:taskId', taskController.toggleComplete)
// put update title /api/tasks/:listId/:taskId
app.put('/api/task/:taskId', taskController.updateTask)
// delete delete title /api/tasks/:listId/:taskId
app.delete('/api/task/:taskId', taskController.deleteTask)



sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`It's over ${PORT}!!!`))
})