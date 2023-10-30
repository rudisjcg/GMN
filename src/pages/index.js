import Comments from '@/components/Comments';
import LayoutPage from '@/components/Layout'
import PostForm from '@/components/PostForm'
import { connectMongoDB } from '@/libs/mongoose';
import Comment from '@/models/comment';
import { useSession } from 'next-auth/react';


export default function Home({comments }) {
const {data: session} = useSession();
console.log(session)

  return (
    <LayoutPage>
      <div>
        <PostForm/>
      </div>
      <div>
        <Comments comment={comments}/>
      </div>
    </LayoutPage>
  )
}


export async function getServerSideProps() {
  await connectMongoDB();
  const comments = await Comment.find({}).sort({ createdAt: -1 });
  
  return {
    props: {
      comments : JSON.parse(JSON.stringify(comments)),
    }
  }
}
