import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Toolbar } from "../components/toolbar";

export default function Home({ data }) {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Next.js News app</h1>
        <h3>One stop shop for the latest news</h3>
      </div>
    </div>
  );
}
