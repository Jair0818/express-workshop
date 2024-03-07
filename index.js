const express=require('express');
const app=express();
/*
Verbos HTTP
GET es lo que ejecuta los navegadores 
POST es cuando queremos guardar o publicar algo 
PATCH es la utilizacion de un dato por especifico 
PUT modificar todos los elementos
DELETE elimitar un recurso
*/
app.get("/",(req,res,next)=>{
    res.status(200);
    res.send("Hola como estas");
});
app.listen(3000,()=>{
    console.log("Server is runnig..")
});