import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { useShopify } from "../hooks"

export default (props) => {
  const { searchStatus, closeSearch } = useShopify()
  function hideSearch() {
    closeSearch();
  }
  return (
    <React.Fragment>
      {/* Search popup */}
      <div className={searchStatus == true ? 'search-popup active': 'search-popup' }>
        {/* Search close */}
        <div className="search-popup__close">
          <a onClick={(e) => hideSearch()}><i className="lnil lnil-close" /></a>
        </div>
        {/* End search close */}
        {/* Container */}
        <div className="container container--type-2">
          {/* Search title */}
          <h5 className="search-popup__title">Search</h5>
          {/* End search title */}
          {/* Search categories */}
          <ul className="search-popup__categories">
            <li><a href="#" className="active">All</a></li>
            <li><a href="#">Clothings</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Bags</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
          {/* End search categories */}
          {/* Search form */}
          <form className="search-popup__form">
            {/* Search input */}
            <input type="text" className="search-popup__input" placeholder="Search here..." />
            {/* End search input */}
          </form>
          {/* End search form */}
          {/* Search results */}
          <div className="search-popups__results">
            {/* Results heading */}
            <h6 className="search-popup__results-heading">Search results</h6>
            {/* End results heading */}
            {/* Results */}
            <div className="search-popups__results-products d-flex">
              {/* Product */}
              <div className="result-product">
                {/* Image */}
                <div className="result-product__image">
                  <a href="product.html">
                    <img src="/products/1/2_1-a.jpg" alt="Product image" />
                  </a>
                </div>
                {/* End image */}
                {/* Product name */}
                <div className="result-product__name"><a href="product.html">Double-breasted wool Tailored coat</a></div>
                {/* End product name */}
                {/* Product price */}
                <div className="result-product__price">$56.99</div>
                {/* End product price */}
              </div>
              {/* End product */}
              {/* Product */}
              <div className="result-product">
                {/* Image */}
                <div className="result-product__image">
                  <a href="product.html">
                    <img src="/products/1/2_2-a.jpg" alt="Product image" />
                  </a>
                </div>
                {/* End image */}
                {/* Product name */}
                <div className="result-product__name"><a href="product.html">Slim fit modal cotton shirt</a></div>
                {/* End product name */}
                {/* Product price */}
                <div className="result-product__price">$59.99</div>
                {/* End product price */}
              </div>
              {/* End product */}
              {/* Product */}
              <div className="result-product">
                {/* Image */}
                <div className="result-product__image">
                  <a href="product.html">
                    <img src="/products/1/2_3-a.jpg" alt="Product image" />
                  </a>
                </div>
                {/* End image */}
                {/* Product name */}
                <div className="result-product__name"><a href="product.html">Wool/Cashmera basic cardigan</a></div>
                {/* End product name */}
                {/* Product price */}
                <div className="result-product__price">$49.5</div>
                {/* End product price */}
              </div>
              {/* End product */}
              {/* Product */}
              <div className="result-product">
                {/* Image */}
                <div className="result-product__image">
                  <a href="product.html">
                    <img src="/products/1/2_4-a.jpg" alt="Product image" />
                  </a>
                </div>
                {/* End image */}
                {/* Product name */}
                <div className="result-product__name"><a href="product.html">Regular fit striped cotton shirt</a></div>
                {/* End product name */}
                {/* Product price */}
                <div className="result-product__price">$79.99</div>
                {/* End product price */}
              </div>
              {/* End product */}
              {/* Product */}
              <div className="result-product">
                {/* Image */}
                <div className="result-product__image">
                  <a href="product.html">
                    <img src="/products/1/3_1-a.jpg" alt="Product image" />
                  </a>
                </div>
                {/* End image */}
                {/* Product name */}
                <div className="result-product__name"><a href="product.html">Slim fit modal cotton shity</a></div>
                {/* End product name */}
                {/* Product price */}
                <div className="result-product__price">
                  {/* Price new */}
                  <span className="result-product__price-new">$79.99</span>
                  {/* End price new */}
                  {/* Price old */}
                  <span className="result-product__price-old">$99.99</span>
                  {/* End price old */}
                </div>
                {/* End product price */}
              </div>
              {/* End product */}
            </div>
            {/* End results */}
            {/* Results action */}
            <div className="search-popup__results-action">
              <a href="#" className="fifth-button">All results (12)</a>
            </div>
            {/* End results actions */}
          </div>
          {/* End search results */}
        </div>  
        {/* End container */}
      </div>
      {/* End search popup */}
    </React.Fragment>
  )
}