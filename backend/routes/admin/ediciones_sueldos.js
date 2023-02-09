var express = require("express");
var router = express.Router();
var empleadosVis = require("./../../models/visualEmpModel");
var filtros=require("./../../models/filtros");
var bd="empleados"

router.get("/", async function (req, res, next) {

  var detallesFormat = await empleadosVis.getEmpleados();

  var detallesFormatID = await filtros.getId(bd);
  var detallesFormatAP=await filtros.getApellidos(bd);
  var detallesFormatNom=await filtros.getNombres(bd);
  var detallesFormatDni=await filtros.getDni(bd);



  res.render("admin/cargas/ediciones_sueldo", {
    layout: "admin/layout",
    detallesFormat,
    detallesFormatID,
    detallesFormatAP,
    detallesFormatNom,
    detallesFormatDni
  });
});

router.get("/eliminar/:id", async function (req, res, next) {
  var id = req.params.id;
  await empleadosVis.eliminarEmpleadoById(id);

  res.redirect("/admin/ediciones_sueldos");
});

router.get("/cargar_sueldos/:id", async function (req, res, next) {
  let id = req.params.id;

  let empleado = await empleadosVis.getEmpleadoByIdSueld2022(id);

  res.render("admin/cargas/cargar_sueldo", {
    layout: "admin/layout",
    empleado,
  });
});

router.post("/filter",async function(req,res,next){
  try{
    let obj={
      id:req.body.id,
      nombre:req.body.nombre,
      apellido:req.body.apellido,
      dni:req.body.dni
    }
 
    if(obj.id!=""){
    var detallesFormat=await empleadosVis.getEmpleadoByIdFilter(obj.id,bd)
    res.render("admin/cargas/ediciones_sueldo_filter", {
      layout: "admin/layout",
      detallesFormat
    }) 
    }else if(obj.nombre!=""){

    var detallesFormat=await empleadosVis.getEmpleadoByNombre(obj.nombre,bd);
    detallesFormat.sort(function (a, b) {
      return a.apellido > b.apellido  ? 1 : a.apellido< b.apellido ? -1 : 0;
    });

    res.render("admin/cargas/ediciones_sueldo_filter", {
      layout: "admin/layout",
      detallesFormat
    }) 
    }else if(obj.apellido!=""){
      var detallesFormat=await empleadosVis.getEmpleadoByApellido(obj.apellido,bd);
      detallesFormat.sort(function (a, b) {
        return a.nombre > b.nombre  ? 1 : a.nombre< b.nombre ? -1 : 0;
      });

      res.render("admin/cargas/ediciones_sueldo_filter", {
        layout: "admin/layout",
        detallesFormat

    })
  }else if(obj.dni!=""){
    var detallesFormat=await empleadosVis.getEmpleadoByDni(obj.dni,bd);
    res.render("admin/cargas/ediciones_sueldo_filter", {
      layout: "admin/layout",
      detallesFormat
  })
}else{
  res.redirect("/admin/ediciones_sueldos");
}

  }catch (error) {
    console.log(error);
    throw(error);
  }

})

router.post("/sueldo", async function (req, res, next) {
  try {
    let obj = {
      id: req.body.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni,
      enero: req.body.enero,
      febrero: req.body.febrero,
      marzo: req.body.marzo,
      abril: req.body.abril,
      mayo: req.body.mayo,
      junio: req.body.junio,
      julio: req.body.julio,
      agosto: req.body.agosto,
      septiembre: req.body.septiembre,
      octubre: req.body.octubre,
      noviembre: req.body.noviembre,
      diciembre: req.body.diciembre,
    };
    await empleadosVis.modificarEmpleadoByIdSueld2022(obj, req.body.id);
    res.redirect("/admin/ediciones_sueldos");
  } catch (error) {
    console.log(error);
    res.redirect("/admin/home");
  }
});

router.get("/orderById", async function (req, res, next) {
  var detallesFormat = await empleadosVis.getEmpleados();

  detallesFormat.sort(function (a, b) {
    return a.id - b.id;
  });
  
  var detallesFormatID = await filtros.getId(bd);
  var detallesFormatAP=await filtros.getApellidos(bd);
  var detallesFormatNom=await filtros.getNombres(bd);
  var detallesFormatDni=await filtros.getDni(bd);

  res.render("admin/cargas/ediciones_sueldo", {
    layout: "admin/layout",
    detallesFormat,
    detallesFormatID,
    detallesFormatAP,
    detallesFormatNom,
    detallesFormatDni
  });
});

router.get("/orderByApellido", async function (req, res, next) {
  var detallesFormat = await empleadosVis.getEmpleados();

  detallesFormat.sort(function (a, b) {
    return a.apellido > b.apellido ? 1 : a.apellido < b.apellido ? -1 : 0;
  });

  var detallesFormatID = await filtros.getId(bd);
  var detallesFormatAP=await filtros.getApellidos(bd);
  var detallesFormatNom=await filtros.getNombres(bd);
  var detallesFormatDni=await filtros.getDni(bd);



  res.render("admin/cargas/ediciones_sueldo", {
    layout: "admin/layout",
    detallesFormat,
    detallesFormatID,
    detallesFormatAP,
    detallesFormatNom,
    detallesFormatDni
  });
});

module.exports = router;
