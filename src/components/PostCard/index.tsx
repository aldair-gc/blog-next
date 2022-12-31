import Link from "next/link";
import { API_URL } from "../../config/app-config";
import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  cover: string;
  id: number;
};

export default function PostCard({ title, cover, id }: PostCardProps) {
  return (
    <Link className={styles.post} href="/posts/[id]" as={`/posts/${id}`}>
      <img src={`${API_URL}${cover}`} alt="" />
      <h2>{title}</h2>
    </Link>
  );
}
