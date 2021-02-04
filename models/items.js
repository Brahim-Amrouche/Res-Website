const mongoose=require('mongoose');

var Schema=mongoose.Schema;

var ItemsSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    Image:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        enum:['Product','Service'],
        required:true
    }
})

module.exports= Item = mongoose.model('Item',ItemsSchema);