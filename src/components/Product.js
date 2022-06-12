import React from "react";
import useFetch from "../hooks/useFetch";
import "./Product.css";
import ProductCard from "./ProductCard";

export default function Product() {
  const apiUrl = "http://localhost:1337";

  const { loading, error, data } = useFetch(
    `${apiUrl}/api/products?populate=*`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  console.log(data.data);

  return (
    <div className="Product">
      <h1 className="Product-title">Products</h1>
      <ProductCard data={data} url={apiUrl} />
    </div>
  );
}
