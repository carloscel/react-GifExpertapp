import React from 'react'

export const GifGridItem = ({title, url}) => { //tmb puede ir solo "props"

    //console.log({id, title, url});

    return (
        <div className='card animate__animated animate__bounce animate__duration-3'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
