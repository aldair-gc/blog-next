import { useRouter } from "next/router";
import Error from "next/error";
import Post from "../../components/post";
import { getAllPosts } from "../../data/posts/get-all-posts";
import { getPost } from "../../data/posts/get-post";
import { PostData } from "../../domain/posts/posts";
import Head from "next/head";
import { SITE_NAME } from "../../config/app-config";

type PostProps = {
  id: number;
  post: PostData;
};

export default function DynamicPost({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{`${SITE_NAME} - post ${post.id}`}</title>
      </Head>
      <Post postData={post} />
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.data.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { id: number } }) {
  const post = await getPost(params.id);
  return {
    props: { post },
    revalidate: 600,
  };
}
