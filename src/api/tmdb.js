import axios from 'axios';

const API_KEY = '1d4570a3a65561b1d54220b90b1ef9b8'; // api key

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export default tmdb;
