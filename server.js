const express = require('express')
const bodyParser = require('body-parser')
const routerEmployee = require('./routes/employee')

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(bodyParser.json())
app.use('/emp', routerEmployee)

app.listen(9595, '0.0.0.0', () => {
    console.log('server started on port 9595')
})
