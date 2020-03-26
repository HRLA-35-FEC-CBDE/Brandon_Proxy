var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes.js');
var cors = require('cors')

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(morgan('dev'));
app.use(routes);
app.use(cors())




app.listen(port, () => console.log('app is listening on port 3000'));