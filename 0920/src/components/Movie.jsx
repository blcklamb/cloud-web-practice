import React from "react";

const Movie = (props) => {
  const { title, image, genre, releaseDate, rating, movieLength } = props;
  return (
    <div className="main">
      <img className="movieImage" src={image} alt={title} />
      <div>
        <div>{title}</div>
        <div>{genre}</div>
        <div>{releaseDate}</div>
        <div>{rating}</div>
        <div>{movieLength}</div>
      </div>
    </div>
  );
};

export default Movie;
