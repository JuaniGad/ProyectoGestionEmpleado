var express=require('express');
var router=express.Router();
var empleadosVis=require('./../../models/visualEmpModel')

router.get('/:id',async function(req,res,next){

  let id=req.params.id;

  let empleado=await empleadosVis.getEmpleadoById(id);

  res.render('admin/cargas/editar',{
    layout:'admin/layout',
    empleado
  });
});
  
router.post('/editar',async function(req,res,next){
  try{

    let obj={
      id: req.body.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni,
      domicilio: req.body.domicilio,
      telefono:req.body.telefono,
      email:req.body.email,
      puesto:req.body.puesto,
      sueldo: req.body.sueldo,
      alta: req.body.alta
    }
    console.log(obj)

    await empleadosVis.modificarEmpleadoById(obj,req.body.id);
    res.redirect('/admin/ediciones_sueldos')  
  }catch(error){
    console.log(error);
    res.redirect('/admin/home') 
  }
})

module.exports = router;