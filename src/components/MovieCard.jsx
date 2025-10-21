import React from 'react';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w342';

export default function MovieCard({ movie, genresMap = {} }) {
  const poster = movie.poster_path ? IMAGE_BASE + movie.poster_path : null;
  const genreNames = (movie.genre_ids || [])
    .map(id => genresMap[id])
    .filter(Boolean)
    .join(', ');

  return (
    <div className="movie-card">
      {poster ? (
        <img loading="lazy" src={poster} alt={movie.title} />
      ) : (
        <div className="poster-placeholder">No Image</div>
      )}
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="meta">
          {movie.release_date ? movie.release_date.slice(0, 4) : '—'} · ⭐ {movie.vote_average ?? '—'}
        </p>
        <p className="genres">{genreNames}</p>
        <p className="overview">
          {movie.overview?.slice(0, 140)}
          {movie.overview && movie.overview.length > 140 ? '…' : ''}
        </p>
      </div>
    </div>
  );
}
