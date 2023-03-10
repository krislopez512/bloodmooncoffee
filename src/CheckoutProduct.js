import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const isInBasket = basket.find((item) => item.id === id);

  if (isInBasket) {
    console.log("Product is in the basket");
  } else {
    console.log("Product is not in the basket");
  }

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        // src="https://m.media-amazon.com/images/I/71dNxg8RPQL._AC_UL320_.jpg"
        src={image}
        alt=""
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>
          <strong>Remove from Cart</strong>
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
