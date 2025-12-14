import express from "express";
import asyncHandler from "express-async-handler";
import {
  getPopularPeople,
  getPerson,
  getPersonImages,
  getPersonMovieCredits,
  getPersonCredits,
} from "../tmdb-api";

const router = express.Router();

router.get(
  "/popular",
  asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const people = await getPopularPeople(page);
    res.status(200).json(people);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const person = await getPerson(req.params.id);
    res.status(200).json(person);
  })
);

router.get(
  "/:id/images",
  asyncHandler(async (req, res) => {
    const images = await getPersonImages(req.params.id);
    res.status(200).json(images);
  })
);

router.get(
  "/:id/movie_credits",
  asyncHandler(async (req, res) => {
    const credits = await getPersonMovieCredits(req.params.id);
    res.status(200).json(credits);
  })
);

router.get(
  "/:id/combined_credits",
  asyncHandler(async (req, res) => {
    const credits = await getPersonCredits(req.params.id);
    res.status(200).json(credits);
  })
);

export default router;
