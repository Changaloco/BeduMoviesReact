import React from "react";
import { Card, Button } from "react-bootstrap";
export default function Cardmovie(props) {
  return (
    <a
      key={props.peli.id}
      href={`/movie/${props.peli.id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Card>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.peli.poster_path}`}
            style={{
              width: "100%",
              height: "80%",
              objectFit: "cover",
            }}
            alt={props.peli.id}
            className="card-img-top "
            loading="lazy"
          />
        </div>
        <Card.Body>
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#000",
            }}
            className="title"
          >
            {props.peli.title.substring(0, 13) + "..."}
          </h3>
          <div>
            <Button
              style={{
                display: "block",
                width: "100%",
              }}
              variant="primary"
              size="lg"
            >
              Ver más
            </Button>
          </div>
        </Card.Body>
      </Card>
    </a>
  );
}
