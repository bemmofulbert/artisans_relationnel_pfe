import { Injectable } from '@angular/core'
import { AxiosHandler } from './Axios.service'
import { ClientModel } from './models/client.model'


@Injectable({
    providedIn: 'root'
})
export class ClientService extends AxiosHandler{
  model!:ClientModel
  clientVerif(mail:string,_callback=(data=[])=>{}){
    this.http.get("/"+this.tableName+"ActiveVerif/"+mail)
        .then((res)=>{
            console.log(res)
            _callback(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
  }

  clientLogin(mail:string,pass:string,_callback=(data=[])=>{}){
    this.http.post("/"+this.tableName+"Login",
        {"mail" : mail, "motdepasse": pass})
        .then((res)=>{
            console.log(res)
            _callback(res.data["matched"])
        })
        .catch((error) => {
            console.log(error)
        })
  }

  clientActive(id:string,code:string,_callback=(active)=>{}){
    this.http.get("/"+this.tableName+"Active/"+id+"/"+code)
        .then((res)=>{
            console.log(res)
            _callback(res.data["activated"])
        })
        .catch((error) => {
            console.log(error)
        })
  }
  constructor() {
    super(ClientModel.tableName)
    
  }
}
