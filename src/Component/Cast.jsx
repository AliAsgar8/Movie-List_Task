import React from "react";
import Pagination from "./Pagination";

const Cast = ({ cast, currentPost, postPerPage, setCurrentPage, currentPage }) => {
  return (
    <div className="all-list-movies">
      <div className="all-cast">
        <p className="cast">Cast</p>
        <div className="all-members">
          {currentPost.length > 0 ? (
            currentPost.map((actor) => (
              <div key={actor.id} className="members">
                <div className="member-img">
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                        : ""
                    }
                    alt={actor.name}
                  />
                </div>
                <p className="name">{actor.name}</p>
                <p className="character">Character: {actor.character}</p>
              </div>
            ))
          ) : (
            <p>No cast information available.</p>
          )}
        </div>
      </div>

      {/*  Pagination Component */}
      <Pagination
        totalPost={cast.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Cast;
