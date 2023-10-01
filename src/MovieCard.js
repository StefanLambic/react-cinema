import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie">
      <div></div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <h3> {movie.Title}</h3>
        <span>Type: {movie.Type}</span>
        <span>Year: {movie.Year}</span>
      </div>
    </div>
  );
}

export default MovieCard;
