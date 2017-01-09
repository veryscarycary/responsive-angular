const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function (err) {
  if (err) { console.log('Aww. There\'s was error while launching the node server => ', err);}
  console.log('Thanks for tuning in to KNODE. This is your host, Cary,' +
   ' and you\'re listening to port ' + port + '.');
});


// to keep heroku deployment awake
setInterval(function() {
  http.get('http://responsive-angular.herokuapp.com');
}, 1200000); // every 20 minutes (1200000)