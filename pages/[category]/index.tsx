import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useFetchShopData } from "../../libs/customHooks/useFetchShopData.js";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { selectCategoryByAlias } from "../../redux/selectors/products";

interface Props {}

const CategoryPage = (props: Props) => {
  const { products, categories } = useFetchShopData();
  const router = useRouter();
  const { category } = router.query;
  const fullCategory = useSelector(selectCategoryByAlias(category));

  return (
    <>
      <Head>
        <title>{category}</title>
      </Head>
      <Layout>Category page: {fullCategory?.title}</Layout>
      {products
        .filter((product) => product.categoryId === fullCategory.id)
        .map(({ id, name, image }) => (
          <div key={id}>
            <img src={image} alt={name} width={400} height={400} />
            <h3>{name}</h3>
          </div>
        ))}
    </>
  );
};

export default CategoryPage;
