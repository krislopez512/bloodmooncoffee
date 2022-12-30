import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://steamuserimages-a.akamaihd.net/ugc/1875200776434896538/8CF704C0A2716DAE82A4A99609945271FFE371D9/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="1232123"
            title="Colombia Medium Roast Whole Bean Coffee, 32oz"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/7121M8H6isL._AC_UL320_.jpg"
          />
          <Product
            id="1232124"
            title="Colombia Decaf Medium Roast Ground Coffee, 32oz"
            price={13.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71AkGIlaV7L._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1232125"
            title="Colombia Medium Roast Ground Coffee, 12oz"
            price={6.96}
            rating={3}
            image="https://m.media-amazon.com/images/I/71eXshva6vL._AC_UL320_.jpg"
          />
          <Product
            id="1232126"
            title="Go For THe Bold Dark Roast Ground Coffee, 32oz"
            price={14.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71D3tj4sINL._AC_UL320_.jpg"
          />
          <Product
            id="1232127"
            title="Go For THe Bold Dark Roast Whole Bean Coffee, 32oz"
            price={12.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71dNxg8RPQL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1232128"
            title="Colombia Medium Roast Coffee, Keurig K-Cup, 160 Ct"
            price={53.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/51KelYi3rZL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
