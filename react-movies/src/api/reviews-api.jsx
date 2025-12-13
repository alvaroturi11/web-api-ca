const API_BASE = "http://localhost:8080/api";

export const getReviewsForMovie = (movieId) => {
  return fetch(`${API_BASE}/reviews/movie/${movieId}`)
    .then(async (res) => {
      if (!res.ok) throw new Error("Failed to load reviews");
      return res.json();
    });
};

export const getMyReviews = (token) => {
  return fetch(`${API_BASE}/reviews/me`, {
    headers: { Authorization: token },
  }).then(async (res) => {
    if (!res.ok) throw new Error("Failed to load my reviews");
    return res.json();
  });
};

export const postReview = (token, review) => {
  return fetch(`${API_BASE}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(review),
  }).then(async (res) => {
    const data = await res.json();
    if (!res.ok || !data?.success) throw new Error(data?.msg || "Failed to post review");
    return data;
  });
};
