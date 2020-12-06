import React, { useEffect } from "react";

import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { useFetchShopData } from "../libs/customHooks/useFetchShopData";

export default function Home() {
  const { products } = useFetchShopData();

  return (
    <>
      <Head>
        <title>Morgan shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Hello World</h1>
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </Layout>
    </>
  );
}
