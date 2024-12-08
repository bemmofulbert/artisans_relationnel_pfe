const express = require('express')
const router = express.Router()
const path = require('path')
//bd db
const db = require('../../bd_con')

const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data

router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
router.use(upload.array())

const getQuestion_html = (req,res,next) => {
    res.sendFile(path.join(__dirname + "/question.html"),null,(err) => {
        if(err){

        }else{

        }
        next()
    })
}

router.get("/questionForm",getQuestion_html)

const bd_addC = (req,question,proposition,cle) => {
    bonnerep = false
    if(req.body['check_'+cle]) bonnerep=true
    
    db.any("INSERT into a_pour_choix(question,proposition,bonnerep)\
             values($1,$2,$3) RETURNING id",[question,proposition,bonnerep])
        .then((data) => {
            id = data[0]["id"]
            console.log('check_'+cle)
        })
        .catch((error) => {
            console.log("ERROR: ", error)
        })
}

const bd_addP = (req,question,cle) => {
    db.any("INSERT into proposition(libelle)\
             values($1) RETURNING id",req.body[cle])
        .then((data) => {
            id = data[0]["id"]
            bd_addC(req,question,id,cle)
        })
        .catch((error) => {
            console.log("ERROR: ", error)
        })
}

const mid_bd_addQ = (req,res,next) => {
    db.any("INSERT into question(enonce)\
             values($1) RETURNING id",req.body["quest_text"])
    .then((data) => {
       id = data[0]["id"]
        for(var i=0;i<6;i++){
            cle = "prop"+i
            if((String)(req.body[cle]).length > 0){
                bd_addP(req,id,cle)
            }
        }
    })
    .catch((error) => {
       console.log("ERROR: ", error)
   })
   getQuestion_html(req,res,next)
}

/*router.post("/question",mid_bd_addQ, (req,res) => { 
    res.end()
})
*/

////////////////LIST/////////////////LIST/////////
const mid_List = (req,res,next) => {
    db.query("select * from question,a_pour_choix,proposition where question.id=a_pour_choix.question and a_pour_choix.proposition = proposition.id")
    .then((data) => {
        var i=0,rep="";
        while (da = data[i]){
            rep = rep+da['id']+" - "+da['enonce']+" - "+da['question']+" - "+da['proposition']+" - "+da['bonnerep']+" - "+da["libelle"]+"<br>";
            i++;
        }
        res.send(rep)
    }) 

}
router.get('/questionList', mid_List)
///////////////////API///////////////////////////???API/////////////

router.get('/question', (req, res) => {
    db.query("select * from question")
        .then((data) => {
            res.json(data);
        })
})

router.get('/question/:id', (req,res) => {
    let id = req.params.id; 
    db.query("select * from question where id="+id)
        .then((data) => {
            res.json(data);
        })
})

router.put('/question/:id', (req,res) => {
    db.any("update question set enonce=$1 where id=$2",[req.body.libelle,req.params.id])
    .then((data) => {
        res.end()
    })
})

router.delete('/question/:id', (req,res) => {
    db.any("delete from question where id=$1",req.params.id)
        .then((data) => {
            res.end();
        })
})
module.exports = router
