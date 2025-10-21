import React from 'react';
import MovieCard from './MovieCard';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

export default function MovieList({ movies = [], genresMap = {}, loading, error }) {
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!movies.length) return <p style={{ textAlign: 'center' }}>No movies found.</p>;

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} genresMap={genresMap} />
      ))}
    </div>
  );
}
