const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
const {Router}= require('express');
const route = Router();
const prueba = {};
prueba.consultas=(req,res)=>{
  res.send('get funsionando');
};
route.get('/',prueba.consultas);
app.use('/api/', route);
app.set('Port',1075);
app.use(bodyparser.urlencoded({extends:true}));
app.use(bodyparser.json());



app.listen(app.get('Port'),()=>{
  console.log('Servido activo: ',app.get('Port'))
})