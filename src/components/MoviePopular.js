import React, { useEffect, useState } from "react";
import { getMoviePopular } from "../services/ApiController";
import Cardmovie from "./Cardmovie";
import PaginationGeneral from "./PaginationGeneral";
const { Row, Col } = require("react-bootstrap");

export const MoviePopular = () => {
  const [moviePopular, setmoviePopular] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMoviePopulars();
  }, []);

  const getMoviePopulars = async () => {
    let pelis = await getMoviePopular(page);

    pelis = pelis.results;

    setmoviePopular(pelis);
  };

  const getPaginatedPopular = async (page) => {
    let pelis = await getMoviePopular(page);
    pelis = pelis.results;
    setmoviePopular(pelis);
  };

  const nextPage = async () => {
    if (page < 1000) {
      let auxPage = page + 1;
      setPage(auxPage);
      getPaginatedPopular(auxPage);
    }
  };

  const prevPage = async () => {
    if (page !== 1) {
      const auxPage = page - 1;
      setPage(auxPage);
      getPaginatedPopular(auxPage);
    } else {
      getPaginatedPopular(page);
    }
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        {moviePopular != null ? (
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
