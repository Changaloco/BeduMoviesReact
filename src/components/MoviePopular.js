import React, { useEffect, useState } from "react";
import { getMoviePopular } from "../services/ApiController";
import Cardmovie from "./Cardmovie";
const { Row, Col } = require("react-bootstrap");
export const MoviePopular = () => {
  const [moviePopular, setmoviePopular] = useState([]);

  useEffect(() => {
    getMoviePopulars();
  }, []);

  const getMoviePopulars = async () => {
    let pelis = await getMoviePopular();

    pelis = pelis.results;

    setmoviePopular(pelis);
  };

  return (
    <>
      <Row>
        {moviePopular != null ? (
          moviePopular.map((peli) => {
            return (
              <Col
                key={peli.id}
                style={{
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
                sm={4}
              >
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
