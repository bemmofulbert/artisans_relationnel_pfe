class QueryGenerator {
    static className = "QueryGenerator"
    static framed = (tabo) => {
                let tab = [...tabo];
                for(let i=0,c=tab.length;i<c;i++) {
                    tab[i] = String('\'').concat(tab[i],'\'');
                }
                return tab;
	}
    static to_error = (text) => {
		return ("<span style='color:red'>"+text+"</span>");
	}
    static select = (tables,columns,conditions="",endquery="") =>{
		let query= "SELECT ";
		query = query+columns.toString()+" ";
		query = query+"FROM ";
		query = query+tables.toString()+" ";
		
		if (conditions !== "") {
			query = query+"WHERE ";
			query = query+conditions;
		}
		query = query+" "+endquery;
		
		console.log(query);
		return query;
	}

    static insert = (table,columns,values) => {
		if (columns.length != values.length) {
			console.log("ERREUR : le nombre de colonne est different du nombre de valeur fournie");
			return null;
		}
		
		let query= "INSERT INTO "+table+"(";
		query= query + columns.toString() +")";
		query= query+" VALUES(";
		values = QueryGenerator.framed(values);
		query= query + values.toString() + ")";
		
		console.log(query);
		return query;
	}

    static delete = (table, conditions="") => {
		let query= "DELETE FROM "+table;
		if (conditions !== "") {
			query = query+" WHERE ";
			query = query+conditions;
		}
		
		return query;
	}

    static update = (table,columns,values,conditions="") => {
		let query = "UPDATE "+table+" SET ";
        let upd;
		
        let nc = columns.length;
		if (nc != values.length) 
			console.log("length error"); 
		
		
		let updates = [];
		for(let i=0; i<nc ;i++){
			upd = columns[i]+"='"+values[i]+"'";
			updates.push(upd);
		}
		query = query+updates.toString();
		if (conditions !== "") {
			query = query+" WHERE ";
			query = query+conditions;
		}
		
		return query;
	}

    static select_count = (tables,column="*",conditions="") => {
		return QueryGenerator.select(tables,['count('+column+')'],conditions);
	}
}

module.exports = QueryGenerator