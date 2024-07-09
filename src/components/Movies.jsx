import React from 'react';
import MovieCard from './MovieCard';
// import MovieCard from './MovieCard';

const Movies = ({movies}) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-xl mx-auto'>
            {
                movies.map(movie =><MovieCard key={movie.id} movie={movie}></MovieCard>)
            }
        </div>
    );
};

export default Movies;