import React from "react";
import "../styles/Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Colombia Medium Roast Whole Bean Coffee</p>
        <p className="product__price">
          <small>$</small>
          <strong>30</strong>
        </p>
        <div className="product__rating">⭐⭐⭐⭐⭐</div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/7121M8H6isL._AC_UL320_.jpg"
        alt=""
      />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
