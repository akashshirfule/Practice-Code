import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const {query, setQuery, iserror }= useGlobalContext();
  return (
    <>
      <section className="search-section">
        <h2>Search Bar</h2>
        <form onSubmit={(e) => e.preventDefault()} action="#">
          <div>
            <input
              type="text"
              placeholder="search here"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            ></input>
          </div>
        </form>
        <div className="card-error">
          <p> {iserror.show && iserror.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;
