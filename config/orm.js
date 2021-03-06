// Import (require) connection.js into orm.js
var connection = require('./connection');

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods you will need to use 
// in order to   retrieve and store data   in your database.

// selectAll()
// insertOne()
// updateOne()



function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    };
    
    return arr.toString();
};

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    };
    
    console.log(arr);
    return arr.toString();
}



var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        
        console.log(queryString);
        
        connection.query(queryString, vals, function(err, result) {
            if(err) {
                throw err;
            }
            
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        
        console.log(objColVals);
        console.log(objToSql(objColVals));
        
        queryString += " SET ";
        queryString += objToSql(objColVals); // column value
        queryString += " WHERE ";
        queryString += condition; // id = #
        
        console.log(queryString);
        
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            
            cb(result);
        });
    }
};

// Export the ORM object in module.exports.
module.exports = orm;