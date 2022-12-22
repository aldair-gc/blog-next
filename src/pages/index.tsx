import { GetStaticProps } from "next";
import Head from "next/head";
import { getPosts } from "../data/posts/get-all-posts";
import { PostData } from "../domain/posts/posts";
import styles from "../styles/Home.module.css";

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          {posts.map((post) => (
            <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
    // revalidate: 5,
  };
};