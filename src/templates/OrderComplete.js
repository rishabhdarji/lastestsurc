import React, { useEffect, useState } from "react"
import Header from "../sections/Header"
import Footer from "../sections/Footer"
import { useShopify } from "../hooks"
import ProductCard from "../snippets/ProductCard";
import { Link } from 'react-router-dom';

export default (props) => {
  const { closeCart, closeSearch, closeCanvasMenu } = useShopify()
  useEffect(() => {
    window.scrollTo(0, 0);
    closeCart();
    closeSearch();
    closeCanvasMenu();
  }, [])
  return (
    <div>
      <Header />
      {/* Order complete */}
      <div className="order-complete">
        {/* Container */}
        <div className="container container--type-3">
          {/* Container */}
          <div className="container">
            {/* Order complete container */}
            <div className="order-complete__container">
              {/* Heading */}
              <div className="order-complete__heading">
                {/* H1 */}
                <h1 className="order-complete__h1">Thanks for your order!</h1>
                {/* End h1 */}
                {/* Order number */}
                <div className="order-complete__order-number">
                  order number
                  <p>#a23578</p>
                </div>
                {/* End order number */}
              </div>
              {/* End heading */}
              {/* Description */}
              <div className="order-complete__description">
                We getting your order ready to be shipped. We will notify you when it has been sent
              </div>
              {/* End description */}
              {/* Order summary */}
              <h3 className="order-complete__order-summary">Order Summary</h3>
              {/* End order summary */}
              {/* Products */}
              <div className="order-complete__products">
                {/* Product */}
                <div className="order-complete__product">
                  <div className="order-complete-product__image">
                    <a href="product.html">
                      <img alt="Image" data-sizes="auto" data-srcset="/products/1/10a.jpg 400w,
                      /products/1/10a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </a>
                  </div>
                  <div className="order-complete-product__title-and-variant">
                    <h3 className="order-complete-product__title"><a href="product.html">2 x Slim fit modal cotton shirt</a></h3>
                    <div className="order-complete-product__variant">Grey, M</div>
                  </div>
                  <div className="order-complete-product__price">$113.98</div>
                </div>
                {/* End product */}
                {/* Product */}
                <div className="order-complete__product">
                  <div className="order-complete-product__image">
                    <a href="product.html">
                      <img alt="Image" data-sizes="auto" data-srcset="/products/1/11a.jpg 400w,
                      /products/1/11a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </a>
                  </div>
                  <div className="order-complete-product__title-and-variant">
                    <h3 className="order-complete-product__title"><a href="product.html">1 x Suede sport shoes</a></h3>
                    <div className="order-complete-product__variant">Bold Brown, 40</div>
                  </div>
                  <div className="order-complete-product__price">$45.5</div>
                </div>
                {/* End product */}
                {/* Product */}
                <div className="order-complete__product">
                  <div className="order-complete-product__image">
                    <a href="product.html">
                      <img alt="Image" data-sizes="auto" data-srcset="/products/1/12a.jpg 400w,
                      /products/1/12a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </a>
                  </div>
                  <div className="order-complete-product__title-and-variant">
                    <h3 className="order-complete-product__title"><a href="product.html">1 x Pebbled crossbody belt bag</a></h3>
                  </div>
                  <div className="order-complete-product__price">$72.99</div>
                </div>
                {/* End product */}
              </div>  
              {/* End products */}
              {/* Subtotal and shipping */}
              <div className="order-complete__subtotal-and-shipping">
                {/* Subtotal */}
                <div className="order-complete__subtotal">
                  <div className="order-complete-subtotal__title">Subtotal</div>
                  <div className="order-complete-subtotal__price">$252.47</div>
                </div>  
                {/* End subtotal */}
                {/* Shipping */}
                <div className="order-complete__shipping">
                  <div className="order-complete-shipping__title">Standard Shipping</div>
                  <div className="order-complete-shipping__price">$20.0</div>
                </div>  
                {/* End shipping */}
              </div>    
              {/* End subtotal and shipping */}
              {/* Total */}
              <div className="order-complete__total">
                <div className="order-complete-total__title">Total</div>
                <div className="order-complete-total__price">$272.47</div>
              </div>
              {/* End total */}
              {/* Customer information */}
              <div className="order-complete__customer-information">
                {/* Heading */}
                <h4 className="customer-information__heading">Customer Information</h4>
                {/* End heading */}
                {/* Row */}
                <div className="row">
                  <div className="col-12 col-md-6">
                    {/* Section */}
                    <div className="customer-information__section">
                      {/* Heading */}
                      <h4 className="order-information__section-heading">Shipping address</h4>
                      {/* End heading */}
                      {/* Content */}
                      <div className="order-information__section-content">
                        Artur Sulkowski<br />
                        Krakowskie Przedmiescie 15/17<br />
                        00-071 Warsaw, Poland
                      </div>
                      {/* End content */}
                    </div>
                    {/* End section */}
                  </div>
                  <div className="col-12 col-md-6">
                    {/* Section */}
                    <div className="customer-information__section">
                      {/* Heading */}
                      <h4 className="order-information__section-heading">Billing address</h4>
                      {/* End heading */}
                      {/* Content */}
                      <div className="order-information__section-content">
                        Artur Sulkowski<br />
                        Krakowskie Przedmiescie 15/17<br />
                        00-071 Warsaw, Poland
                      </div>
                      {/* End content */}
                    </div>
                    {/* End section */}
                  </div>
                  <div className="col-12 col-md-6">
                    {/* Section */}
                    <div className="customer-information__section">
                      {/* Heading */}
                      <h4 className="order-information__section-heading">Customer details</h4>
                      {/* End heading */}
                      {/* Content */}
                      <div className="order-information__section-content">
                        arturhandsome@gmail.com<br />
                        +065 123 456 789
                      </div>
                      {/* End content */}
                    </div>
                    {/* End section */}
                  </div>
                  <div className="col-12 col-md-6">
                    {/* Section */}
                    <div className="customer-information__section">
                      {/* Heading */}
                      <h4 className="order-information__section-heading">Delivery detail</h4>
                      {/* End heading */}
                      {/* Content */}
                      <div className="order-information__section-content">
                        USPS 2 - Day, Estimate delivery date <span>22 March 2022</span>
                      </div>
                      {/* End content */}
                    </div>
                    {/* End section */}
                  </div>
                </div>
                {/* End row */}
              </div>
              {/* End customer information */}
              {/* Action -*/}
              <div className="order-complete__action">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <a href="contact.html" className="fifth-button">Need help? Contact us</a>
                  </div>
                  <div className="col-12 col-md-6">
                    <a href="shop.html" className="third-button">Continue shopping</a>
                  </div>
                </div>
              </div>
              {/* End action */}
            </div>
            {/* End container */}
          </div>
          {/* End container */}
        </div>
        {/* End container */}
      </div>
      {/* End order complete */}
      <Footer />
    </div>
  )
}