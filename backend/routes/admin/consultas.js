var express=require('express');
var router=express.Router();
var visualNom=require('../../models/visualEmpModel')

router.get('/',function(req,res,next){
  res.render('admin/consultas/consultas',{
    layout:'admin/layout'
  });
});


//VISUALIZACION NOMINA DE SUELDOS
router.get('/nomina_mensual',async function(req,res,next){

  var empleadoMen=await visualNom.getNominaMensual()

  res.render('admin/consultas/nomina_mensual',{
    layout:'admin/layout',
    empleadoMen
  });
});

//VISUALIZACION NOMINA DE EMPLEADOS
router.get('/nomina_empleados',async function(req,res,next){

  var detallesFormat=await visualNom.getEmpleados();

  res.render('admin/consultas/nomina_empleados',{
    layout:'admin/layout',
    detallesFormat
  })

})

//CONSULTA INDIVIDUAL

router.get('/detalle', async function(req,res,next){
  res.render('admin/consultas/detalle',{
    layout:'admin/layout'
  });
})

router.post('/detalle/individual', async function(req,res,next){

  try{
    let id=req.body.id;

    let empleadoInfo=await visualNom.getEmpleadoById(id);
    console.log (empleadoInfo)
 
    let empleadoSueldos= await visualNom.getEmpleadoByIdSueld2022(id);
    console.log(empleadoSueldos)
 
   res.render('admin/consultas/detalles_id',{
     layout:'admin/layout',
     empleadoInfo,
     empleadoSueldos
   });
    
  }catch(error){
    console.log(error);
    throw error
  }


})

//ORDEN VISUALIZACION NOMINA DE EMPLEADOS
router.get('/nomina_empleados/orderByApellido', async function (req,res,next){
  var detallesFormat = await visualNom.getEmpleados();

  detallesFormat.sort(function(a,b){
    return a.apellido > b.apellido ? 1 : a.apellido < b.apellido ? -1 : 0;
  })

  res.render('admin/consultas/nomina_empleados',{
    layout:'admin/layout',
    detallesFormat
  });
  
})

router.get('/nomina_empleados/orderById',async function(req,res,next){

  var detallesFormat = await visualNom.getEmpleados();

  detallesFormat.sort(function(a,b){return a.id - b.id;
  })

  res.render('admin/consultas/nomina_empleados',{
    layout:'admin/layout',
    detallesFormat
  });

})

//ORDEN VISUALIZACION NOMINA DE SUELDOS
router.get('/nomina_mensual/orderByApellido', async function (req,res,next){
  var empleadoMen = await visualNom.getNominaMensual();

    empleadoMen.sort(function(a,b){
    return a.apellido > b.apellido ? 1 : a.apellido < b.apellido ? -1 : 0;
  })

  res.render('admin/consultas/nomina_mensual',{
    layout:'admin/layout',
    empleadoMen
  });
  
})

router.get('/nomina_mensual/orderById',async function(req,res,next){

  var empleadoMen = await visualNom.getNominaMensual();

  empleadoMen.sort(function(a,b){return a.id - b.id;
  })

  res.render('admin/consultas/nomina_mensual',{
    layout:'admin/layout',
    empleadoMen
  });

})





module.exports=router;