import React, { useEffect, useState } from 'react'
import { getMoviePopular } from '../services/ApiController'

export const MoviePopular = () => {

  const [moviePopular, setmoviePopular] = useState([])

  useEffect(() => {
    getMoviePopulars()
}, [])

  const getMoviePopulars = async () => {
    let pelis = await getMoviePopular()

    pelis = pelis.results

    setmoviePopular(pelis)

  }


  return (
    <>
        { moviePopular!= null ? moviePopular.map((peli) => {
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
