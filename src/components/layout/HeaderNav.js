import React from 'react'
import { NavLink } from "react-router-dom"

export const HeaderNav = () => {
    return (
        <>

            {/*Cabecera*/}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>

                <h1>MisPelis</h1>
            </header>
            <nav className='nav'>
                <ul>
                    <li><NavLink to="/nowplaying">Now Playing</NavLink></li>
                    <li><NavLink to="/porpular">Porpular</NavLink></li>
                    <li><NavLink to="/upcoming">UpComing</NavLink></li>
                </ul>
            </nav>
        </>



    )
}
