import React from "react";
import "../styles/Header.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">Bloodmoon Coffee</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLingOne">Hello Guest </span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLingOne">Your </span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__itemShoppingCart">
          <ShoppingCartIcon />
          <span className="nav__itemLineTwo nav__shoppingCartCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
