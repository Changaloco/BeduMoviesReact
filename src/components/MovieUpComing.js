import React, { useEffect, useState } from "react";
import { getMovieUpComing } from "../services/ApiController";
import Cardmovie from "./Cardmovie";
import { Col, Row } from "react-bootstrap";
export const MovieUpComing = () => {
  const [movieUpComing, setMovieUpComing] = useState([]);

  useEffect(() => {
    getMovieUpComings();
  }, []);

  const getMovieUpComings = async () => {
    let pelis = await getMovieUpComing();

    pelis = pelis.results;

    setMovieUpComing(pelis);
  };

  return (
    <>
      <Row>
        {movieUpComing != null ? (
          movieUpComing.map((peli) => {
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
