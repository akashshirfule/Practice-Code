import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((currentMovie) => {
            const {imdbID,Poster,Title}=currentMovie;
            return <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                    <div className="card-info">
                        <h2>{Title}</h2>
                        <img src={Poster} alt={imdbID}/>
                    </div>
                </div>
            </NavLink>
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
