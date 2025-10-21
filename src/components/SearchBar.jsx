import React from 'react';

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  onSearch,
  genres,
  selectedGenre,
  setSelectedGenre,
  minRating,
  setMinRating,
}) {
  return (
    <div className="search-bar">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title..."
      />
      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">All genres</option>
        {genres.map(g => (
          <option value={g.id} key={g.id}>{g.name}</option>
        ))}
      </select>
      <select value={minRating} onChange={(e) => setMinRating(e.target.value)}>
        <option value={0}>All ratings</option>
        {[...Array(10)].map((_, i) => (
          <option value={i} key={i}>{i}+</option>
        ))}
      </select>
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
