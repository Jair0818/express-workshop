const morgan=require('morgan');
const express=require('express');
const app=express();
//Routes
const pokemon=require('./routes/pokemon');
const user=require('./routes/user');
//Middleware
const auth=require('./middleware/auth');
const notFoud=require('./middleware/notFoud');
const index=require('./middleware/index');
/*Verbos HTTP
GET es lo que ejecuta los navegadores 
POST es cuando queremos guardar o publicar algo 
PATCH es la utilizacion de un dato por especifico 
PUT modificar todos los elementos
DELETE elimitar un recurso*/
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));*/
app.get("/",index);
app.use("/user",user);
app.use(auth);
app.use("/pokemon",pokemon);
app.use(notFoud);
app.listen(process.env. PORT||3000,()=>{
    console.log("Server is runnig..")
});