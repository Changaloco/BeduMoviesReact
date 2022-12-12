import React from "react";
import { getMovies, getGenres } from "../data";
export default function Home() {
  const [movies, setMovies] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  React.useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    const response = await getGenres();
    console.log(response);
    setGenres([...response]);
    console.log(genres);
  };
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
