var express = require("express");
var router = express.Router();
var empleadosVis = require("./../../models/visualEmpModel");

router.get("/", async function (req, res, next) {
  var detallesFormat = await empleadosVis.getEmpleados();

  res.render("admin/cargas/ediciones_sueldo", {
    layout: "admin/layout",
    detallesFormat,
  });
});

router.get("/eliminar/:id", async function (req, res, next) {
  var id = req.params.id;
  await empleadosVis.eliminarEmpleadoById(id);

  res.redirect("/admin/ediciones_sueldos");
});

router.get("/cargar_sueldos/:id", async function (req, res, next) {

  let id=req.params.id;

  let empleado=await empleadosVis.getEmpleadoByIdSueld2022(id);
  
  res.render("admin/cargas/cargar_sueldo", {
    layout: "admin/layout",
    empleado
  });

});

router.post('/sueldo', async function(req,res,next){

  try{

    let obj={
      id: req.body.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni,
      enero: req.body.enero,
      febrero:req.body.febrero,
      marzo:req.body.marzo,
      abril:req.body.abril,
      mayo:req.body.mayo,
      junio:req.body.junio,
      julio:req.body.julio,
      agosto:req.body.agosto,
      septiembre:req.body.septiembre,
      octubre:req.body.octubre,
      noviembre:req.body.noviembre,
      diciembre:req.body.diciembre
    }
    let longitud=obj.octubre.length
    console.log(longitud)
    await empleadosVis.modificarEmpleadoByIdSueld2022(obj,req.body.id);
    res.redirect('/admin/ediciones_sueldos')  
  }catch(error){
    console.log(error);
    res.redirect('/admin/home')
  }


})

router.get('/orderById',async function(req,res,next){

  var detallesFormat = await empleadosVis.getEmpleados();

  detallesFormat.sort(function(a,b){return a.id - b.id;
  })

  res.render("admin/cargas/ediciones_sueldo", {
    layout: "admin/layout",
    detallesFormat,
  });

})

router.get('/orderByApellido', async function (req,res,next){
  var detallesFormat = await empleadosVis.getEmpleados();

  detallesFormat.sort(function(a,b){
    return a.apellido > b.apellido ? 1 : a.apellido < b.apellido ? -1 : 0;
  })

  res.render("admin/cargas/ediciones_sueldo", {
    layout: "admin/layout",
    detallesFormat,
  });
  
})



module.exports = router;
