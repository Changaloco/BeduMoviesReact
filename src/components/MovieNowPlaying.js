import React, { useEffect, useState } from "react";
import { getMovieNowPlaying } from "../services/ApiController";
import Cardmovie from "./Cardmovie";
import PaginationGeneral from "./PaginationGeneral";
const { Row, Col } = require("react-bootstrap");

export const MovieNowPlaying = () => {
  const [listadoState, setListadoState] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMoviesNowPlaying();
  }, []);

  const getMoviesNowPlaying = async () => {
    let pelis = await getMovieNowPlaying(1);

    pelis = pelis.results;

    setListadoState(pelis);
  };

  const getPaginatedNowPlaying = async (page) => {
    let pelis = await getMovieNowPlaying(page);
    pelis = pelis.results;
    setListadoState(pelis);
  };

  const nextPage = async () => {
    if (page < 1000) {
      let auxPage = page + 1;
      setPage(auxPage);
      getPaginatedNowPlaying(auxPage);
    }
  };

  const prevPage = async () => {
    if (page !== 1) {
      const auxPage = page - 1;
      setPage(auxPage);
      getPaginatedNowPlaying(auxPage);
    } else {
      getPaginatedNowPlaying(1);
    }
  };

  return (
    <>
      <Row>
        {listadoState != null ? (
          listadoState.map((peli) => {
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        {listadoState != null ? (
          <PaginationGeneral
            page={page}
            prevAction={prevPage}
            nextAction={nextPage}
          />
        ) : null}
      </div>
    </>
  );
};
