
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 6543221,
        lat: 13.32456,
        lng: 34.32344,
    } 
};

///console.log(persona);

const persona2 = { ...persona };//...+objeto clon del objeto metodo de react
persona2.nombre = 'Peter';
persona2.apellido = 'Parker';

console.log(persona);
console.log(persona2);