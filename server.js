const express= require('express');

const bodyParser=require('body-parser');

const path=require('path');

const mongoose=require('mongoose');

const productsRoute=require('./routes/api/products');

const app=express();

//Request BodyParser
app.use(bodyParser.json());

//Routes
app.use('/api/products',productsRoute);

//Db Config
const db=require('./config/keys').mongoUri;

mongoose
    .connect(db , {useNewUrlParser: true,useUnifiedTopology: true} )
    .then(()=>console.log('mongo db connected ...'))
    .catch((err)=>console.log(err))

//port Setup

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(port, ()=>console.log(`server launched on port ${port}`));

