import { heroes } from './data/heroes'

// const getHeroesById = (id) => {
//     return heroes.find((heroe) => {
//         if ( heroe.id === id ){
//             return true;
//         }else {
//             return false;
//         }
//     });
// }


//((heroe))//argumento de la funcion
const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id)

console.log(getHeroesById(2));

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

console.log(getHeroesByOwner('DC'));