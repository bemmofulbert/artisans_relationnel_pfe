const BD = require("../bd")
Utils = require("../utils");

class Data{
    tableName = "";
    columnNames = []; // les noms de colonnes // tableau simple
    data = []; // un tableau associatif des noms de colonnes aux donnees
    idName = "id"

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

    add(_callback,_catch,assoc=[],returns=["id"]) {
        let columns=[],values=[];
        this.assoc_to_tab(assoc, columns, values);
        BD.insert(_callback,_catch, this.tableName, columns, values, returns);
    }

    read_all(_callback,_catch,tables=[],conditions="",endquery="") {
        tables.push(this.tableName)

        BD.select(_callback,_catch,tables,["*"],conditions,endquery);
    }

    getList(_callback,_catch, debut,limite=""){
        BD.select(_callback,_catch,[this.tableName],['*'],"","LIMIT "+debut+" OFFSET "+limite)
    }

    getUnique(_callback,_catch,id) {
        BD.select_one(_callback,_catch, [this.tableName],this.columnNames,this.idName+"="+id)
    }
    getOneWith(_callback,_catch,assoc) {
        let columns=[],values=[];
        this.assoc_to_tab(assoc, columns, values);
        values = Utils.framed(values)
        let conditions="";
        for(let i=0,c=columns.length;i<c;i++) {
            conditions += columns[i]+"="+values[i];
            if(i < columns.length-1)
                conditions+=" and "
        }
        BD.select_one(_callback,_catch, [this.tableName],this.columnNames,conditions)
    }

    update(_callback,_catch,id,assoc=[],conditions="") {
        let columns=[],values=[];
        this.assoc_to_tab(assoc, columns, values);
        BD.update(_callback,_catch, this.tableName,columns,values,this.idName+"="+id)
    }

    save(_callback=()=>{},_catch) {
        let columns=[],values=[];
        this.assoc_to_tab(this.data, columns, values);
        BD.update(_callback,_catch,this.tableName,columns,values);
    }

    delete(_callback=null,_catch, id) {
        BD.delete(_callback,_catch,this.tableName,this.idName+"="+id);
    }

    count(_callback,_catch,column="*",conditions="") {
        BD.select_count(_callback,_catch,[this.tableName],column,conditions);
    }

    search = (_callback,_catch,tables,columns=["*"],searchColumns=[],cles=[],debut="",limite="",conditions="",endquery="") => {
        var conditions2 = ''
        for (var i=0,c=searchColumns.length; i<c; i++){
            conditions2 += "LOWER("+searchColumns[i]+")"+" LIKE LOWER(\'%"+cles[i]+"%\')";
            (i >= c-1) ? conditions2 += '' : conditions2 += ' and '
        }    
        
        if(conditions !== "") {
            conditions2 = conditions2+" and "+conditions;
        }

        if(debut !== "") endquery += "LIMIT "+debut
        if(limite !== "") endquery += " OFFSET "+limite ;

        BD.select(_callback,_catch,tables,columns,conditions2,endquery);
    }

    async hydrate(_callback,_catch) {
        this.getUnique(async (data) => {
            if(this.data[this.idName] !== undefined && this.data[this.idName] !== null) {
                this.setData(data)
                console.log(" hydrate =========> 100%")
            }
            _callback()
        },_catch,this.data[this.idName])
        
    }

    clone(){
        return new Data(this.tableName,this.columnNames,this.data);
    }
}

module.exports = Data