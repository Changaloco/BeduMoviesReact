import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom"
import { Footer } from '../layout/Footer'
import { HeaderNav } from '../layout/HeaderNav'
import { MovieNowPlaying } from '../MovieNowPlaying'
import { MoviePopular } from '../MoviePopular'
import { MovieUpComing } from '../MovieUpComing'
import { MovieSearch } from '../search/MovieSearch'

export const MyRoutes = () => {
    return (
        <BrowserRouter>

            {/* Header y Navegación */}
            <HeaderNav />

            {/* Contenido central */}
            <section className='content'>
                <Routes>
                    <Route path='/nowplaying' element={<MovieNowPlaying />}></Route>
                    <Route path='/porpular' element={<MoviePopular />}></Route>
                    <Route path='/upcoming' element={<MovieUpComing />}></Route>
                    <Route path='/filter/:search' element={<MovieSearch />}></Route>
                </Routes>
            </section>

            {/* Footer */}
            <Footer />
        </BrowserRouter>
    )
}
