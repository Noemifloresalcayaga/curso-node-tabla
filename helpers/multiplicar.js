const fs = require("fs");
const colors = require('colors');
const crearArchivo = async (base, listar, hasta) => {
  try{
    let salida, consola = "";
    
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
      consola += `${base} ${'x'.yellow} ${i} = ${base * i} \n`;
    }

    if(listar ){console.log(consola)};
 
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
 
  }catch(err){
    throw new Error('Ocurrio un error inesperado')
  }
    
};

module.exports = {
  crearArchivo,
};
