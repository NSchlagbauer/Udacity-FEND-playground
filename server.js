/* Dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

//set up server
const port = 8000;

// Alternative 1:
const server = app.listen(port, listening);

function listening() {
  console.log(`server running on localhost:${port}`);
}

// Alternative 2:
// const server = app.listen(port, () => { console.log(`running on localhost:${port}`) })

// point server to website folder
app.use(express.static('website'));


/* Simple GET request responding with a Hello World String */
// Alternative 1
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Alternative 2:
// app.get ('/', (req, res) => res.send('Hello World!'));

/* GET request to return a JS  object */
//create empty JS object
const appData = {};
app.get('/all', (req, res) => res.send(appData));

// Simple POST request answering with a string
app.post('/', function (req, res) {
  res.send('POST recieved.');
});

// Basic POST route for information
const postData = [];
app.post('/addMovie', addSomeMovie);

function addSomeMovie(req, res) {
  console.log('postData:');
  console.log(postData);
  postData.push(req.body);
//  let data = req.body;
//  postData['Movie'] = data.Movie;
}