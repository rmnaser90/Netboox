const express = require('express')
const router = express.Router()
const APImanager = require('./services')
const apiManager = new APImanager


router.get('/booksearch/:text',function (req,res) {
    const text = req.params.text
    const index = req.query.index
    apiManager.getBookSearch(text,index)
    setTimeout(function () {
        res.send(apiManager.loadBooks()) 
    },3000)
    
})


module.exports=router