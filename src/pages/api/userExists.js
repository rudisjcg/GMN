
import { connectMongoDB} from "@/libs/mongoose";
import User from "@/models/user";

export default async function POST(req) {
  
    const {  email } = await req.json();
    await connectMongoDB();
    const userFind = await User.find({ email: email });
    
    if (userFind.length > 0) {
      return res.status(200).json({ userExists: true }, { email: userFind});
    } else {
      return res.status(500).json({ userExists: false });
    }
  
   
}
