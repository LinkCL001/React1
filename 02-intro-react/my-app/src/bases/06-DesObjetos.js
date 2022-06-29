
//desestructuracion

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

//const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ nombre, edad, clave, rango = 'Capitan'  }) => {
    return {
        nombreClave: clave,
        anos: edad,
        latlng: {
            lat:14.22334,
            lng:-31.54322
        }
    }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const { nombreClave, anos, latlng:{lat, lng} } = useContext( persona );

console.log(nombreClave, anos);
console.log(lat,lng);
