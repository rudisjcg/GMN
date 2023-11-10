
import { connectMongoDB } from "@/libs/mongoose";
import Comment from "@/models/Comment";

export default async function handler(req, res) {
  await connectMongoDB();
  console.log(req.body)

  try {
      const commentDoc = await Comment.create({
        comment: req.body.comment,
        images: req.body.images,
        likes: req.body.likes,
        subComments: req.body.subComments,
        email: req.body.email
      });

      res.json(commentDoc);
    return res.status(201).json({ message: "comment saved!" });
  } catch (error) {
    return res.status(500).json({
        message: "An Error occur while trying to post a comment",
        error,
      });
  }
}
