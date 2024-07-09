import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosThumbsUp } from "react-icons/io";

const MovieCard = ({ movie }) => {
  return (
    <div className="m-3 group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border border-slate-400 transition-shadow duration-300 p-2">
      <Link href={`/movie/${movie.id}`}>
        <div className="relative w-full h-80">
          <Image
            className="sm:rounded-lg hover:opacity-75 transition-opacity duration-400"
            layout="fill"
            objectFit="cover"
            alt="movie poster"
            src={`https://image.tmdb.org/t/p/original/${
              movie.poster_path || movie.backdrop_path
            }`}
          />
        </div>
        <div>
          <p className="line-clamp-2 text-sm">{movie.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {movie.title || movie.name}
          </h2>
          <div className="flex items-center justify-between">
            <p>{movie.release_date || movie.first_air_date}</p>
            <span className="flex gap-1 items-center">
              <IoIosThumbsUp></IoIosThumbsUp> <p>{movie.vote_count}</p>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
