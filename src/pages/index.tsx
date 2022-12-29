import Head from "next/head";
import Link from "next/link";
import Panel from "../components/panel";
import { SITE_NAME } from "../config/app-config";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="This is a blog made to practice Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Panel />
        <Link href={"/posts/page/1"}>Posts</Link>
      </main>
    </>
  );
}
