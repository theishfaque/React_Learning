import React from "react";
import Header from "./Header";
import Moviecard from "./Moviecard";
import Moviefile from "./movie.json";

const Movie = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex justify-between flex-wrap p-8 ">
        {Moviefile.map((elemet,index) => {
          return (
            <Moviecard
            key={index}
            Title={elemet.Title}
            Year={elemet.Year}
            Poster={elemet.Poster}
          />
          )
        })}
      </div>
      <div className="flex justify-center bg-slate-700 align-middle text-white h-24">
        Copyright Reserved 2023
      </div>
    </div>
  );
};

export default Movie;
