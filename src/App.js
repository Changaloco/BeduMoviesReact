import { useState } from "react";
import { MyRoutes } from "./components/router/MyRoutes";
import { MovieSearchForm } from "./components/search/MovieSearchForm";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MovieNowPlaying } from "./components/MovieNowPlaying";
import { MoviePopular } from "./components/MoviePopular";
import { MovieUpComing } from "./components/MovieUpComing";
import  MovieSearch  from "./components/search/MovieSearch";
import Movie from "./components/pages/Movie";
import Grid from "@mui/material/Grid";
import { Container } from "react-bootstrap";
function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <section>
                <Routes>
                  <Route exact path="/" element={<MovieNowPlaying />}></Route>
                  <Route
                    exact
                    path="/nowplaying"
                    element={<MovieNowPlaying />}
                  ></Route>
                  <Route
                    exact
                    path="/popular"
                    element={<MoviePopular />}
                  ></Route>
                  <Route
                    exact
                    path="/upcoming"
                    element={<MovieUpComing />}
                  ></Route>
                  <Route
                    exact
                    path="/filter/:search"
                    element={<MovieSearch />}
                  ></Route>
                  <Route exact path="/movie/:id" element={<Movie />}></Route>
                </Routes>
              </section>
            </Grid>
            <Grid item xs={4}>
              <aside className="lateral">
                <MovieSearchForm />
              </aside>
            </Grid>
          </Grid>
        </Container>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
