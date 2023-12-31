import "./App.css";
import SearchIcon from "./search.svg";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const apiKey = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.omdbapi.com?apikey=${apiKey}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    /* example*/
    searchMovies("Men In Black");
  }, []);

  return (
    <div className="App">
      <div className="app">
        <h1>Universal Cinema</h1>
        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>Sorry, no movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
