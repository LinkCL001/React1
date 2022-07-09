import { getHeroesById } from "./08-ExportImport";

// const promesa = new Promise( (resolve, reject)=> {
//     setTimeout(() => {
//         const heroe = getHeroesById(2);
//         resolve( heroe )
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('Then de la promesa', heroe)
// })
// .catch( err => console.log(err))

const getHeroesByIdAsync = ( id ) => {
    return new Promise( (resolve, reject)=> {
            setTimeout(() => {
                const heroe = getHeroesById(id);
                if ( heroe ) {
                   resolve( heroe ) 
                } else {
                    reject('No se pudo encontrar al Heroe')
                }    
            }, 2000);
        });
}

getHeroesByIdAsync(10)
//.then( heroe => console.log('Heroe', heroe))
.then(console.log)
.catch(console.warn)