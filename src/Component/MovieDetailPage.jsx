import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieCast, fetchMovieDetails } from "../ReduxManager/Action";
import Cast from "./Cast";

const MovieDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, cast } = useSelector((state) => state);

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 5;


  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPost = cast.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieCast(id));
  }, [dispatch, id]);

  return (
    <div className="full-movie-description">
      <div className="about-movie">
        <div className="movie-description">
          <div className="img-and-content">
            {/*  Left Side - Movie Poster */}
            <div className="left-movie-img">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
            </div>

            {/*  Right Side - Movie Details */}
            <div className="right-movie-content">
              <h1>{movieDetails.title}</h1>
              <p className="ratings">⭐ Rating: {movieDetails.vote_average || "N/A"}</p>
              <p className="movie-type">
                <span className="duration">{movieDetails.runtime || "N/A"} min</span>{" "}
                {movieDetails.genres?.map((genre) => genre.name).join(", ")}
              </p>
              <p className="release-date">
                📅 Release Date: {movieDetails.release_date || "N/A"}
              </p>
            </div>
          </div>

          {/*  Movie Overview */}
          <div className="movie-overview">
            <p className="overview">Overview</p>
            <p className="detail">{movieDetails.overview || "No overview available."}</p>
          </div>
        </div>

        {/*  Right Side Large Movie Image */}
        <div className="movie-image">
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
          />
        </div>
      </div>

      {/*  Movie Cast with Pagination */}
      <Cast cast={cast} currentPost={currentPost} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

export default MovieDetailPage;
