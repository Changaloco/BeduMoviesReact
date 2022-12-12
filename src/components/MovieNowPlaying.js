import React, { useEffect, useState } from 'react'
import { getMovieNowPlaying } from '../services/ApiController'


export const MovieNowPlaying = () => {

    const [listadoState, setListadoState] = useState([])

    useEffect(() => {
        getMoviesNowPlaying()
    }, [])


    const getMoviesNowPlaying = async () => {
        
        let pelis = await getMovieNowPlaying()

        pelis = pelis.results

        setListadoState(pelis)

    }

    return (
        <>
            { listadoState!= null ? listadoState.map((peli) => {
                return (
                    <article className="peli-item" key={peli.id}>
                        <h3 className="title">{peli.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`} alt={peli.id} className="card-img-top " style={{ maxHeight: '330px' }} loading="lazy" />
                        <button className="detail" >Detail</button>
                    </article>

                )
            })
            : <h2>No hay peliculas para mostrar</h2>
        }

        </>
    )
}
