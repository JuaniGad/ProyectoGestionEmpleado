var pool=require('./bd');

async function insertEmp(obj){
    try{
        var query="INSERT into empleados set ?"
        var rows=await pool.query(query,[obj]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function insertEmpSuel22(){
    try{
        var query="INSERT INTO  sueldos2022 (id,nombre,apellido,dni )SELECT id, nombre, apellido, dni FROM empleados ORDER BY id DESC LIMIT 1"
        var rows=await pool.query(query);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}


module.exports={insertEmp,insertEmpSuel22}