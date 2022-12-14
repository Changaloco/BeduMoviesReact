import React from "react";

export default function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 item">
              <h3>Integrantes</h3>
              <ul>
                <li>
                  <a href="https://github.com/Changaloco" target="_blank">
                    Gonzalo Olvera
                  </a>
                </li>
                <li>
                  <a href="https://github.com/olvera93" target="_blank">
                    Emanuel Alamilla Hernandez
                  </a>
                </li>
                <li>
                  <a href="https://www.themoviedb.org/" target="_blank">
                    Powered by themoviedb
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>MOVIEREACT</h3>
              <p>
                MovieReact es una pagina web donde podemos conocer acerca de las
                mejores peliculas de la actualida y acerca de las peliculas mas
                interesantes del cine mexicano.
              </p>
            </div>
          </div>
          <p className="copyright">Equipo 14 © 2022</p>
        </div>
      </footer>
    </div>
  );
}
