import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <section className=" ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }
  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((currentMovie) => {
            const { imdbID, Poster, Title } = currentMovie;
            const MovieTitle = Title.substring(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {MovieTitle.length > 15
                        ? ` ${MovieTitle}... `
                        : MovieTitle}
                    </h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
