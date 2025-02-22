import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <link rel="icon" href="/Logo.png" />
        <title>Link HMSE</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Analytics/>
    </>
  );
}
