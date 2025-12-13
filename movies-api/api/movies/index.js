/*import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 

const router = express.Router();

// movie routes to be added
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));


export default router;*/
import express from "express";
import asyncHandler from "express-async-handler";
import {
  getMovies,
  getMovie,
  getGenres,
  getUpcomingMovies,
  getTrendingToday,
  getTopRatedMovies,
  getMovieImages,
  getMovieReviews,
  getMovieCredits,
} from "../tmdb-api";

const router = express.Router();

// LISTS / FIXED PATHS FIRST
router.get(
  "/discover",
  asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
  })
);

router.get(
  "/genres",
  asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
  })
);

router.get(
  "/upcoming",
  asyncHandler(async (req, res) => {
    const upcoming = await getUpcomingMovies();
    res.status(200).json(upcoming);
  })
);

router.get(
  "/trending",
  asyncHandler(async (req, res) => {
    const trending = await getTrendingToday();
    res.status(200).json(trending);
  })
);

router.get(
  "/toprated",
  asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const topRated = await getTopRatedMovies(page);
    res.status(200).json(topRated);
  })
);

// ID-BASED ROUTES AFTER
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const movie = await getMovie(req.params.id);
    res.status(200).json(movie);
  })
);

router.get(
  "/:id/images",
  asyncHandler(async (req, res) => {
    const images = await getMovieImages(req.params.id);
    res.status(200).json(images);
  })
);

router.get(
  "/:id/reviews",
  asyncHandler(async (req, res) => {
    const reviews = await getMovieReviews(req.params.id);
    res.status(200).json(reviews);
  })
);

router.get(
  "/:id/credits",
  asyncHandler(async (req, res) => {
    const credits = await getMovieCredits(req.params.id);
    res.status(200).json(credits);
  })
);

export default router;
