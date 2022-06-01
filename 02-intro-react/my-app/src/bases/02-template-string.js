
const nombre = 'Juan';
const apellido = 'Quezada';

//const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `
${nombre} 
${apellido}
${ 1 + 1 }
`;

console.log( nombreCompleto );

function getSaludo(nombre){
    return 'Hola Mundo!!' + nombre + ' ' + apellido;
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`);