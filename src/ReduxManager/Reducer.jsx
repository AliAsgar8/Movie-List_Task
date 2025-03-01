const initialState = {
    popular: [],
    topRated: [],
    upcoming: [],
    movieDetails: {},
    cast: [],
    searchQuery: "",
    searchResults: [],
    error: null,
  };
  
  const myReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_POPULAR":
        return { ...state, popular: action.payload };
      case "SET_TOP_RATED":
        return { ...state, topRated: action.payload };
      case "SET_UPCOMING":
        return { ...state, upcoming: action.payload };
      case "SET_MOVIE_DETAILS":
        return { ...state, movieDetails: action.payload };
      case "SET_CAST":
        return { ...state, cast: action.payload };
      case "SET_SEARCH_QUERY":
        return { ...state, searchQuery: action.payload };
      case "SET_SEARCH_RESULTS":
        return { ...state, searchResults: action.payload };
      case "SET_ERROR":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default myReducer;
  