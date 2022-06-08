import React from "react";
import useFetch from "../hooks/useFetch";
import "./Product.css";

export default function Product() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products?populate=*"
  );

  const apiUrl = "http://localhost:1337";

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  console.log(data.data);

  return (
    <div className="Product">
      <h1 className="Product-title">Products</h1>
      <div className="Product-list">
        {data.data.map((product) => (
          <div key={product.id} className="Product-card">
            <h6>{product.attributes.title}</h6>
            <img
              src={
                `${apiUrl}${product.attributes.image.data.attributes.formats.small.url}`
              }
              alt=""
            />
            <p>Harga: {(product.attributes.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
            <div>
              <button>BELI</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
