import { GetServerSideProps } from "next";
import PostCard from "../../components/postCard";
import { getAllPosts } from "../../data/posts/get-all-posts";
import { PostData } from "../../domain/posts/posts";
import styles from "../../styles/Home.module.css";

type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Category: {category}</h2>
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
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const category = ctx.query.category;
  const urlQuery = `&sort=id:desc&pagination[page]=1&pagination[pageSize]=30&filters[category][name][$eqi]=${category}`;
  const posts = await getAllPosts(urlQuery);
  return {
    props: { posts, category },
  };
};
