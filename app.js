const express = require('express')
const mongoose = require('mongoose')

const User = require('./userModel')
const { sendingemail } = require('./mailsend')

//dbconnect
mongoose.connect('mongodb://127.0.0.1:27017/mailsend', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())


app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        sendingemail(user.name, user.email)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error.message)
    }
})



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})