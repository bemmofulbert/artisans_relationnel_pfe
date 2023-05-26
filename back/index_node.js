const http = require("http")
const fs = require('fs')



const requestHandler = (req,res) => { 
    //res.write("<span style='color:red'> first server !</span>")
    switch(req.url) {
        case "/" :
            fs.readFile('./index.html',(err,data) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.write(data)
                }
                res.end()
            })
            break
        case "/bonjour" :
            res.write("Bonjour")
            res.end()
            break
        default :
            res.write("deny url")
            res.end()
            break
    }
}

http.createServer(requestHandler).listen(process.env.PORT || 3000, () => console.log("Server is running on http://localhost:3000"))
