const Data = require("./Data");

class ArtisanData extends Data{
    constructor(tableName="", columnNames=[], data=[]) {
        super(tableName, columnNames, data)
        this.idName = "idart"
    }


    search = (_callback,_catch,tables,columns=["*"],searchColumns=[],cles=[],conditions="",endquery="") => {
        var conditions2 = ''
        for (var i=0,c=searchColumns.length; i<c; i++){
            switch(searchColumns[i]) {
                case 'planT_prix':
                    //tables.push('plan')
                    //conditions2 += cles[i]+"> any (select )"
                    break
                default: 
                    conditions2 += "LOWER("+searchColumns[i]+")"+" LIKE LOWER(\'%"+cles[i]+"%\')";
                    break
                }
                (i >= c-1) ? conditions2 += '' : conditions2 += ' and '
        }
             
        
        if(conditions != "") {
            conditions2 = conditions2+" and "+conditions;
        }
        BD.select(_callback,_catch,tables,columns,conditions2,endquery);
    }
}
module.exports = ArtisanData
