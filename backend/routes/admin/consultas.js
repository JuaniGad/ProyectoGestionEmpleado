var express = require("express");
var router = express.Router();
var visualNom = require("../../models/visualEmpModel");
var filtros = require("./../../models/filtros");
var bd = "empleados";
var bd2022 = "sueldos2022";

router.get("/", function (req, res, next) {
  res.render("admin/consultas/consultas", {
    layout: "admin/layout",
  });
});

//VISUALIZACION NOMINA DE SUELDOS
router.get("/nomina_mensual", async function (req, res, next) {
  var empleadoMen = await visualNom.getNominaMensual();

  var detallesFormatID = await filtros.getId(bd2022);
  var detallesFormatAP = await filtros.getApellidos(bd2022);
  var detallesFormatNom = await filtros.getNombres(bd2022);
  var detallesFormatDni = await filtros.getDni(bd2022);

  res.render("admin/consultas/nomina_mensual", {
    layout: "admin/layout",
    empleadoMen,
    detallesFormatID,
    detallesFormatAP,
    detallesFormatNom,
    detallesFormatDni,
  });
});

//VISUALIZACION NOMINA DE EMPLEADOS
router.get("/nomina_empleados", async function (req, res, next) {
  var detallesFormat = await visualNom.getEmpleados();
  var detallesFormatID = await filtros.getId(bd);
  var detallesFormatAP = await filtros.getApellidos(bd);
  var detallesFormatNom = await filtros.getNombres(bd);
  var detallesFormatDni = await filtros.getDni(bd);

  res.render("admin/consultas/nomina_empleados", {
    layout: "admin/layout",
    detallesFormat,
    detallesFormatID,
    detallesFormatAP,
    detallesFormatNom,
    detallesFormatDni,
  });
});

//CONSULTA INDIVIDUAL
router.get("/detalle", async function (req, res, next) {


  res.render("admin/consultas/detalle", {
    layout: "admin/layout",
  });
});

router.post("/detalle/individual", async function (req, res, next) {

  try {
    let id = req.body.id;

    let empleadoInfo = await visualNom.getEmpleadoByIdFilter(id,"empleados");
    
    if(empleadoInfo=[""]){
      let nuevaBusqueda=await visualNom.getEmpleadoByIdFilter(id,"sueldos2022"); 

      empleadoInfo=nuevaBusqueda
    }

    let empleadoSueldos = await visualNom.getEmpleadoByIdSueld2022(id);
    console.log(empleadoSueldos);

    res.render("admin/consultas/detalles_id", {
      layout: "admin/layout",
      empleadoInfo,
      empleadoSueldos,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

//ORDEN VISUALIZACION NOMINA DE EMPLEADOS
router.get( "/nomina_empleados/orderByApellido",
  async function (req, res, next) {
    var detallesFormat = await visualNom.getEmpleados();

    var detallesFormatID = await filtros.getId(bd);
    var detallesFormatAP = await filtros.getApellidos(bd);
    var detallesFormatNom = await filtros.getNombres(bd);
    var detallesFormatDni = await filtros.getDni(bd);

    detallesFormat.sort(function (a, b) {
      return a.apellido > b.apellido ? 1 : a.apellido < b.apellido ? -1 : 0;
    });

    res.render("admin/consultas/nomina_empleados", {
      layout: "admin/layout",
      detallesFormat,
      detallesFormatID,
      detallesFormatAP,
      detallesFormatNom,
      detallesFormatDni,
    });
  }
);

router.get("/nomina_empleados/orderById", async function (req, res, next) {
  var detallesFormat = await visualNom.getEmpleados();

  var detallesFormatID = await filtros.getId(bd);
  var detallesFormatAP = await filtros.getApellidos(bd);
  var detallesFormatNom = await filtros.getNombres(bd);
  var detallesFormatDni = await filtros.getDni(bd);

  detallesFormat.sort(function (a, b) {
    return a.id - b.id;
  });

  res.render("admin/consultas/nomina_empleados", {
    layout: "admin/layout",
    detallesFormat,
    detallesFormatID,
    detallesFormatAP,
    detallesFormatNom,
    detallesFormatDni,
  });
});
//ORDEN VISUALIZACION NOMINA DE SUELDOS

router.get("/nomina_mensual/orderByApellido", async function (req, res, next) {
  var empleadoMen = await visualNom.getNominaMensual();

  var detallesFormatID = await filtros.getId(bd2022);
  var detallesFormatAP = await filtros.getApellidos(bd2022);
  var detallesFormatNom = await filtros.getNombres(bd2022);
  var detallesFormatDni = await filtros.getDni(bd2022);

  empleadoMen.sort(function (a, b) {
    return a.apellido > b.apellido ? 1 : a.apellido < b.apellido ? -1 : 0;
  });


  res.render("admin/consultas/nomina_mensual", {
    layout: "admin/layout",
    empleadoMen,
    detallesFormatID,
    detallesFormatAP,
    detallesFormatNom,
    detallesFormatDni
  });
});
router.get("/nomina_mensual/orderById", async function (req, res, next) {
  var empleadoMen = await visualNom.getNominaMensual();

  var detallesFormatID = await filtros.getId(bd2022);
  var detallesFormatAP = await filtros.getApellidos(bd2022);
  var detallesFormatNom = await filtros.getNombres(bd2022);
  var detallesFormatDni = await filtros.getDni(bd2022);

  empleadoMen.sort(function (a, b) {
    return a.id - b.id;
  });

  res.render("admin/consultas/nomina_mensual", {
    layout: "admin/layout",
    empleadoMen,
    detallesFormatID,
    detallesFormatAP,
    detallesFormatNom,
    detallesFormatDni
  });
});
//BUSQUEDA POR FILTRO NOMINA DE EMPLEADOS
router.post("/nomina_empleados/filter", async function (req, res, next) {
  try {
    let obj = {
      id: req.body.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni,
    };

    if (obj.id != "") {
      var detallesFormat = await visualNom.getEmpleadoByIdFilter(obj.id,bd);
      res.render("admin/consultas/nomina_empleados_filter", {
        layout: "admin/layout",
        detallesFormat,
      });
    } else if (obj.nombre != "") {
      var detallesFormat = await visualNom.getEmpleadoByNombre(obj.nombre,bd);
      detallesFormat.sort(function (a, b) {
        return a.apellido > b.apellido ? 1 : a.apellido < b.apellido ? -1 : 0;
      });

      res.render("admin/consultas/nomina_empleados_filter", {
        layout: "admin/layout",
        detallesFormat,
      });
    } else if (obj.apellido != "") {
      var detallesFormat = await visualNom.getEmpleadoByApellido(obj.apellido,bd);
      detallesFormat.sort(function (a, b) {
        return a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0;
      });

      res.render("admin/consultas/nomina_empleados_filter", {
        layout: "admin/layout",
        detallesFormat,
      });
    } else if (obj.dni != "") {
      var detallesFormat = await visualNom.getEmpleadoByDni(obj.dni,bd);
      res.render("admin/consultas/nomina_empleados_filter", {
        layout: "admin/layout",
        detallesFormat,
      });
    } else {
      res.redirect("/admin/consultas/nomina_empleados");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

//BUSQUEDA POR FILTRO NOMINA SUELDOS
router.post("/nomina_mensual/filter", async function (req, res, next) {
  try {
    let obj = {
      id: req.body.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni,
    };

    if (obj.id != "") {
      var empleadoMen = await visualNom.getEmpleadoByIdFilter(obj.id, bd2022);
      console.log(empleadoMen);

      res.render("admin/consultas/nomina_mensual_filter", {
        layout: "admin/layout",
        empleadoMen,
      });
    } else if (obj.nombre != "") {
      var empleadoMen = await visualNom.getEmpleadoByNombre(obj.nombre, bd2022);
      empleadoMen.sort(function (a, b) {
        return a.apellido > b.apellido ? 1 : a.apellido < b.apellido ? -1 : 0;
      });

      res.render("admin/consultas/nomina_mensual_filter", {
        layout: "admin/layout",
        empleadoMen,
      });
    } else if (obj.apellido != "") {
      var empleadoMen = await visualNom.getEmpleadoByApellido(
        obj.apellido,
        bd2022
      );
      empleadoMen.sort(function (a, b) {
        return a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0;
      });

      res.render("admin/consultas/nomina_mensual_filter", {
        layout: "admin/layout",
        empleadoMen,
      });
    } else if (obj.dni != "") {
      var empleadoMen = await visualNom.getEmpleadoByDni(obj.dni, bd2022);
      res.render("admin/consultas/nomina_mensual_filter", {
        layout: "admin/layout",
        empleadoMen,
      });
    } else {
      res.redirect("/admin/consultas/nomina_mensual");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports = router;
