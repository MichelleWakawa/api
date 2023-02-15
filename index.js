const express = require('express')
const questions = require('./data/script')
const cors = require('cors')

app = express()


port = process.env.PORT || 3000
app.use(cors())
app.listen(port)

app.get('/',(req,res)=>{
    res.send('Api is running')
})

app.get('/api/questions',(req,res)=>{
    res.send(questions)
})

app.get('/api/questions/:id',(req,res)=>{

    const question = questions.find((q) => String(q.id) === String(req.params.id)) 

    res.send(question)
})




console.log("server is running on port " + port)