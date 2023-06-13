import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { posts } from '../profile';

const Post = () => {
  const router = useRouter();

  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];

  return (
    <Layout title={router.query.title} footer={false}>
      {currentPost ? (
        <div className='text-center'>
          <img
            src={currentPost.imageURL}
            alt=''
            style={{ width: '50%' }}
            className='img-fluid'
          />
          <p className='p-4'>{currentPost.content}</p>
        </div>
      ) : (
        <p>Post not found.</p>
      )}
    </Layout>
  );
};

export default Post;
