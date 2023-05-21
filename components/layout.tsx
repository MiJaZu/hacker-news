import NavBar from "@/components/NavBar";
import Tab, { TabHeader } from "@/components/Tab/Tab";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const tabHeaders: TabHeader[] = [
    { headerName: "All", route: "/" },
    { headerName: "My Faves", route: "/MyFaves" },
  ];
  return (
    <>
      <Head>
        <title>Hacker News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar title="HACKER NEWS" />
      <Tab tabHeaders={tabHeaders}></Tab>
      <main>{children}</main>
    </>
  );
}
