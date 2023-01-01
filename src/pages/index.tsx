import Head from "next/head";
import Panel from "../components/Panel";
import { SITE_NAME } from "../config/app-config";
import styles from "../styles/Home.module.css";
import SquaresPanel from "../components/SquaresPanel";
import Ribbon from "../components/Ribbon";

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
        <SquaresPanel />
        <Ribbon name={"ribbon"} contents={[1, 2, 3, 4, 5, 6, 7, 8]} width={"400px"} height={"300px"} />
      </main>
    </>
  );
}
