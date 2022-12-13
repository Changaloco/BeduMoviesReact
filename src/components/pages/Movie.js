import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  getDetails,
  getVideos,
  getCastMovie,
  getSimilarMovies,
} from "../../services/ApiController";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Row,
  Col,
  Badge,
  Card,
  Button,
  Image,
} from "react-bootstrap";
import { Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CarouselsVideo from "../CarouselsVideo";
import MovieCast from "../MovieCast";
import SimilarMovies from "../SimilarMovies";

export default function Movie(props) {
  const [movie, setMovie] = useState([]);
  const [rate, setRate] = useState(0);
  const [video, setVideo] = useState([]);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    getVideo();
  }, []);

  useEffect(() => {
    getCast();
  }, []);

  useEffect(() => {
    getSimilar();
  }, []);

  const getMovie = async () => {
    let peli = await getDetails(id);
    setMovie(peli);
    const rate = Math.round(movie.vote_average / 2);
    setRate(rate);
  };

  const getVideo = async () => {
    let video = await getVideos(id);
    setVideo(video);
  };

  const getCast = async () => {
    let auxCast = await getCastMovie(id);
    setCast(auxCast);
  };

  const getSimilar = async () => {
    let auxSimilar = await getSimilarMovies(id);
    setSimilar(auxSimilar);
  };

  const printGenres = () => {
    if (movie.genres) {
      return movie.genres.map((genre) => {
        return (
          <Badge
            key={genre.name}
            variant="secondary"
            style={{ marginRight: "5px" }}
          >
            {genre.name}
          </Badge>
        );
      });
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                width: "100%",
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                fluid
                rounded
              />
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                width: "100%",
              }}
            >
              <Card.Body>
                <Card.Title className="text-center">{movie.title}</Card.Title>
                <span className="text-center" style={{ display: "block" }}>
                  {movie.tagline}
                </span>
                <div
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {Array.from({ length: rate }, (v, i) => (
                    <StarIcon key={i} style={{ color: "yellow" }} />
                  ))}
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {printGenres()}
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <Row>
                    <Col>
                      <div
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>
                          Release Date: {movie.release_date}
                        </span>{" "}
                      </div>
                    </Col>
                    <Col>
                      <div
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>
                          Runtime: {movie.runtime} minutes
                        </span>{" "}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div style={{ textAlign: "center" }}>
                        <span style={{ fontWeight: "bold" }}>
                          Budget: $ {movie.budget} USD{" "}
                        </span>
                      </div>
                    </Col>
                    <Col>
                      <div style={{ textAlign: "center" }}>
                        <span style={{ fontWeight: "bold" }}>
                          Revenue: $ {movie.revenue} USD{" "}
                        </span>
                      </div>
                    </Col>
                  </Row>
                </div>

                <Card.Text>{movie.overview}</Card.Text>
                <div
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold", textAlign: "center" }}>
                    Production:
                  </span>{" "}
                  <Row>
                    {movie.production_companies
                      ? movie.production_companies.map((company) => {
                          return (
                            <Col key={company.name} xs={4}>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <Avatar
                                  alt="company.name"
                                  src={
                                    company.logo_path
                                      ? `https://image.tmdb.org/t/p/w500/${company.logo_path}`
                                      : "https://www.freeiconspng.com/uploads/no-image-icon-6.png"
                                  }
                                />
                                <span style={{ fontWeight: "bold" }}>
                                  {company.name}{" "}
                                  {movie.production_companies.indexOf(company) <
                                  movie.production_companies.length - 1
                                    ? ","
                                    : ""}
                                </span>
                              </div>
                            </Col>
                          );
                        })
                      : ""}
                  </Row>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "block",
                  }}
                >
                  <Button
                    target="_blank"
                    as="a"
                    href={movie.homepage}
                    style={{
                      width: "100%",
                    }}
                    size="lg"
                    variant="primary"
                  >
                    Go to Webpage
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              style={{
                marginTop: "20px",
                marginLeft: "10px",
                marginRight: "10px",
                width: "100%",
              }}
            >
              <Card.Body>
                <Card.Title className="text-center">Videos</Card.Title>
                <div>
                  <CarouselsVideo video={video} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <SimilarMovies similar={similar} />
        <MovieCast cast={cast} />
      </Container>
    </>
  );
}
