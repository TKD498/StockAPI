const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    console.log('deciding')
    res.render("index", { message : "Say Yes!"})
})

router.get('/yes', (req, res) => {
    console.log("yes!!")
    res.render('stats')
})

router.get('/no', (req, res) => {
    console.log("no?")
    res.send("Why tho?")
})

router.post('/', (req, res) => {
    res.render("index", { message : "Say Yes!"})
})


// router.put()
// used to Update something
// router.delete()
// used to Delete something

module.exports = router