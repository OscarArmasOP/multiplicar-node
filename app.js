const argv = require('./config/yargs').argv;
const color = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido pana');
}

//console.log(argv);

//console.log('Limite', argv.limite);

/*
let parametro = argv[2];
//Separar elementro de un string a un arreglo con split
let base = parametro.split('=')[1]



    */