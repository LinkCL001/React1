

const personajes = ['Goku','Vegeta','Trunk'];

//console.log(personajes[0]) Goku

const [ , , p3] = personajes;
console.log( p3 )

// Trunk

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras,numeros);

const useState = ( valor ) => {
    return  [ valor, ()=>{console.log('Hola Mundo')}]
}
// eslint-disable-next-line react-hooks/rules-of-hooks
const [ nombre, setNombre ] = useState('Goku');
console.log(nombre)
setNombre();

