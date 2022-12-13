import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Avatar } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
export default function MovieCast(props) {
  return (
    <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <h3 style={{ textAlign: "center" }}>Cast</h3>
            <Row>
              <Col xs={12}>
                <Carousel>
                  {props.cast.cast ? (
                    Array.from(
                      Array(Math.ceil(props.cast.cast.length / 3)).keys()
                    ).map((item) => {
                      return (
                        <Carousel.Item key={item}>
                          <Row>
                            {props.cast.cast
                              .slice(item * 3, item * 3 + 3)
                              .map((cast) => {
                                return (
                                  <Col
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                    xs={4}
                                    key={cast.id}
                                  >
                                    <Avatar
                                      alt={cast.name}
                                      src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                                      sx={{ width: 100, height: 100 }}
                                    />
                                    <h5 style={{ textAlign: "center" }}>
                                      {cast.name.substr(0, 15)}
                                    </h5>
                                    <p style={{ textAlign: "center" }}>
                                      {cast.character.substr(0, 15)}
                                    </p>
                                  </Col>
                                );
                              })}
                          </Row>
                        </Carousel.Item>
                      );
                    })
                  ) : (
                    <h3>No cast</h3>
                  )}
                </Carousel>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
