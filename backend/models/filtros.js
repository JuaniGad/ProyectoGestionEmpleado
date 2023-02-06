var pool = require("./bd");

async function getId(bd){
  try{
    var query = `select id from ${bd}`;
    var rows = await pool.query(query);
    rows.sort(function (a, b) {
    return a.id - b.id;
    });
    console.log(rows)
    return rows
  }catch(error){
    console.log(error)
    throw error
  }


}
async function getApellidos(bd){
    try {
        var query = `select apellido from ${bd}`;
        var rows = await pool.query(query);

        let sustArray=[];

        for (let obj of rows) {
            sustArray.push(obj.apellido);
          }

        let rowsFilter=sustArray.filter((item,index)=>{
        return sustArray.indexOf(item)===index})

        rowsFilter.sort(function (a, b) {
            return a > b  ? 1 : a< b ? -1 : 0;
          });
          console.log(rowsFilter)
        return rowsFilter

      } catch (error) {
        throw error;
      }

}

async function getNombres(bd){
    try {
        var query = `select nombre from ${bd}`;
        var rows = await pool.query(query);

        let sustArray=[];

        for (let obj of rows) {
            sustArray.push(obj.nombre);
          }

        let rowsFilter=sustArray.filter((item,index)=>{
        return sustArray.indexOf(item)===index})

        rowsFilter.sort(function (a, b) {
            return a > b  ? 1 : a< b ? -1 : 0;
          });
          console.log(rowsFilter)
        return rowsFilter

      } catch (error) {
        throw error;
      }
}

module.exports={getApellidos,getNombres,getId}