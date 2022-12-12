import React, { useEffect, useState } from 'react'
import { findMovie } from '../../services/ApiController'
import { MovieNowPlaying } from '../MovieNowPlaying'


export const MovieSearch = ({ title, poster_path, vote_average, release_date, overview, id }) => {

    return (
        <article className="peli-item" key={id}>
            <h3 className="title">{title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={id} className="card-img-top " style={{ maxHeight: '330px' }} loading="lazy" />
            <button className="detail" >Detail</button>
        </article>
    )

}
