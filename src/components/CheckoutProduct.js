import React from "react";
import "../styles/CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img
        src="https://m.media-amazon.com/images/I/71dNxg8RPQL._AC_UL320_.jpg"
        alt=""
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          Go For The Bold Dark Roast Whole Bean Coffee, 32oz
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>12.96</strong>
        </p>
        <div className="checkoutProduct__rating">⭐⭐⭐⭐⭐</div>
        <button>
          <strong>Remove from Cart</strong>
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
