const Client = require("../models/Client")
const Api = require("./Api")

// envoyeur d'email
const nodemailer = require('nodemailer');  

//authentification par token
const jwt = require('jsonwebtoken');
  


class ClientApi extends Api {
    static router = Api.router
    transporter = nodemailer.createTransport({  
        host: 'smtp.gmail.com',
        port: 587, // 587 -> TLS & 465 -> SSL
        auth: {  
          user: 'oneclickwork4300@gmail.com', // email de votre votre compte google
          //pass: 'Pompidou!0' // password de votre compte google
          pass: 'bplbfkvsokfiezsv'
        }  
      });
    enregistrement(adr_mail){
        this.model.getListWith((data)=>{
            //console.log("<br><br>"+'https://oneclickwork.netlify.app/actived/'+data.id+"/"+data["code"])
            let mailo = {  
                from: 'oneclickwork4300@gmail.com',  
                to: data["mail"],  
                subject: 'Activation de votre compte OneClickWork',  
                html: 'Suite a votre inscription sur la plateforme OneClickWork,<br>\
                         il est néccessaire d\'activer votre compte grace au lien ci-dessous :<br><br>\
                         https://oneclickwork.netlify.app/activated/'+data.id+"/"+data["code"] 
                // on peut remplacer l'attribut `text`par `html`si on veut que le cors de notre email supporte le HTML
                // html:  '<h1>This email use html</h1>'
                };
            this.transporter.sendMail(mailo, (error, info) => {  
                if (error) {  
                    console.log(error);  
                } else {  
                    console.log('Email: ' + info.response);  
                }  
            });

            }
        ,()=>{},adr_mail)
            
    }
    authentification(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwt.verify(token, 'DoPAMi*nePr0');
            const userId = decodedToken.userId;
            req.auth = {
                userId: userId
            };
            next();
        } catch(error) {
            res.status(401).json({ error });
        }
    }

    putOne = (req,res,) => { // Login
        console.log(req.body)
        res.end()
        if(req.body['motdepasse']) 
            (require("bcrypt").hash(req.body['motdepasse'],10))
                .then((hash => {
                    req.body['motdepasse'] = hash
                    this.model.add(()=>{
                        this.enregistrement({"mail":req.body["mail"]})
                        res.end()
                    },
                        ()=>{res.end()},
                        req.body)
                })
            )       
    }
    
    constructor(){
        super(Client)
        //ajouter des specialisations pour client ici
        ClientApi.router.get("/"+this.model.tableName+"Active/:id/:code",
            (req,res)=>{
                let id = req.params["id"]
                let code = req.params["code"]
                this.model.getUnique((client)=>{
                    if(client["code"] == code){
                    	this.model.update(()=>{},()=>{},id,
                            {"activated": true});
                        res.status(200).jsonp({"activated": true})
                        res.end()
                    }
                    else {res.status(400).jsonp({"activated": false})
                        res.end()}
                },
                ()=>{},
                id)
                
        })

        ClientApi.router.get("/"+this.model.tableName+"ActiveVerif/:mail",
            (req,res)=>{
                let mail = req.params["mail"]
                this.model.getListWith((client)=>{
                    if(client["activated"] === true){
                        res.status(200).jsonp({"activated": true, "exist":true})
                        res.end()
                    }
                    else{ res.status(200).jsonp({"activated": false, "exist":true})
                        res.end()
                    }
                },
                ()=>{res.status(200).jsonp({"activated": false, "exist":false})},
                {"mail":mail})
                
            })

        ClientApi.router.post("/"+this.model.tableName+"Login",
            (req,res) => {
                console.log(req.body)
                this.model.getListWith(
                    (data)=>{
                        let mail = req.body['mail']
                        let pass = req.body['motdepasse']

                        if(mail == data['mail']){
                            (require("bcrypt")).compare(pass,data['motdepasse'])
                                .then((identique)=>{
                                    if (identique) {
                                        res.jsonp({"matched":true});
                                        res.status(200).json({
                                            userId: mail,
                                            token: jwt.sign(
                                                { userId: mail },
                                                'DoPAMi*nePr0', // cle d chiffrement
                                                { expiresIn: '24h' }
                                            )
                                        });
                                        res.end()
                                    }
                                    else {res.jsonp({"matched":false});
                                        res.end()
                                    }
                                }
                            )
                            
                        }else {
                            res.jsonp({"matched":false})
                            res.end()
                        }
                        
                    },
                    ()=>{res.jsonp({"matched":false});res.end()},
                    {"mail":req.body['mail']}
                )
            }
        )
    }
}
new ClientApi()
