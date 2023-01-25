var express=require('express');
var router=express.Router();
var insertarEmpleados=require('../../models/cargaEmpModel');
var insertarSueldo2022=require('../../models/cargaEmpModel')

router.get('/',function(req,res,next){
  res.render('admin/cargas/cargar_empleado',{
    layout:'admin/layout'
  });
});

router.post('/', async (req,res,next)=>{

  try{ 
    
    if(req.body.alta !="" && req.body.nombre != "" && req.body.apellido != "" && req.body.dni != "" && req.body.domicilio != "" && req.body.telefono != "" && req.body.email!="" && req.body.puesto != "" && req.body.sueldo != ""){
    await insertarEmpleados.insertEmp(req.body);
    
    await insertarSueldo2022.insertEmpSuel22();
    
    res.render('admin/cargas/cargar_empleado',{
      carga:true,
      message:"Cliente cargado con exito"
    })
  }else{
  
    res.render('admin/cargas/cargar_empleado',{
      layout:'admin/layout',
      error:true,
      message:"Todos los campos son requeridos"
    });
  }

  }catch(error){
    console.log(error)
    res.render('admin/cargas/cargar_empleado',{
      layout:'admin/layout',
      error:true, message:'No se cargo el empleado'
    })
  }
})

module.exports=router;