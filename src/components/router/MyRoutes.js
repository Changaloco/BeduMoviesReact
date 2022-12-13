import React from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { MovieNowPlaying } from '../MovieNowPlaying'
import { MoviePopular } from '../MoviePopular'
import { MovieUpComing } from '../MovieUpComing'
import  MovieSearch  from '../search/MovieSearch'
import  Movie  from '../pages/Movie';

export const MyRoutes = () => {
    return (
        <BrowserRouter>

            {/* Contenido central */}
            <section className='content'>
                <Routes>
                    <Route path='/nowplaying' element={<MovieNowPlaying />}></Route>
                    <Route path='/porpular' element={<MoviePopular />}></Route>
                    <Route path='/upcoming' element={<MovieUpComing />}></Route>
                    <Route exact path='/filter/:search' element={<MovieSearch />}></Route>
                    <Route exact path='/movie/:id' element={<Movie/>}></Route>
                </Routes>
            </section>

            
        </BrowserRouter>
    )
}
