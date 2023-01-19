var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
  res.render('admin/consultas/nomina_mensual',{
    layout:'admin/layout'
  });
});


module.exports=router;