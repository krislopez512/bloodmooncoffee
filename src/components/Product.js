import React from "react";
import "../styles/Product.css";


// Bringing props over from Home.js via id, title, image, price, rating
function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
           {/* Below is array.fill.map method  */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
