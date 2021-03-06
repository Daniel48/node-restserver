require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World');
})
 
app.listen(process.env.PORT,()=>{
    console.log('Escuchando puerto: ',process.env.PORT);
});
