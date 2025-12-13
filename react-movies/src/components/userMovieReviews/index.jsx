import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import { useAuth } from "../../contexts/authContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getReviewsForMovie, postReview } from "../../api/reviews-api";
import Spinner from "../spinner";

export default function UserMovieReviews({ movieId }) {
  const { isAuthenticated, token, username } = useAuth();
  const queryClient = useQueryClient();

  const { data, error, isPending, isError } = useQuery({
    queryKey: ["userReviews", { movieId }],
    queryFn: () => getReviewsForMovie(movieId),
  });

  const [rating, setRating] = useState(8);
  const [content, setContent] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");
  const [submitErr, setSubmitErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMsg("");
    setSubmitErr("");

    if (!content.trim()) {
      setSubmitErr("Review content is required.");
      return;
    }

    try {
      await postReview(token, {
        movieId: Number(movieId),
        rating: Number(rating),
        content: content.trim(),
      });

      setContent("");
      setRating(8);
      setSubmitMsg("Review posted!");
      await queryClient.invalidateQueries({ queryKey: ["userReviews", { movieId }] });
    } catch (err) {
      setSubmitErr(err.message);
    }
  };

  if (isPending) return <Spinner />;
  if (isError) return <Typography color="error">{error.message}</Typography>;

  const reviews = data || [];

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">User Reviews (Mongo)</Typography>
      <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
        Stored in your database, not TMDB.
      </Typography>

      <Divider sx={{ my: 2 }} />

      {reviews.length === 0 ? (
        <Typography>No user reviews yet.</Typography>
      ) : (
        reviews.map((r) => (
          <Paper key={r._id} sx={{ p: 1.5, mb: 1.5 }}>
            <Typography variant="subtitle2">
              {r.author} — {r.rating}/10
            </Typography>
            <Typography variant="body2">{r.content}</Typography>
          </Paper>
        ))
      )}

      <Divider sx={{ my: 2 }} />

      {isAuthenticated ? (
        <>
          <Typography variant="subtitle1">Write a review</Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
            Posting as {username}
          </Typography>

          {submitErr && <Typography color="error">{submitErr}</Typography>}
          {submitMsg && <Typography color="success.main">{submitMsg}</Typography>}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Rating (1-10)"
              type="number"
              inputProps={{ min: 1, max: 10 }}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              sx={{ mr: 2, mt: 1, width: 160 }}
            />

            <TextField
              label="Your review"
              multiline
              minRows={3}
              fullWidth
              value={content}
              onChange={(e) => setContent(e.target.value)}
              sx={{ mt: 1 }}
            />

            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Post review
            </Button>
          </form>
        </>
      ) : (
        <Typography sx={{ mt: 1 }}>Log in to write a review.</Typography>
      )}
    </Paper>
  );
}
