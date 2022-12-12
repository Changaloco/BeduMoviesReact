import React, { useState } from 'react'
import { findMovie } from '../../services/ApiController';
import { MovieSearch } from './MovieSearch';


export const MovieSearchForm = () => {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    const changeHandler = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
        e.target.value = ''
    }

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("Searching");
        try {
            let response = await findMovie(query)
            response = response.results
            setMovies(response)
            e.target.value = ''

        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <>

            <div className="search">
                <h3 className="title">Search: {query}</h3>
                <form onSubmit={searchMovie}>
                    <input type="text"
                        id="search_field"
                        name="movieSearch"
                        autoComplete='off'
                        placeholder="Search for a movie"
                        value={query}
                        onChange={changeHandler}
                    />
                    <button id="search">Search</button>
                </form>
            </div>
            <div>
                {movies.length > 0 ? (
                    <div className="container">
                        <div className="grid">
                            {movies.map((movieReq) =>
                                <MovieSearch key={movieReq.id} {...movieReq} />)}
                        </div>
                    </div>
                ) : (
                    <h2>Sorry !! No Movies Found</h2>
                )}
            </div>
        </>





    )
}
