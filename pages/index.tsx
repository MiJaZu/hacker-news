import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Tabs from "@/components/Tab";
import AllHits from "./AllHits";
import MyFaves from "./MyFaves/MyFaves";
import localforage from "localforage";
import { POSTS_KEY } from "utils/localStorage";
import { Hit } from "models/Hit";
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

  const getHits = async () => {
    let localHits = await localforage.getItem<Hit[]>(POSTS_KEY);
    if (localHits === null) {
      localHits = [];
      let data = await getHackerNews();
      localHits = data.hits
        .filter((hit) => hit.created_at_i && hit.title && hit.url)
        .map((hit) => ({
          url: hit.url,
          created_at_i: formatDate(hit.created_at_i),
          title: hit.title,
          liked: false,
        }));
    }
    return localHits;
  };

  // useEffect((): void => {
  // getHackerNews().then((data): void => {
  //   let hitsFormattedDate = data.hits
  //     .filter((hit) => hit.created_at_i && hit.title && hit.url)
  //     .map((hit) => ({
  //       url: hit.url,
  //       created_at_i: formatDate(hit.created_at_i),
  //       title: hit.title,
  //     }));
  //   setHits(hitsFormattedDate);
  // });
  //   getHits().then((data) => {
  //     setHits(data);
  //     localforage.setItem(POSTS_KEY, data);
  //     console.log(hits);
  //   });
  // }, []);

  useEffect(() => {
    getHits().then((localHits) => {
      setHits(localHits);
      localforage.setItem(POSTS_KEY, localHits);
    });
  }, [activeTab]);

  useEffect(() => {
    localforage.clear();
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
