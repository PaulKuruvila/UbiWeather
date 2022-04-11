const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const port = 5000;

const db = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'admin',
	database : 'ubiweather'
});

const app = express();
app.use(cors());
app.use(session({
	secret: 'secret',
	saveUninitialized: false,
    resave: false,
    cookie: {secure: false}
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));


app.get('/', function(request, response) {
	response.send("Page loaded successfully.");
});

app.listen(port, () => {console.log(`Server started on port ${port}`)});