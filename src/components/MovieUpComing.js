import React, { useEffect, useState } from "react";
import { getMovieUpComing } from "../services/ApiController";
import Cardmovie from "./Cardmovie";
import PaginationGeneral from "./PaginationGeneral";
import { Col, Row } from "react-bootstrap";
export const MovieUpComing = () => {
  const [movieUpComing, setMovieUpComing] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovieUpComings(1);
  }, []);

  const getMovieUpComings = async () => {
    let pelis = await getMovieUpComing(1);

    pelis = pelis.results;

    setMovieUpComing(pelis);
  };

  const getPaginatedUpComing = async (page) => {
    let pelis = await getMovieUpComing(page);

    pelis = pelis.results;

    setMovieUpComing(pelis);
  };

  const prevPage = async () => {
    if (page !== 1) {
      const auxPage = page - 1;
      setPage(auxPage);
      getPaginatedUpComing(auxPage);
    } else {
      getPaginatedUpComing(page);
    }
  };

  const nextPage = async () => {
    if (page < 1000) {
      let auxPage = page + 1;
      setPage(auxPage);
      getPaginatedUpComing(auxPage);
    }
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        {movieUpComing != null ? (
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
