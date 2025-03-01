import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedMovies } from '../ReduxManager/Action';
import Pagination from '../Component/Pagination';

const TopRelated = () => {
  const navigate = useNavigate();

  const { topRated } = useSelector((state) => state)
  const dispatch = useDispatch();


  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12)


  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage

  const currentPost = topRated.slice(firstPostIndex, lastPostIndex)

  useEffect(() => {
    dispatch(fetchTopRatedMovies())
  }, [dispatch])


  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="all-list-movies">

      <div className="all-popular-cards">
        {currentPost.map((movie) => (
          <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie.id)}>
            <div className="movie-img" >
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="title">{movie.title}</div>
            <div className="rating">⭐{movie.vote_average}</div>
          </div>
        ))}
      </div>
      <Pagination totalPost={topRated.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default TopRelated;
