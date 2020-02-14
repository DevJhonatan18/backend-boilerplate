    // user y password
// conectarse al servidor 
// verificar conecte o no conecte ? 
// query 
// modelo de datos 
// si se cae la conexion ? me reconecto 
// aviso que se cayo todooooo
// y si no me vulvo a conectar ?

import mongoose from 'mongoose'
mongoose.connect(uri, (err,results)=>{
    if(err) console.log(err)
    console.log('mi servicio esta corriendo ok ')
})

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});