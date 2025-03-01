import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../ReduxManager/Action";
import { useNavigate } from "react-router-dom";
import Pagination from "../Component/Pagination";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { popular } = useSelector((state) => state);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12)


  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage

  const currentPost = popular.slice(firstPostIndex, lastPostIndex)

  const handleNavigate = (id) => {
    navigate(`/movie/${id}`)
  }

  
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <>
      <div className="all-list-movies">

        <div className="all-popular-cards">
          {currentPost.map((movie) => (
            <div key={movie.id} className="movie-card" onClick={() => handleNavigate(movie.id)}>
              <div className="movie-img">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </div>
              <div className="title">{movie.title}</div>
              <div className="rating">⭐ {movie.vote_average || "N/A"}</div>
            </div>
          ))}
        </div>
        <Pagination totalPost={popular.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
      </div>

    </>

  );
};

export default PopularMovies;
