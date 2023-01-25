var express=require('express');
var router=express.Router();
var empleadosVis=require('./../../models/visualEmpModel')
var moment=require('moment')

router.get('/',async function(req,res,next){

  var detallesEmp=await empleadosVis.getEmpleados();

  var detallesFormat=[];

  detallesEmp.map((detail)=>{
    detail.alta=moment(detail.alta).format('DD-MM-YYYY');
    detallesFormat.push(detail);;
  })

  
  res.render('admin/consultas/nomina_empleados',{
    layout:'admin/layout',
    detallesFormat
    
  })

})

module.exports=router;