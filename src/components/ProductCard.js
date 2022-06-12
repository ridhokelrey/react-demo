import React from "react";
import "./Product.css";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ data, url }) {
  
  return (
    <div className="Product-list">
      {data.data.map((product) => (
        <div key={product.id} className="Product-card">
          <h6>{product.attributes.title}</h6>
          <img
            src={`${url}${product.attributes.image.data.attributes.formats.small.url}`}
            alt=""
          />
          <p>
            Harga:{" "}
            {product.attributes.price
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </p>
          <div>
            <button>
              <FaShoppingCart /> Beli
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
