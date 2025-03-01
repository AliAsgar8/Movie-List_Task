import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { popular, topRated, upcoming } = useSelector((state) => state);

// -------------------------Sidebar for responsive---------------------------

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // ----------------------Search for the movie-------------------------------

  const handleSearch = () => {
    if (!query.trim()) return;

    const allMovies = [...popular, ...topRated, ...upcoming];

    const matchedMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    dispatch({ type: "SET_SEARCH_RESULTS", payload: matchedMovies });

    navigate("/search");
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">MovieDb</div>
        <div className="nav-list">
          <ul className="nav-lists">
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Popular
              </Link>
            </li>
            <li>
              <Link to="/toprated" className={location.pathname === "/toprated" ? "active" : ""}>
                Top Rated
              </Link>
            </li>
            <li>
              <Link to="/upcoming" className={location.pathname === "/upcoming" ? "active" : ""}>
                Upcoming
              </Link>
            </li>
          </ul>
          <div className="nav-input">
            <input
              type="text"
              placeholder="Movie Name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="hamburger" onClick={toggleNavbar}>
          ☰
        </div>
      </div>
      <div className={`responsive-navbar ${isOpen ? "open" : "close"}`}>
        <div className="close-btn" onClick={toggleNavbar}>✖</div>
        <div className="responsive-nav-input">
          <div className="responsive-input">
            <input
              type="text"
              placeholder="Movie Name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="responsive-btn" onClick={toggleNavbar}>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <ul className="responsive-list">
          <li>
            <Link to="/" onClick={toggleNavbar} className={`popular-link location.pathname === "/" ? "active" : ""`} >
              Popular
            </Link>
          </li>
          <li>
            <Link to="/toprated" onClick={toggleNavbar} className={`popular-link location.pathname === "/toprated" ? "active" : ""`}>
              Top Rated
            </Link>
          </li>
          <li>
            <Link to="/upcoming" onClick={toggleNavbar} className={`popular-link location.pathname === "/upcoming" ? "active" : ""`}>
              Upcoming
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
