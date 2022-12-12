import React from 'react'


export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar película"

    const guardarEdicion = (e, id) => {
        e.preventDefault()

        // Conseguir el target del evento
        let target = e.target

        // Buscar el indice del objeto de la pelíula a actualizar
        const pelisAlmacenadas = conseguirPeliculas()
        const indice = pelisAlmacenadas.findIndex(peli => peli.id === id)

        // Crea objeto con el indice
        let peliActualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // Actualizar el objeto con los nuevos valores
        pelisAlmacenadas[indice] = peliActualizada

        // Guardar el nuevo listado en el localstorage
        localStorage.setItem("pelis", JSON.stringify(pelisAlmacenadas))

        // Actualizar estados
        setListadoState(pelisAlmacenadas)
        setEditar(0)
    }


    return (
        <div className='edit_form'>
            <h3 className='title'>{titulo_componente}</h3>

            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input type="text"
                    name="titulo"
                    className='titulo_editado'
                    defaultValue={peli.titulo}
                />

                <textarea name="descripcion"
                defaultValue={peli.descripcion}
                className='descripcion_editada' />

                <input type='submit' className='editar' value="Actualizar" />

            </form>

        </div>
    )
}
