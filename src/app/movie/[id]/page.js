import Image from "next/image";
import React from "react";
import { IoIosThumbsUp } from "react-icons/io";

const page = async ({ params }) => {
  const movieId = params.id;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWVlYjRlZWRkZDA0MzI3NjIwMzNjNmI3MmE4MGQ5NyIsIm5iZiI6MTcyMDQzMzY3OS43NDEwMjYsInN1YiI6IjY2OGJiOWJlZTMyYWUyNGRhMmJhNTdiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gdLIUIBe-GlBVbng794zi3EC5NmwG3_md7x1FHsLJWk",
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
    options
  );
  const movie = await res.json();
  // console.log(movie);

  return (
    <div className="max-w-screen-xl mx-auto mt-2 h-screen">
      <div className="flex flex-col md:flex-row m-1">
        <div className="h-screen w-full md:w-1/2 m-5">
        <Image
          width={500}
          height={500}
          style={{maxWidth:'100%', height: '100%'}}
          layout="fixed"
          alt="movie poster"
          src={`https://image.tmdb.org/t/p/original/${
            movie.poster_path || movie.backdrop_path
          }`}
        ></Image>
        </div>
        <div className="p-3 md:mt-10 w-full md:w-1/2">
          <h2 className="text-xl font-bold truncate mb-2">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-2">{movie.overview}</p>
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold"> Realise Date: {movie.release_date || movie.first_air_date}</p>
            <span className="flex gap-1 items-center">
              <IoIosThumbsUp></IoIosThumbsUp> <p>{movie.vote_count}</p>
            </span>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <p className="font-semibold">IMDb Rating :</p>{" "}
            <span>{movie.vote_average}</span>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <p className="font-semibold">Total votes :</p>{" "}
            <span>{movie.vote_count}</span>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <p className="font-semibold">Total Budget :</p>{" "}
            <span>{movie.budget}$</span>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <p className="font-semibold">Total Collection :</p>{" "}
            <span>{movie.revenue}$</span>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <p className="font-semibold">Total Runtime :</p>{" "}
            <span>{movie.runtime} min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
