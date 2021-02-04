const express=require('express');

const router=express.Router();

const Items=require('../../models/items');

router.get('/',(req,res)=>{
    Items.find().then((item)=>{
        res.status('200').json(item)
    })
})

router.post('/',(req,res)=>{
    const newItem=new Items({
        name:req.body.name,
        price:req.body.price,
        Image:req.body.Image,
        Description:req.body.Description,
        Type:req.body.Type
    }
    )
    newItem.save().then((item)=>res.json(item));
})

router.delete('/:id',(req,res)=>{
    Items
        .findById(req.params.id)
        .then(item=>item.remove().then(()=>res.json({succes:true})))
        .catch(err=>res.status('404').json({succes:false}))
});
module.exports=router;