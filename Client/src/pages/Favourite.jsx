import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const Favourite = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    // 🧠 Load favourites from localStorage
    const savedFavourites = JSON.parse(localStorage.getItem('favouriteMovies')) || [];
    setFavouriteMovies(savedFavourites);
  }, []);

  return (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden min-h-[80vh]'>
      <h1 className='text-lg font-medium my-4'>Your Favourites</h1>

      {favouriteMovies.length > 0 ? (
        <div className='flex flex-wrap max-sm:justify-center gap-8'>
          {favouriteMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center h-[60vh]'>
          <h1 className='text-3xl font-bold text-center'>No favourite movies yet</h1>
          <p className='text-gray-400 mt-2 text-center'>
            Go to a movie and click the ❤️ button to add it here!
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourite;
