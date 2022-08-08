import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";

import { useCountries } from "../app/hooks/useCountries";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { countries, isLoading } = useCountries();

  return (
    <div className={styles.container}>
      <Head>
        <title>React Query</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>React Query</h1>

        {isLoading ? (
          <p>Loading....</p>
        ) : countries?.length ? (
          <div className={styles.grid}>
            {countries?.map(({ id, title, population, image }) => (
              <div key={id} className={styles.card}>
                <Image src={image} alt={title} width={294} height={288} />
                <h2>{title}</h2>
                <p>
                  <b>Population: </b>
                  {population}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>There are no countries</p>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
