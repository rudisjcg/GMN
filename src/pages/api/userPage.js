
import { connectMongoDB } from "@/libs/mongoose";
import User from "@/models/user";

export default async function handler(req, res) {
    await connectMongoDB();
    const {userEmail} = req.body;
    console.log(userEmail)
    const userData = User.findOne({email: userEmail});
    return res.json({ userData });
}

