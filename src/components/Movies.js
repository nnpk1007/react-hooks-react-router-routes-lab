// Movies
// This component should render the text Movies Page in an <h1>,
// and make a new <div> for each movie.
// The <div> should contain the movie's title,
// time and a <ul> with a list of its genres,
// each within their own <li>.
import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies);
  const moviesDisplay = movies.map((movie, index) => {
    return (
      <div key={index}>
        {movie.title} 
        {movie.time}
        <ul>
          <li>{movie.genres}</li>
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesDisplay}
    </div>
  );
}

export default Movies;
