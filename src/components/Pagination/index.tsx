import Link from "next/link";
import { SITE_URL } from "../../config/app-config";
import { PostsMeta } from "../../domain/posts/meta";
import styles from "./Pagination.module.css";

type PaginationProps = {
  pagination: PostsMeta["pagination"];
  category: string;
  page: number;
};

export default function Pagination({ pagination, page, category }: PaginationProps) {
  const hasPrevious = page - 1 > 0;
  const hasNext = page < pagination.pageCount;
  return (
    <div className={styles.pagination}>
      <Link
        as={`${SITE_URL}/posts/page/1/${category}`}
        href="/posts/page/[...params]"
        className={hasPrevious ? "" : styles.disabled}
      >
        First
      </Link>
      <Link
        as={`${SITE_URL}/posts/page/${page - 1}/${category}`}
        href="/posts/page/[...params]"
        className={hasPrevious ? "" : styles.disabled}
      >
        Previous
      </Link>
      {new Array(pagination.pageCount).fill(0).map((num, index) => (
        <Link
          key={index}
          as={`${SITE_URL}/posts/page/${index + 1}/${category}`}
          href="/posts/page/[...params]"
          className={index + 1 === page ? styles.selected : ""}
        >
          {index + 1}
        </Link>
      ))}
      <Link
        as={`${SITE_URL}/posts/page/${page + 1}/${category}`}
        href="/posts/page/[...params]"
        className={hasNext ? "" : styles.disabled}
      >
        Next
      </Link>
      <Link
        as={`${SITE_URL}/posts/page/${pagination.pageCount}/${category}`}
        href="/posts/page/[...params]"
        className={hasNext ? "" : styles.disabled}
      >
        Last
      </Link>
    </div>
  );
}
