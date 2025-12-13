import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { getMyReviews } from "../api/reviews-api";
import { Link } from "react-router";

export default function MyReviewsPage() {
  const { token } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getMyReviews(token)
      .then(setReviews)
      .catch((e) => setError(e.message));
  }, [token]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>My Reviews</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((r) => (
            <li key={r._id} style={{ marginBottom: "1rem" }}>
              <strong>Movie:</strong> {r.movieId}{" "}
              <strong>Rating:</strong> {r.rating}/10
              <br />
              {r.content}
              <br />
              <Link to={`/movies/${r.movieId}`}>Open movie</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
