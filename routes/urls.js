const express = require('express');
const urlroutes=express.Router()
const urlcontroller=require('../controller/urlcontroller')

urlroutes.get('/',urlcontroller.getallurl)
urlroutes.post('/Add',urlcontroller.addurl)
urlroutes.get('/:id',urlcontroller.shorturl)
urlroutes.delete('/delete/:id',urlcontroller.delete)
urlroutes.get('/click/:id',urlcontroller.getclicks)

module.exports=urlroutes