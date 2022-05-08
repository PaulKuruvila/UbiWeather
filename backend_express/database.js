const mysql = require('mysql2');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'admin',
	database : 'ubiweather'
});

function getState(city, request, response){ // returns state for city requested
    connection.query(`SELECT * FROM cities WHERE city = '${city}'`, function(err, results, fields) {
        if(err) throw err;

        if(results.length > 0){  // if a result is properly retrieved, the city exists within the database
            console.log(results);
            response.send({
                results
            });
            //validateCity(results[0][0], request, response);
        } else {   // if city does not exist (cannot be found) within database, return 404 error
            response.status(404).send({
                status: 'City not found.'
            });
        }
    });
}

function validateCity(city, request, response){    // validates that the city entered exists within the database
    return;
}

module.exports = {
    getState,
    validateCity,
    connection
}