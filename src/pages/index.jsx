import React from 'react';
import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Homepage() {
  return (
    <>
      <Head>
        <meta title="HHF Digital Support Services Books" />
        <meta property="og:title" content="HHF Digital Support Services Books" />
        <meta
          property="og:description"
          content="An awesome textbook alternative, that you can contribute to! 🚀"
        />
        <meta
          property="description"
          content="An awesome textbook alternative, that you can contribute to! 🚀"
        />
        <link rel="canonical" href="https://books." />
      </Head>
      <Redirect to="/docs/home/introduction" />
    </>
  );
}
