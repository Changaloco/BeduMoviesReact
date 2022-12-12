import { useState } from "react";
import { MyRoutes } from "./components/router/MyRoutes";
import { MovieSearch } from "./components/search/MovieSearch";
import { MovieSearchForm } from "./components/search/MovieSearchForm";


function App() {

    const [listadoState, setListadoState] = useState([])


  return (
    <div className="layout">
     

      {/*Barra de navegación*/}
      <MyRoutes/>

      {/*Barra lateral*/}
      <aside className="lateral">
        <MovieSearchForm />
      </aside>
    </div>
  );
}

export default App;
