const express = require('express')
const bodyParser = require('body-parser')
const routerEmployee = require('./routes/employee')
const routerCompany = require('./routes/company')

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(bodyParser.json())
app.use('/emp', routerEmployee)
app.use('/company', routerCompany)

app.listen(9292, '0.0.0.0', () => {
    console.log('server started on port 9292')
})
