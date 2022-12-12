import axios from "axios";

const token = "7aed8f983022a966be1ec09db5a5fc23";

const url = "https://api.themoviedb.org/3/";

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const getMovies = async () => {
  const response = await axios.get(`${url}genre/movie/list?api_key=${token}`);
  const data = response.data;
  return data;
};

const getGenres = async () => {
  try {
    let { data } = await axios.get(`${url}genre/movie/list?api_key=${token}`);
    let genres = Object.values(data.genres);
    const genresArray = [...genres];
    console.log(genresArray);
    console.log(data.genres);
    return genres;
  } catch (error) {
    console.log(error);
  }
};
export { getMovies, getGenres };
