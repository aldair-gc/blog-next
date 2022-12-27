import Post from "../../components/post";
import { getAllPosts } from "../../data/posts/get-all-posts";
import { getPost } from "../../data/posts/get-post";
import { PostData } from "../../domain/posts/posts";

type PostProps = {
  id: string;
  post: PostData;
};

export default function DynamicPost({ post }: PostProps) {
  return <Post postData={post} />;
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  return {
    props: { post },
  };
}
