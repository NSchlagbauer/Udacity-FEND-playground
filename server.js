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
  console.log('server running.');
  console.log(`running on port ${port}`);
}

// Alternative 2:
// const server = app.listen(port, () => { console.log(`running on localhost:${port}`) })

