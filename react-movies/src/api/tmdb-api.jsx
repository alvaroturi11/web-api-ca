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
/*export const getMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/discover`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};*/

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
/*export const getMovie = (args) => {
  //console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};*/

export const getGenres = () => {
  return fetch(`${API_BASE}/movies/genres`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};
/*export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
    import.meta.env.VITE_TMDB_KEY +
    "&language=en-US"
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};*/

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
/*export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};*/

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
/*export const getMovieReviews = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};*/

export const getUpcomingMovies = () => {
  return fetch(`${API_BASE}/movies/upcoming`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};
/*export const getUpcomingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error;
    });
};*/

export const getTrendingToday = () => {
  return fetch(`${API_BASE}/movies/trending`).then(async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }
    return response.json();
  });
};
/*export const getTrendingToday = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error;
    });
};*/

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
/*export const getTopRatedMovies = ({ queryKey }) => {
  const [, pagePart] = queryKey;
  const { page } = pagePart;

  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error;
    });
};*/

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
/*export const getMovieCredits = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  )
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};*/

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
/*export const getPerson = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  )
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};*/

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
/*export const getPersonImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};*/

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
/*export const getPersonMovieCredits = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  )
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};*/

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
/*export const getPopularPeople = ({ queryKey }) => {
  const [, pagePart] = queryKey;
  const { page } = pagePart;

  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page}`
  )
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};*/

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
/*export const getPersonCredits = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  )
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};*/
