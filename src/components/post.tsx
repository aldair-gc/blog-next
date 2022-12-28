import Link from "next/link";
import { API_URL } from "../config/app-config";
import { PostData } from "../domain/posts/posts";
import styles from "../styles/Post.module.css";
import { formatDate } from "../utils/format-date";
import Disqus from "./disqus";

export default function Post({ postData }: { postData: PostData }) {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>{postData.attributes.title}</h2>
        <hr />
      </div>

      <img
        className={styles.image}
        src={API_URL + postData.attributes.cover.data.attributes.formats.medium.url}
        alt={postData.attributes.cover.data.attributes.alternativeText}
        width={postData.attributes.cover.data.attributes.formats.medium.width}
        height={postData.attributes.cover.data.attributes.formats.medium.height}
      />

      <div className={styles.details}>
        <h6>
          Published in {formatDate(postData.attributes.publishedAt)} by{" "}
          {postData.attributes.author.data.attributes.name}
        </h6>

        <h6>
          <Link href={`/categories/${postData.attributes.category.data.attributes.name}`}>
            Category: {postData.attributes.category.data.attributes.name}
          </Link>
        </h6>
      </div>

      <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.attributes.content }} />

      <Disqus id={postData.id} title={postData.attributes.title} />
    </div>
  );
}
