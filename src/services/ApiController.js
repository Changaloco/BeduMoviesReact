const API_KEY= '38ef64108127c75e24590c44c9513a57'
const BASE_URL = "https://api.themoviedb.org/3/"

export const makeGetRequest = async (endpoint) => {

    try {
        const requestConfig = { method: 'get' }
        var response = await fetch(endpoint, requestConfig)
        return response;
    } catch(e) {
        console.log(e)
    }

}

export const getVideos = async (movieId) => {

    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}`)
        const data = await response.json()
        return data.results
    } catch(e) {
        console.log(e)
    }
}

export const getMovie = async (movieId) => {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }
   
}

export const getDetails = async (movieId) => {
    try {
        const endpoint = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
        const response = await makeGetRequest(endpoint)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }
}

export const getMovies = async (page) => {

    try {
        const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }
 
}

export const getGenres = async () => {

    try {
        const response = await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
    }

   
}

export const getMoviesByGenre = async (genreId, page) => {

    try {
        const response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }


}

export const getMoviesBySearch = async (query, page) => {

    try {
        const response = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }

  
}

export const getMovieTrending = async (timeWindow = 'week', type = 'movie') => {
    try {
        const url = `${BASE_URL}trending/${type}/${timeWindow}?api_key=${API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch(e) {
        console.log(e)
    }
}

export const getMovieNowPlaying = async () => {
    try {
        const url = `${BASE_URL}movie/now_playing?api_key=${API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }
}

export const getMoviePopular = async () => {
    try {
        const url = `${BASE_URL}movie/popular?api_key=${API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }
}

export const getMovieUpComing = async () => {
    try {
        const url = `${BASE_URL}movie/upcoming?api_key=${API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }
}

export const findMovie = async (searchQuery) => {
    try {
        const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&total_results=5`;
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }
}

export const getCastMovie = async (movieId) => {
    try {
        const url = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }
}

export const getSimilarMovies = async (movieId) => {
    try {
        const url = `${BASE_URL}movie/${movieId}/similar?api_key=${API_KEY}&page=1`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }
}