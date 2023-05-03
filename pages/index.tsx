import Head from "next/head";
import styles from "@/pages/index.module.css";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hacker News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar title="HACKER NEWS" />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
