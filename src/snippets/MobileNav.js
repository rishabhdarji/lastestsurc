import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  function handleMobileMenu() {
    if(mobileMenu == false) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }
  function openDropdownMenu(index) {
    setDropdownMenu(index)
  }
  return (
    <React.Fragment>
      {/* Mobile menu */}
      <div className="header__mobile-menu">
        {/* Open mobile menu */}
        <div className="mobile-menu__open">
          <a onClick={(e) => handleMobileMenu()}><i className="lnil lnil-menu" /></a>
        </div>
        {/* End open mobile menu */}
        {/* Mobile menu */}
        <div className={mobileMenu == true ? 'mobile-menu active': 'mobile-menu' }>
          {/* Overlay */}
          <div className="mobile-menu__overlay" onClick={(e) => handleMobileMenu()} />
          {/* End overlay */}
          {/* Content */}
          <div className="mobile-menu__content">
            {/* Close mobile menu */}
            <div className="mobile-menu__close">
              <a onClick={(e) => handleMobileMenu()}><i className="lnil lnil-close" /></a>
            </div>
            {/* End close mobile menu */}
            {/* Mobile logo */}
            <h3 className="mobile-menu__logo">DUROTAN</h3>
            {/* End mobile logo */}
            {/* Mobile Nav */}
            <ul className="mobile-menu__nav">
              <li className="mobile-menu__dropdown">
                <Link to="/home">Home</Link>
                <ul className={dropdownMenu == 1 ? 'mobile-menu__dropdown-menu active' : 'mobile-menu__dropdown-menu'}>
                  <li><Link to="/home">Home Page 1</Link></li>
                  <li><Link to="/home">Home Page 2</Link></li>
                  <li><Link to="/home">Home Page 3</Link></li>
                  <li><Link to="/home">Home Page 4</Link></li>
                  <li><Link to="/home">Home Page 5</Link></li>
                  <li><Link to="/home">Home Page 6</Link></li>
                  <li><Link to="/home">Home Page 7</Link></li>
                  <li><Link to="/home">Home Page 8</Link></li>
                  <li><Link to="/home">Home Page 9</Link></li>
                  <li><Link to="/home">Home Page 10</Link></li>
                </ul>
                <div className="mobile-menu__dropdown-btn" onClick={(e) => openDropdownMenu(1)}><span className="lnil lnil-chevron-down" /></div>
              </li>
              <li><Link to="/pages/about-us">About</Link></li>
              <li className="mobile-menu__dropdown">
                <Link to="/collections/frontpage">Shop</Link>
                <ul className={dropdownMenu == 2 ? 'mobile-menu__dropdown-menu active' : 'mobile-menu__dropdown-menu'}>
                  <li><Link to="/collections/frontpage">Shop Page </Link></li>
                  <li><Link to="/product/simple-text-for-name-product">Shop Details</Link></li>
                  <li><Link to="/cart">Cart Page</Link></li>
                </ul>
                <div className="mobile-menu__dropdown-btn" onClick={(e) => openDropdownMenu(2)}><span className="lnil lnil-chevron-down" /></div>
              </li>
              <li className="mobile-menu__dropdown">
                <Link to="/404">Pages</Link>
                <ul className={dropdownMenu == 3 ? 'mobile-menu__dropdown-menu active' : 'mobile-menu__dropdown-menu'}>
                  <li><Link to="/404">404 Page </Link></li>
                  <li><Link to="/pages/about-us">About</Link></li>
                  <li><Link to="/cart">Cart</Link></li>
                  <li><Link to="/checkout">Checkout</Link></li>
                  <li><Link to="/pages/contact-us">Contact</Link></li>
                  <li><Link to="/pages/wishlist">Wishlist</Link></li>
                </ul>
                <div className="mobile-menu__dropdown-btn" onClick={(e) => openDropdownMenu(3)}><span className="lnil lnil-chevron-down" /></div>
              </li>
              <li className="dropdown">
                <Link to="/blogs/news">News</Link>
                <ul className={dropdownMenu == 4 ? 'mobile-menu__dropdown-menu active' : 'mobile-menu__dropdown-menu'}>
                  <li><Link to="/blogs/news">Blog</Link></li>
                  <li><Link to="/blogs/news/article">Blog Single</Link></li>
                </ul>
                <div className="mobile-menu__dropdown-btn" onClick={(e) => openDropdownMenu(4)}><span className="lnil lnil-chevron-down" /></div>
              </li>
            </ul>
            {/* End Mobile nav */}
          </div>
          {/* End content */}
        </div>
        {/* End mobile menu */}
      </div>
      {/* End mobile menu */}
    </React.Fragment>
  )
}