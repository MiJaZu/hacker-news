import React from "react";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import HitsProvider from "context/HitsProvider";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <HitsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HitsProvider>
  );
}
