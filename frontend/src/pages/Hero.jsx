import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const { data } = await axios(
        "https://json-server-vercel-main-helles-projects.vercel.app/api/products"
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <section className="grid py-10 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ml-10 mr-10 mt-4">
        {products?.map((item, id) => (
          <ProductCard item={item} key={id} />
        ))}
      </section>
    </Layout>
  );
};

export default Hero;
