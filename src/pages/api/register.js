import bcrypt from "bcryptjs";
import { connectMongoDB } from "@/libs/mongoose";
import User from "@/models/user";

export default async function handle(req) {
  console.log(req.body)
  try {
    const { name, email, password, verified, role, image } = await req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const res = await User.create({
      name,
      email,
      password: hashedPassword,
      verified,
      role,
      image, 
    });
    console.log( res.status(200).json({ message: "User registered successfully." }));
    return;
  } catch (error) {
    console.log(error)
  }
}
