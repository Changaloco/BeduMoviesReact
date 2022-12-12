import React, { useEffect, useState } from 'react'
import { getMovieUpComing } from '../services/ApiController'

export const MovieUpComing = () => {

    const [movieUpComing, setMovieUpComing] = useState([])


    useEffect(() => {
        getMovieUpComings()
    }, [])

    const getMovieUpComings = async () => {
        let pelis = await getMovieUpComing()

        pelis = pelis.results

        setMovieUpComing(pelis)
    }


    return (
        <>
            {movieUpComing != null ? movieUpComing.map((peli) => {
                return (
                    <article className="peli-item" key={peli.id}>
                        <h3 className="title">{peli.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`} alt={peli.id} className="card-img-top " style={{ maxHeight: '330px' }} loading="lazy" />
                    </article>

                )
            })
                : <h2>No hay peliculas para mostrar</h2>
            }

        </>
    )
}
