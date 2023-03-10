var pool = require("./bd");

async function getEmpleados() {
  try {
    var query = "select * from empleados";
    var rows = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getEmpleadoById(id) {
  try {
    var query = "select * from empleados where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

async function modificarEmpleadoById(obj, id) {
  try {
    var query = "update empleados set ? where id = ?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function eliminarEmpleadoById(id) {

    var query = "delete from empleados where id = ?";
    var rows = await pool.query(query, id);
    return rows;

  }

//Tomar de la lista de sueldos de empleados
async function getEmpleadoByIdSueld2022(id) {
  try {
    var query = "select * from sueldos2022 where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

async function modificarEmpleadoByIdSueld2022(obj, id) {
  try {
    var query = "update sueldos2022 set ? where id = ?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getNominaMensual(){
  try {
    var query= "select * from sueldos2022"
    var rows=await pool.query(query)
    return rows;

  }catch(error){
    console.log(error)
    throw error;
  }
}
//METODOS PARA LOS FILTROS

async function getEmpleadoByIdFilter(id,bd) {
  try {
    var query = "select * from "+bd+" where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
  } catch (error) {
    throw error;
  }
}


async function getEmpleadoByNombre(nombre,bd) {
  try {
    var query = "select * from "+bd+" where nombre = ?";
    var rows = await pool.query(query, [nombre]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getEmpleadoByApellido(apellido,bd) {
  try {
    var query = "select * from "+bd+" where apellido = ?";
    var rows = await pool.query(query, [apellido]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getEmpleadoByDni(dni,bd) {
  try {
    var query = "select * from "+bd+" where dni = ?";
    var rows = await pool.query(query, [dni]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {getEmpleadoByApellido,getEmpleadoByDni,getEmpleadoByIdFilter,getEmpleadoByNombre, getNominaMensual, getEmpleados, getEmpleadoById, modificarEmpleadoById,eliminarEmpleadoById,getEmpleadoByIdSueld2022,modificarEmpleadoByIdSueld2022 };
