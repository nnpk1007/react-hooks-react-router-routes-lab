import React from "react";
import { directors } from "../data";

function Directors() {
  const directorInfo = directors.map((director) => (
    <div key={director.name}>
      {director.name}
      <ul>
        <li>{director.movies}</li>
      </ul>
    </div>
  ))
  return <div>
    <h1>Directors Page</h1>
    {directorInfo}
  </div>;
}

export default Directors;
// This component should render the text Directors Page in an <h1>, and make a new <div> for each director. 
// The <div> should contain the director's name and a <ul> with a list of their movies.