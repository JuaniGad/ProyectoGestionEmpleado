var pool=require('./bd');

async function getEmpleados(){
try{
    var query='select * from empleados'
    var rows=await pool.query(query)
    console.log(rows)
    return rows;
}catch (error){
    throw error;
}
}

async function getEmpleadoById(id){
    try{
        var query='select * from empleados where id = ?'
        var rows=await pool.query(query,[id]);
        return rows[0];

    }catch(error){
        throw error;
    }
}

async function modificarEmpleadoById(obj,id){
    try{
        var query='update empleados set ? where id = ?'
        var rows=await pool.query(query,[obj,id]);
        return rows;
    }catch(error){
        console.log(error)
        throw error
    }
}

module.exports={getEmpleados,getEmpleadoById,modificarEmpleadoById}