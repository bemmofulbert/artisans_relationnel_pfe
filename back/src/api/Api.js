const express = require('express')
const router = express.Router()
const path = require('path')

const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data
const Data = require('../models/Data')
const { json } = require('express')

router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
router.use(upload.array())

class Api {
    static router = router;
    model = new Data();
    getAll = (req,res) => {
        this.model.read_all((data)=>{
            res.status(200).jsonp(data)
            res.end()
        },
        ()=>{res.status(404).end()})
    }

    getOne = (req,res) => {
        this.model.getUnique(((data)=>{
            res.status(200).jsonp(data)
            res.end()
        }),
        ()=>{res.status(404).end()}
        ,req.params.id)
    }
    putOne = (req,res) => {
        console.log(req.body)
        res.end()
        this.model.add(()=>{res.status(200).end()},
            ()=>{res.status(404).end()},
            req.body
        )
    }
    updateOne = (req,res) => {
        this.model.update(()=>{res.status(200).end()},
            ()=>{res.status(404).end()},
            req.params.id,
            req.body)
    }
    deleteOne = (req,res) => {
        this.model.delete(()=>{res.status(200).end()},
            ()=>{res.status(404).end()},
            req.params.id)
    }
    constructor(model=this.model){
        this.model = model
        //GET ALL
        router.get("/"+model.tableName, (req,res)=>this.getAll(req,res))
        //GET ONE
        router.get("/"+model.tableName+"/:id", (req,res)=>this.getOne(req,res))
        //insert ONE
        router.put("/"+model.tableName, (req,res)=>this.putOne(req,res))

        //update
        router.post("/"+model.tableName+"/:id", (req,res)=>this.updateOne(req,res))

        //delete
        router.delete("/"+model.tableName+"/:id",(req,res)=>deleteOne(req,res))
    }
}

module.exports = Api
