
const {User} = require('../models');



module.exports = {
    signUp: async (req, res) => {
        try{
        const existingUser = await User.findOne({
            where: {email: req.body.email}
        })
        if(existingUser) {
            throw new Error('Already have a user with this email. ')
        }
        const newUser = await User.create(req.body);
        res.status(201).json(newUser)
        } catch (err) {
            console.error('sign up error', err)
        res.json(err)
        }
    },
    login: async (req, res) => {
        try{
            const existingUser = await User.findOne({
                where: {username: req.body.username}
            })
            if(!existingUser) {
                throw new Error('There is no user with this userName. ')
            }
            console.log('existing user', existingUser.password)
            if(existingUser.password !== req.body.password) {
                throw new Error('Invalid password.')
            }
            res.status(201).json(existingUser.dataValues)
            } catch (err) {
                console.error('login error', err)
            res.json(err)
            }
    }
}

