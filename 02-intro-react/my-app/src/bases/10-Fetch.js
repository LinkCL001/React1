const apiKey = 'Of1p4SIGyeYRUMqXG8XL1pvMIPRu8rrs';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then( resp => resp.json() )
.then(({ data }) => {
    const { url } = data.images.original;
 //console.log(data.images.original.url)
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(console.warn)