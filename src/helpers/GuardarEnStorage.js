export const GuardarEnStorage = (key, item) => {

    // Obtener los elementos que ya tenemos en LocalStorage
    let items = JSON.parse(localStorage.getItem(key))

    // Comprobar si es un array
    if(Array.isArray(items)){ 
        // Añadir un elemento nuevo
        items.push(item)
    } else {
        // Crear un array
        items = [item]
    }

    // Guardar en el LocalStorage
    localStorage.setItem(key, JSON.stringify(items))

    // Devolver objeto guardado

    return item

}