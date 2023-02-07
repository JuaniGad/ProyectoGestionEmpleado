var pool = require("./bd");

async function getId(bd){
    try {
      var query = `select id from ${bd}`;
      var rows = await pool.query(query);

      let sustArray=[];

      for (let obj of rows) {
          sustArray.push(obj.id);
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
        return rowsFilter

      } catch (error) {
        throw error;
      }
}

async function getDni(bd){
  try {
    var query = `select dni from ${bd}`;
    var rows = await pool.query(query);

    let sustArray=[];

    for (let obj of rows) {
        sustArray.push(obj.dni);
      }

    let rowsFilter=sustArray.filter((item,index)=>{
    return sustArray.indexOf(item)===index})

    rowsFilter.sort(function (a, b) {
        return a > b  ? 1 : a< b ? -1 : 0;
      });
    return rowsFilter

  } catch (error) {
    throw error;
  }
  
}

module.exports={getDni,getApellidos,getNombres,getId}