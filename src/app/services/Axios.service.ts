import { config } from "rxjs"
import http  from "../app.axios"

export class AxiosHandler {
    tableName!:String
    http = http
    constructor(tableName) {
        this.tableName = tableName
    }
    getAll(_callback=()=>{}) {
        http.get("/"+this.tableName)
            .then((res)=>{
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            }) 
    }
    getOne(id:number,_callback=()=>{}){
        http.get("/"+this.tableName+"/"+id,)
            .then((res)=>{
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    create(data:any,_callback=(res)=>{}) {
        http.put("/"+this.tableName,data)
            .then((res) => {
                _callback(res)
            })
            .catch((error) => {console.log(error)})
    }

    update(data:any,_callback=(res)=>{}) {
        http.post("/"+this.tableName+"/"+data.id,data)
            .then((res)=>{
                _callback(res)
            })
            .catch((error) => {console.log(error)})
    }

    delete(id:number,_callback=(res)=>{}) {
        http.delete("/"+this.tableName+"/"+id)
            .then((res)=> {
                _callback(res)
            })
            .catch((error)=>{console.log(error)})
    }    

}