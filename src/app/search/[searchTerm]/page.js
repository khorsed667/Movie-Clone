import Movies from '@/components/Movies';
import React from 'react';

const page = async({params}) => {
    const searchTerm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${process.env.API_KEY}`)
    const movie = await res.json();
    const results = movie.results;
    console.log(results);
    return (
        <div>
            {
                results && results.length === 0 && (
                    <h1 className='text-center mt-10 text-2xl'>No Results Found</h1>
                )
            }
            {
                results && <Movies movies={results}></Movies>
            }
        </div>
    );
};

export default page;