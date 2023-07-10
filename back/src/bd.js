const db = require("../bd_con")
const QueryGenerator = require("./requete_generator")

class BD {
    static className = "BD"
    static execAny(query,_callback,_catch) {
      db.any(query)
      .then(data => _callback(data))
      .catch((error) => {
        console.log("ERROR: ", error)
        _catch()
      })
    }
    static execOne(query,_callback, _catch) {
      db.one(query)
        .then(data => _callback(data))
        .catch((error) => {
          console.log("ERROR: ", error)
          _catch(error)
        })
    }
    static select = (_callback,_catch,tables,columns,conditions="",endquery="") =>{
      
		  let query = QueryGenerator.select(tables,columns,conditions,endquery)
      this.execAny(query,_callback,_catch)
    }

    static select_one = (_callback,_catch,table,columns,conditions="",endquery="") =>{
      
		  let query = QueryGenerator.select(table,columns,conditions,endquery)
      this.execOne(query,_callback,_catch)
    }

    static insert = (_callback,_catch,table,columns,values,returns=["id"]) => {
      
      let query = QueryGenerator.insert(table,columns,values,returns)
      this.execAny(query,_callback,_catch)
    }

    static delete = (_callback,_catch,table, conditions="") => {
      let query= QueryGenerator.delete(table, conditions)
      this.execAny(query,_callback,_catch)
    }

    static update = (_callback,_catch,table,columns,values,conditions="") => {
      let result = null;
      let query = QueryGenerator.update(table,columns,values,conditions);
      this.execAny(query,_callback,_catch)
    }

    static select_count = (_callback,_catch,tables,column="*",conditions="") => {
      let query = QueryGenerator.select_count(tables,column,conditions);
      this.execOne(query,_callback,_catch)
    }

}
module.exports = BD
