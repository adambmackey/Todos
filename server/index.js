
const express = require('express') 
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 4001
const ctrl = require('./controller')

//middleware
const app = express() 
app.use(express.json())
app.use(cors())

//End points 









app.listen(PORT, () => console.log(`It's over ${PORT}!!!`))