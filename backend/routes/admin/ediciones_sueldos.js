var express=require('express');
var router=express.Router();
var empleadosVis=require('./../../models/visualEmpModel')
var moment=require('moment')

router.get('/',async function(req,res,next){

  var detallesFormat=await empleadosVis.getEmpleados();

  res.render('admin/cargas/ediciones_sueldo',{
    layout:'admin/layout',
    detallesFormat
  })

})



module.exports=router;