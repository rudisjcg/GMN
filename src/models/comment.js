import mongoose, { Schema, models } from "mongoose";

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: false,
    },
    images: {
      type:  [String],
      required: false
    },
    likes: {
      type: Array,
      required: false,
    },
    subComment: {
      type: Array,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    userPicture: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Comment =
  models?.commentSchema || mongoose.model("commentSchema", commentSchema);
export default Comment;
