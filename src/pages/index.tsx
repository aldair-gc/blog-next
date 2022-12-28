import { GetStaticProps } from "next";
import Head from "next/head";
import PostCard from "../components/postCard";
import { SITE_NAME } from "../config/app-config";
import { getAllPosts } from "../data/posts/get-all-posts";
import { PostData } from "../domain/posts/posts";
import styles from "../styles/Home.module.css";

type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="This is a blog made to practice Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <PostCard
              key={post.attributes.slug}
              id={post.id}
              title={post.attributes.title}
              cover={post.attributes.cover.data.attributes.formats.small.url}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts("&sort=id:desc&pagination[page]=1&pagination[pageSize]=30");
  return {
    props: { posts },
    revalidate: 600,
  };
};
