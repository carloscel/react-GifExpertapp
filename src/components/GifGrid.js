import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    
      
    return (
        <>
            <h3>{category}</h3>
            
            {loading && <p className='animate__animated animate__flash animate__duration-2'>Loading</p>} 
            
            <div className='card-grid'>
                {
                    images.map( img => 
                        <GifGridItem
                            key = {img.id} 
                            {...img}//img = {img}
                            //estoy mandando cada una de las propiedades de las imagenes como una propiedad independiente
                        />
                    )    
                }
            </div>
                 
                
        </>
    )
}


//si destructuramos: images.map( {id, title} => <li key={id}>{title}</li> )
// images.map( img => <li key={img.id}> {img.title} </li> )

//loading && <p>Loading</p>
//sí "loading" es true entonces evalua "p"