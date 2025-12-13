import express from "express";
import asyncHandler from "express-async-handler";
import Review from "./reviewModel";
import authenticate from "../../authenticate";

const router = express.Router();

// POST a review
router.post(
  "/",
  authenticate,
  asyncHandler(async (req, res) => {
    const { movieId, rating, content } = req.body;

    if (!movieId || !rating || !content) {
      return res.status(400).json({ success: false, msg: "movieId, rating and content are required." });
    }

    const review = await Review.create({
      movieId: Number(movieId),
      author: req.user.username,
      rating: Number(rating),
      content,
    });

    res.status(201).json({ success: true, review });
  })
);

// GET reviews for a movie
router.get(
  "/movie/:movieId",
  asyncHandler(async (req, res) => {
    const movieId = Number(req.params.movieId);
    const reviews = await Review.find({ movieId }).sort({ createdAt: -1 });
    res.status(200).json(reviews);
  })
);

// GET reviews for logged-in user
router.get(
  "/me",
  authenticate,
  asyncHandler(async (req, res) => {
    const reviews = await Review.find({ author: req.user.username }).sort({ createdAt: -1 });
    res.status(200).json(reviews);
  })
);

export default router;
