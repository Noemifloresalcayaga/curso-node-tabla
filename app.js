
const argv = require('./config/yargs')
const {crearArchivo} = require('./helpers/multiplicar')
const colors = require('colors');



crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creada'))
    .catch(err => console.log(err));