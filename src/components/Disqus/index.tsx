import { DiscussionEmbed } from "disqus-react";
import { SITE_URL } from "../../config/app-config";
import styles from "./Disqus.module.css";

type CommentsProps = {
  id: number;
  title: string;
};

export default function Disqus({ id, title }: CommentsProps) {
  return (
    <div className={styles.disqus}>
      <DiscussionEmbed
        shortname="my-next-strapi-blog"
        config={{
          url: `${SITE_URL}/posts/${id}`,
          identifier: id.toString(),
          title,
          language: "en-US",
        }}
      />
    </div>
  );
}
