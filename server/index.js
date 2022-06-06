
const express = require('express') 
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 5000
const ctrl = require('./controller')

//middleware
const app = express() 
app.use(express.json())
app.use(cors())

//End points 

//lists dashboard 

// post/ login /api/users/login
// post/ signup /api/users/signup
// post/ lists /api/lists
// put/ update lists /api/lists/:id
// delete/ delete lists /api/lits/:id
// get/ get lists /api/lists/:userId

// tasks

// get/ get tasks /api/tasks/:listId
// post new task /api/tasks/:listId
// patch update complete /api/tasks/:listId/:taskId
// put update title /api/tasks/:listId/:taskId
// delete delete title /api/tasks/:listId/:taskId




app.listen(PORT, () => console.log(`It's over ${PORT}!!!`))