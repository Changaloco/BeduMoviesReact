import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'

export const Crear = ({setListadoState}) => {

    const title = "Añadir pelicula"
    const [ peliculaState, setPeliculaState ] = useState({
        titulo: "",
        descripcion: ""
    })

    const { titulo, descripcion } = peliculaState

    const conseguirDatosForm = (e) => {
        e.preventDefault()

        // Obtener los datos del formulario
        let target = e.target
        let titulo = target.titulo.value
        let descripcion = target.descripcion.value

        // Crear el objeto pelicula
        let pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }
        
        // Guardar estado
        setPeliculaState(pelicula)

         // Actualizar el listado
         setListadoState(elementos => {
            return [...elementos, pelicula]
         })

        // Guardar en el localStorage
        GuardarEnStorage("pelis", pelicula)

    }

    return (
        <div className="add">
            <h3 className="title">{title}</h3>
            
            <form onSubmit={conseguirDatosForm}>
                <input type="text" 
                        id="titulo" 
                        name="titulo"
                        placeholder="Titulo" />

                <textarea 
                        id="descripcion" 
                        name="descripcion"
                        placeholder="Descripción"></textarea>

                <input type="submit" 
                        id="save" 
                        value="Guardar" />
            </form>
        </div>
    )
}
