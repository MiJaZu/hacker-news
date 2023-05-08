import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Tabs from "@/components/Tab";
import AllHits from "./AllHits";
import MyFaves from "./MyFaves/MyFaves";
import localforage from "localforage";
import { POSTS_KEY } from "utils/localStorage";
import { type Hit } from "models/Hit";
import { getHackerNews } from "services/HackerNewsApi";
import { formatDate } from "utils/dateUtil";

export default function Home(): JSX.Element {
  const headerTabs = ["All", "My Faves"];

  const [hits, setHits] = useState<Hit[]>([]);

  const [activeTab, setActiveTab] = useState(0);

  const panelTabs = [
    <AllHits key={1} hits={hits} />,
    <MyFaves key={2} hits={hits} />,
  ];

  const getHits = async (): Promise<Hit[]> => {
    let localHits = await localforage.getItem<Hit[]>(POSTS_KEY);
    if (localHits === null) {
      localHits = [];
      const data = await getHackerNews();
      localHits = data.hits
        .filter(
          (hit) => hit.created_at !== "" && hit.title !== "" && hit.url !== ""
        )
        .map((hit) => ({
          url: hit.url,
          created_at_i: formatDate(hit.created_at),
          title: hit.title,
          liked: false,
        }));
    }
    return localHits;
  };

  useEffect(() => {
    getHits()
      .then(async (localHits) => {
        setHits(localHits);
        await localforage.setItem(POSTS_KEY, localHits);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [activeTab]);

  useEffect(() => {
    localforage.clear().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Hacker News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar title="HACKER NEWS" />
        <Tabs
          headerTabs={headerTabs}
          panelTabs={panelTabs}
          tabHandler={{ activeTab, setActiveTab }}
        ></Tabs>
      </main>
    </>
  );
}
