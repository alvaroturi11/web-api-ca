import fetch from "node-fetch";

const TMDB_BASE = "https://api.themoviedb.org/3";

const fetchFromTMDB = async (path) => {
  const response = await fetch(`${TMDB_BASE}${path}`);
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.status_message || "TMDB request failed");
  }
  return response.json();
};

export const getMovies = async () => {
  return fetchFromTMDB(
    `/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
};

export const getMovie = async (id) => {
  return fetchFromTMDB(
    `/movie/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
  );
};

export const getGenres = async () => {
  return fetchFromTMDB(
    `/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
  );
};

export const getUpcomingMovies = async () => {
  return fetchFromTMDB(
    `/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
  );
};

export const getTrendingToday = async () => {
  return fetchFromTMDB(
    `/trending/movie/day?api_key=${process.env.TMDB_KEY}`
  );
};

export const getTopRatedMovies = async (page = 1) => {
  return fetchFromTMDB(
    `/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
  );
};

export const getMovieImages = async (id) => {
  return fetchFromTMDB(
    `/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
  );
};

export const getMovieReviews = async (id) => {
  return fetchFromTMDB(
    `/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
  );
};

export const getMovieCredits = async (id) => {
  return fetchFromTMDB(
    `/movie/${id}/credits?api_key=${process.env.TMDB_KEY}&language=en-US`
  );
};
