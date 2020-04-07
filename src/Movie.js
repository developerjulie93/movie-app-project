import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, year, rating, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <span className="movie__title">{title} </span>
        <span className="movie__year">{year}</span>
        <h3 className="movie__genres">{genres.map((genre) => `${genre} `)}</h3>
        <h4 className="movie__rating">Star: {rating}</h4>
        <p className="movie__summary">{summary.slice(0, 250)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
