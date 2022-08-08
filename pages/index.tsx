import type { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";

import Head from "next/head";
import Image from "next/image";

import { CountryService } from "./app/services/country.service";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data: response, isLoading } = useQuery(
    ["countries"],
    () => CountryService.getAll(),
    {
      onSuccess: ({ data }) => {},
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );
  console.log(response);

  return (
    <div className={styles.container}>
      <Head>
        <title>React Query</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>React Query</h1>

        {isLoading ? (
          <p>Loading....</p>
        ) : response?.data?.length ? (
          <div className={styles.grid}>
            {response?.data?.map(({ id, title, population, image }) => (
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
