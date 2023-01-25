var pool=require('./bd');

async function getEmpleados(){
try{
    var query='select * from empleados'
    var rows=await pool.query(query)
    console.log(rows)
    return rows;
}catch (error){
    throw error
}
}

module.exports={getEmpleados}