import React from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Tabs from "@/components/Tab";

export default function Home(): JSX.Element {
  const headerTabs = ["All", "My Faves"];
  const panelTabs = [
    <div key={1}>My First tab</div>,
    <div key={2}>My Second Tab</div>,
  ];

  return (
    <div>
      <Head>
        <title>Hacker News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar title="HACKER NEWS" />
        <Tabs headerTabs={headerTabs} panelTabs={panelTabs}></Tabs>
      </main>
    </div>
  );
}
