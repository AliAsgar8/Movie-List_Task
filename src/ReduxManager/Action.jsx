import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3/movie";

//  Fetch Popular Movies
export const fetchPopularMovies = () => (dispatch) => {
  axios.get(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) => dispatch({ type: "SET_POPULAR", payload: response.data.results }))
    .catch((error) => dispatch({ type: "SET_ERROR", payload: error.message }));
};

//  Fetch Top Rated Movies
export const fetchTopRatedMovies = () => (dispatch) => {
  axios.get(`${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) => dispatch({ type: "SET_TOP_RATED", payload: response.data.results }))
    .catch((error) => dispatch({ type: "SET_ERROR", payload: error.message }));
};

//  Fetch Upcoming Movies
export const fetchUpcomingMovies = () => (dispatch) => {
  axios.get(`${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) => dispatch({ type: "SET_UPCOMING", payload: response.data.results }))
    .catch((error) => dispatch({ type: "SET_ERROR", payload: error.message }));
};

//  Fetch Movie Details
export const fetchMovieDetails = (id) => (dispatch) => {
  axios.get(`${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US`)
    .then((response) => dispatch({ type: "SET_MOVIE_DETAILS", payload: response.data }))
    .catch((error) => dispatch({ type: "SET_ERROR", payload: error.message }));
};

//  Fetch Movie Cast
export const fetchMovieCast = (id) => (dispatch) => {
  axios.get(`${BASE_URL}/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then((response) => dispatch({ type: "SET_CAST", payload: response.data.cast }))
    .catch((error) => dispatch({ type: "SET_ERROR", payload: error.message }));
};

//  Search Movies
export const searchMovies = (query) => (dispatch) => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`)
    .then((response) => dispatch({ type: "SET_SEARCH_RESULTS", payload: response.data.results }))
    .catch((error) => dispatch({ type: "SET_ERROR", payload: error.message }));
};
