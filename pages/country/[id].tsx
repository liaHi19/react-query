import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { useCountry } from "../../app/hooks/useCountry";

import styles from "../../styles/Home.module.css";

const Country = () => {
  const { query, push } = useRouter();
  const { country, isLoading } = useCountry(String(query?.id));

  return (
    <div className={styles.container}>
      <Head>
        <title>Country</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}></h1>

        {isLoading ? (
          <p>Loading....</p>
        ) : (
          <>
            <button
              className={styles.btn}
              onClick={() => {
                push("/");
              }}
            >
              Go Back
            </button>
            <div className={styles.card}>
              <Image
                src={country?.image || ""}
                alt={country?.title}
                width={600}
                height={500}
              />
              <h2>{country?.title}</h2>
              <p>
                <b>Population: </b>
                {country?.population}
              </p>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Country;
