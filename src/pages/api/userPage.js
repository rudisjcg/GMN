import mongooseConnect from "@/libs/mongoose";
import User from "@/models/user";

export default async function handler(req, res) {
    await mongooseConnect();

    const {userEmail} = req.body;

    const userData = User.findOne({email: userEmail});

    return res.json({userData});
}

export const config = {
    api: { bodyParser: false },
  };