import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    movieId: { type: Number, required: true, index: true },
    author: { type: String, required: true }, // username
    rating: { type: Number, required: true, min: 1, max: 10 },
    content: { type: String, required: true, maxlength: 1000 },
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);
