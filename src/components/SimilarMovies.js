import React from "react";
import { Card, Col, Row, Carousel } from "react-bootstrap";
import {Link} from "react-router-dom";
import { Navigate } from "react-router-dom";
export default function SimilarMovies(props) {
  return (
    <Card style={{ marginTop: "20px" }}>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <h3 style={{ textAlign: "center" }}>Similar Movies</h3>
          </Col>
          <Col xs={12}>
            <Carousel>
              {props.similar.results ? (
                [1, 2, 3, 4, 5, 6, 7].map((item) => {
                  return (
                    <Carousel.Item key={item}>
                      <Row>
                        {props.similar.results
                          .slice((item - 1) * 3, item * 3)
                          .map((movie) => {
                            return (
                              <Col xs={12} md={6} lg={4} key={movie.id}>
                                <a style={{textDecoration:"none"}} href={"../movie/"+movie.id}>
                                <Card
                                    style={{
                                      width: "100%",
                                      marginBottom: "20px",
                                    }}
                                  >
                                    <Card.Img
                                      variant="top"
                                      src={
                                        movie.poster_path
                                          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                          : "https://www.freeiconspng.com/uploads/no-image-icon-6.png"
                                      }
                                    />
                                    <Card.Body>
                                      <Card.Title>
                                        {movie.title.substr(0, 12) + "..."}
                                      </Card.Title>
                                    </Card.Body>
                                  </Card>
                                </a>
                              </Col>
                            );
                          })}
                      </Row>
                    </Carousel.Item>
                  );
                })
              ) : (
                <h3>No similar movies</h3>
              )}
            </Carousel>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
