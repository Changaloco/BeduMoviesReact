import React, { useEffect, useState } from "react";
import { getMovieNowPlaying } from "../services/ApiController";
import Cardmovie from './Cardmovie';
const { Row, Col } = require("react-bootstrap");

export const MovieNowPlaying = () => {
  const [listadoState, setListadoState] = useState([]);

  useEffect(() => {
    getMoviesNowPlaying();
  }, []);

  const getMoviesNowPlaying = async () => {
    let pelis = await getMovieNowPlaying();

    pelis = pelis.results;

    setListadoState(pelis);
  };

  return (
    <>
      <Row>
        {listadoState != null ? (
          listadoState.map((peli) => {
            return (
              <Col style={{
                marginBottom: '20px',
                marginTop: '20px'
              }} sm={4}>
                <Cardmovie peli={peli} />
              </Col>
            );
          })
        ) : (
          <h2>No hay peliculas para mostrar</h2>
        )}
      </Row>
    </>
  );
};
