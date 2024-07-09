import Movies from '@/components/movies';
import React from 'react';
const API_KEY = process.env.API_KEY;

const page = async ({searchParams}) => {

  const genre = searchParams.genre || 'fetchTrending';
  console.log(genre);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWVlYjRlZWRkZDA0MzI3NjIwMzNjNmI3MmE4MGQ5NyIsIm5iZiI6MTcyMDQzMzY3OS43NDEwMjYsInN1YiI6IjY2OGJiOWJlZTMyYWUyNGRhMmJhNTdiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gdLIUIBe-GlBVbng794zi3EC5NmwG3_md7x1FHsLJWk'
    }
  };
    const res = await fetch(`https://api.themoviedb.org/3${ genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?movie/popular?api_key=${API_KEY}`, options)
    const data = await res.json();
    const movies = data.results;
    // console.log(results);

  return (
    <div>
      <Movies movies={movies}></Movies>
    </div>
  );
};

export default page;