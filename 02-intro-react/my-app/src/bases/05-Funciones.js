//funcion normal
const saludar = function( nombre ){ 
    return `Hola, ${ nombre }`;
}
//funcion flecha
const saludar2 = ( nombre ) => { 
    return `Hola, ${ nombre }`;
}
// sin return 
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

console.log( saludar('Goku'));
console.log( saludar2('Vegeta'));
console.log(saludar3('Trunk'));

//devolver un objeto sin return
const getUser = () => ({
    uuid: 'ABC123',
    username: 'El_pap1233'
});

const user = getUser();

console.log(user)


// function getUsuarioActivo( nombre ) {
//     return {
//         uuid: 'ABC2345',
//         username: nombre
//     }
// };

// transformar a funcion flecha
const getUsuarioActivo = ( nombre ) => ({
        uuid: 'ABC2345',
        username: nombre
    });



const usuarioActivo = getUsuarioActivo('Juan');
console.log( usuarioActivo );