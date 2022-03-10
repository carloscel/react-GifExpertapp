
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ZLuuuwW16FP3xXpQqVDEB9nFXvT6ksTl`;
    //encodeURI reemplaza los espacios en blanco por signos
    const resp = await fetch (url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url  
        }
    })

    
    return gifs;
}

//como tiene async no regresa directamente los gifs, sino regresa una promesa que resuelve la colección de mis imagenes.