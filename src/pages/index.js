import LayoutPage from '@/components/Layout'
import PostForm from '@/components/PostForm'
import { mongooseConnect } from '@/libs/mongoose';
import Comment from '@/models/comment';
import User from '@/models/user';
import { useSession } from 'next-auth/react';


export default function Home({comments }) {
 

  return (
    <LayoutPage>
      <div>
        <PostForm/>
      </div>
    </LayoutPage>
  )
}


export async function getServerSideProps() {
  await mongooseConnect();
  const comments = await Comment.find({}).sort({ createdAt: -1 });
  
  return {
    props: {
      comments : JSON.parse(JSON.stringify(comments)),
    }
  }
}
