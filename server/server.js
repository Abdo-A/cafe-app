const bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors');

const app = express();

// Models
require('./models/loadModels');

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Connect
require('./config/dbconnect');

// Cors Middleware
app.use(cors());

// Routes
app.use('/api/info', (req, res) => res.send('Cafe App API'));

const port = process.env.PORT || 4200;

app.listen(port, () => console.log(`Server started on port ${port}`));
