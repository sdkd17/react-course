

const apiKey = 'nJgFoWKmfae1ZgLV4aOMdPlNp4VsVJVS';
const tag = 'NBA';
const rating = 'g';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=${rating}`);

// peticion.then ( (resp) => {
//   resp.json().then( ( data ) => {
//     console.log(data);
//   })
// })
// .catch( console.wanr );

peticion
  .then ( resp => resp.json())
  .then ( ({ data } ) => {
    console.log(data);
    const { url } = data.images.original;
    console.log(url)

    const img = document.createElement('img');
    img.src = url;


    document.body.append(img);
  })
.catch( console.wanr );

