const BD = require("../bd")
Utils = require("../utils");

class Data{
    tableName = "";
    columnNames = []; // les noms de colonnes // tableau simple
    data = []; // un tableau associatif des noms de colonnes aux donnees

    constructor(tableName="", columnNames=[], data=[]) {
        this.tableName = tableName;
        this.columnNames = columnNames;
        this.data = data;
    }
    setData(data=[]) {
        for(let i=0, c=this.columnNames.length; i<c ; i++) {
            if (data[this.columnNames[i]] !== undefined && data[this.columnNames[i]] !== null && assoc[this.columnNames[i]] != '')
                this.data[this.columnNames[i]] = data[this.columnNames[i]];
        }
    }

    assoc_to_tab(assoc=[], keys=[], datas=[]){
        for(let i=0, c=this.columnNames.length; i<c ; i++) {
            if (assoc[this.columnNames[i]] !== undefined && assoc[this.columnNames[i]] !== null && assoc[this.columnNames[i]] != '') {
                keys.push(this.columnNames[i]);
                datas.push(assoc[this.columnNames[i]])
            }                
        }
    }

    add(_callback,_catch,assoc=[]) {
        let columns=[],values=[];
        this.assoc_to_tab(assoc, columns, values);
        BD.insert(_callback,_catch, this.tableName, columns, values);
    }

    read_all(_callback,_catch) {
        let result = null;
        BD.select(_callback,_catch,this.tableName,["*"]);
    }

    getList(_callback,_catch, debut,limite=""){
        BD.select(_callback,_catch,[this.tableName],['*'],"","LIMIT "+debut+", "+limite)
    }

    getUnique(_callback,_catch,id) {
        BD.select_one(_callback,_catch, [this.tableName],this.columnNames,"id="+id)
    }
    getListWith(_callback,_catch,assoc) {
        let columns=[],values=[];
        this.assoc_to_tab(assoc, columns, values);
        values = Utils.framed(values)
        let conditions="";
        for(let i=0,c=columns.length;i<c;i++) {
            conditions += columns+"="+values[i];
            if(i < columns.length-1)
                conditions+=","
        }
        BD.select_one(_callback,_catch, [this.tableName],this.columnNames,conditions)
    }

    update(_callback,_catch,id,assoc=[],conditions="") {
        let columns=[],values=[];
        this.assoc_to_tab(assoc, columns, values);
        BD.update(_callback,_catch, this.tableName,columns,values,"id="+id)
    }

    save(_callback=null,_catch) {
        let columns=[],values=[];
        this.assoc_to_tab(this.data, columns, values);
        BD.update(_callback,_catch,this.tableName,columns,values);
    }

    delete(_callback=null,_catch, id) {
        BD.delete(_callback,_catch,this.tableName,"id="+id);
    }

    count(_callback,_catch,column="*",conditions="") {
        BD.select_count(_callback,_catch,[this.tableName],column,conditions);
    }

    async hydrate(_callback,_catch) {
        this.getUnique(async (data) => {
            if(this.data["id"] !== undefined && this.data["id"] !== null) {
                this.setData(data)
                console.log(" hydrate =========> 100%")
            }
            _callback()
        },_catch,this.data["id"])
        
    }

    clone(){
        return new Data(this.tableName,this.columnNames,this.data);
    }
}

module.exports = Data