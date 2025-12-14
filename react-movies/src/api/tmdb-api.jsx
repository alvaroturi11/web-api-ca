const API_BASE = "http://localhost:8080/api";

export const getMovies = () => {
  return fetch(`${API_BASE}/movies/discover`)
    .then(async (response) => {
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.status_message || "Something went wrong");
      }
      return response.json();
    });
};

export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  return fetch(`${API_BASE}/movies/${id}`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};

export const getGenres = () => {
  return fetch(`${API_BASE}/movies/genres`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(`${API_BASE}/movies/${id}/images`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};

export const getMovieReviews = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(`${API_BASE}/movies/${id}/reviews`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};

export const getUpcomingMovies = () => {
  return fetch(`${API_BASE}/movies/upcoming`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};

export const getTrendingToday = () => {
  return fetch(`${API_BASE}/movies/trending`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};

export const getTopRatedMovies = ({ queryKey }) => {
  const [, pagePart] = queryKey;
  const { page } = pagePart;

  return fetch(`${API_BASE}/movies/toprated?page=${page}`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};

export const getMovieCredits = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(`${API_BASE}/movies/${id}/credits`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};

export const getPerson = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(`${API_BASE}/people/${id}`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};

export const getPersonImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(`${API_BASE}/people/${id}/images`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};

export const getPersonMovieCredits = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(`${API_BASE}/people/${id}/movie_credits`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};

export const getPopularPeople = ({ queryKey }) => {
  const [, pagePart] = queryKey;
  const { page } = pagePart;

  return fetch(`${API_BASE}/people/popular?page=${page}`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};

export const getPersonCredits = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(`${API_BASE}/people/${id}/combined_credits`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};
