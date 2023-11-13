import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useParams, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const product = PRODUCTS.find((item) => item.id === Number(id));

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  const { productName, price, productImage, description, specifications } = product;

  return (
    <div className="product-details">
      <img src={productImage} alt="" />
      <div className="description">
        <h2>{productName}</h2>
        <p>{description}</p>
        <p>Price: KES {price}</p>
        <h3>Specifications:</h3>
        <ul>
          {Object.entries(specifications).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
        <button onClick={() => { addToCart(id); navigate('/cart'); }}>Add To Cart</button>
        <button>Wish List</button>
      </div>
    </div>
  );
}
