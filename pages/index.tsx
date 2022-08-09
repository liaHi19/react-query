import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useCountries } from "../app/hooks/useCountries";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { countries, isLoading, refetch } = useCountries();

  return (
    <div className={styles.container}>
      <Head>
        <title>Countries</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Countries</h1>

        {isLoading ? (
          <p>Loading....</p>
        ) : countries?.length ? (
          <div className={styles.grid}>
            {countries?.map(({ id, title, population, image }) => (
              <Link href={`/country/${id}`} key={id}>
                <a className={styles.card}>
                  <Image src={image} alt={title} width={294} height={288} />
                  <h2>{title}</h2>
                  <p>
                    <b>Population: </b>
                    {population}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        ) : (
          <p>There are no countries</p>
        )}
        {!countries?.length && (
          <button
            className={styles.btn}
            onClick={() => {
              refetch();
            }}
          >
            Fecth countries
          </button>
        )}
      </main>
    </div>
  );
};

export default Home;
