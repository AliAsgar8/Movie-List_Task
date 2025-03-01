import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const SearchPage = () => {
    const navigate = useNavigate();
    const searchResults = useSelector((state) => state.searchResults);

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(12)


    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage

    const currentPost = searchResults.slice(firstPostIndex, lastPostIndex)

    const handleNavigate = (id) => {
        navigate(`/movie/${id}`);
    };

    return (
        <div className="all-list-movies">

            <div className="all-popular-cards">
                {currentPost.length > 0 ? (
                    searchResults.map((movie) => (
                        <div key={movie.id} className="movie-card" onClick={() => handleNavigate(movie.id)}>
                            <div className="movie-img">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            </div>
                            <div className="title">{movie.title}</div>
                            <div className="rating">⭐{movie.vote_average || "N/A"}</div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">No search results found</div>
                )}
            </div>
            <Pagination totalPost={searchResults.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default SearchPage;
