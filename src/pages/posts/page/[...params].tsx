import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Pagination from "../../../components/pagination";
import PostCard from "../../../components/postCard";
import { SITE_NAME } from "../../../config/app-config";
import { getAllPosts } from "../../../data/posts/get-all-posts";
import { PostsMeta } from "../../../domain/posts/meta";
import { PostData } from "../../../domain/posts/posts";
import styles from "../../../styles/Home.module.css";

type PageProps = {
  posts: PostData[];
  meta: PostsMeta;
  category: string;
  page: number;
};

export default function Page({ posts, meta, category, page }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;
  if (!posts.length) return <div>Page not found</div>;

  return (
    <>
      <Head>
        <title>{`${SITE_NAME} ${category && ` - ${category}`} ${page && ` - page ${page}`}`}</title>
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
        <Pagination page={page} pagination={meta.pagination} category={category} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const page = Number(context.params?.params?.[0] || 1);
  const postsPerPage = 6;
  const category = context.params?.params?.[1] || "";
  const categoryQuery = category ? `&filters[category][name][$eqi]=${category}` : "";
  const url = `&sort=id:desc&pagination[page]=${page}&pagination[pageSize]=${postsPerPage}${categoryQuery}`;
  const posts = await getAllPosts(url);
  return {
    props: {
      posts: posts.data,
      meta: posts.meta,
      category,
      page,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
