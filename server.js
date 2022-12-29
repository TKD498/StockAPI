const express = require('express')
const app = express()
const decideRouter = require('./routes/decide')

app.set('view engine', 'ejs')
app.use(logger)

app.get('/', (req, res) =>{
    res.render('home')
})

app.use('/decide', decideRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}


app.listen(3000)
