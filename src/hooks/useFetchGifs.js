import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {

        getGifs(category)
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                })

            })
    }, [category])


    return state; // data: [], loading: true
}

/*
       useEffect( () => {
        //getGifs retorna una promesa por eso puedo poner un then
        getGifs(category)
            .then(setImages)
    }, [category]) //sí la categoría cambia, va volver ejecutar este efecto.

    // se manda un arreglo que no tiene ni una dependencia (vacío), el useEffect  solo se va disparar una única vez.
    //este código se va ejecutar cuando el componente es renderizado por primera vez.
*/