import React from "react";
import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>homestory-pictures</title>
      <meta
        name="description"
        content="Photovoltaik Angebot - individuelle Solar-Beratung."
      />

      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
}
