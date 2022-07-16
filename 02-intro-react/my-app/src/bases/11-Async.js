//const getImagenPromesa = () => new Promise( resolve =>(''))

const getImage = async() => {
    try {
        const apiKey = 'Of1p4SIGyeYRUMqXG8XL1pvMIPRu8rrs';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;  
        const img = document.createElement('img');
        img.src = url;
        
        document.body.append(img); 
    } catch (error) {
        console.log(error)
    }


}
getImage();








 //console.log(data.images.original.url)
