const { Task } = require("../models")

module.exports = {
    create: async (req, res) => {
        try {
            const createdTask = await Task.create({
                task_item: req.body.task_item,
                list_id: req.params.listId
            })
            res.status(201).json(createdTask)
        } catch (err) {
            console.log('create task error', err)
            res.json(err)
        }
    }, 
    getTasks: async (req, res) => {
       try {
        const taskItems = await Task.findAll({
            where: {list_id: req.params.listId },
        })
        res.status(200).json(taskItems);
        } catch (err) {
            console.log('get all tasks error', err)
            res.json(err)
        }   
    },
    deleteTask: async (req, res) => {
        try {
         const deletedTask = await Task.destroy({
             where: {id: req.params.taskId },
         })
         res.status(202).json(deletedTask);
         } catch (err) {
             console.log('deleted task error', err)
             res.json(err)
         }
    },
         updateTask: async (req, res) => {
             try{
                const updatedTask = await Task.update({task_item: req.body.task_item }, {
                    where: {id: req.params.taskId }
                })
                res.status(200).json(updatedTask)
             } catch (err) {
                console.log('update task error', err)
             }
         },
         toggleComplete: async (req, res) => {
            try{
                const existingTask = await Task.findOne({
                    where: {id: req.params.taskId}
                })
               const toggleCompleted = await Task.update({completed: !existingTask.completed },{
                   where: {id: req.params.taskId }
               })
               res.status(200).json(toggleCompleted)
            } catch (err) {
               console.log('update task error', err)
            }
        }
}