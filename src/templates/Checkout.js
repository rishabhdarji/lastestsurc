import React, { useEffect } from 'react';
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { useShopify } from "../hooks"

export default (props) => {
  const { closeCart, closeSearch, closeCanvasMenu } = useShopify()
  useEffect(() => {
    window.scrollTo(0, 0);
    closeCart();
    closeSearch();
    closeCanvasMenu();
  }, [])
  return (
    <React.Fragment>
      <Header />
      {/* Checkout */}
      <div className="checkout">
        {/* Container */}
        <div className="container container--type-3">
          {/* Second container */}
          <div className="container">
            {/* Title */}
            <h1 className="checkout__title">Checkout</h1>
            {/* End title */}
            {/* Form */}
            <form className="row">  
              {/* Left column */}
              <div className="col-lg-7">
                {/* Container */}
                <div className="checkout__container">
                  {/* Row */}
                  <div className="row">
                    <div className="col-12 col-md-6">
                      {/* Login */}
                      <div className="checkout__login"><a href="#"><i className="lnil lnil-user" />Log In Your Account</a></div>
                      {/* End login */}
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Promo code */}
                      <div className="checkout__promo-code">
                        <div className="promo-code__icon"><i className="lnil lnil-coin" /></div>
                        <input type="text" className="promo-code__input" placeholder="Enter promo code" />
                        <button className="promo-code__apply" type="submit">apply</button>
                      </div>
                      {/* End promo code */}
                    </div>
                  </div>
                  {/* End row */}
                  {/* Billing form */}
                  <div className="billing-form">
                    {/* Title */}
                    <h3 className="billing-form__heading">Billing Detail</h3>
                    {/* End title */}
                    {/* Row */}
                    <div className="row">
                      <div className="col-12 col-md-6">
                        {/* Form group */}
                        <div className="form-group">
                          <input type="text" placeholder="First Name *" className="form-group__input" />   
                        </div>      
                        {/* End form group */}             
                      </div>
                      <div className="col-12 col-md-6">
                        {/* Form group */}
                        <div className="form-group">
                          <input type="text" placeholder="Last Name *" className="form-group__input" />   
                        </div>  
                        {/* End form group */}
                      </div>
                    </div>
                    {/* End row */} 
                    {/* Form group */}
                    <div className="form-group">
                      <input type="text" placeholder="Company Name" className="form-group__input" />   
                    </div>  
                    {/* End form group */}
                    {/* Form group */}
                    <div className="form-group">
                      <div className="form-group__select">   
                        <select>
                          <option>Select a country / region *</option>
                          <option>USA</option>
                          <option>Poland</option>
                          <option>Wales</option>
                        </select>
                      </div>
                    </div>  
                    {/* End form group */}
                    {/* Form group */}
                    <div className="form-group">
                      <input type="text" placeholder="Street Address *" className="form-group__input" />   
                    </div>  
                    {/* End form group */}
                    {/* Form group */}
                    <div className="form-group">
                      <input type="text" placeholder="Town / City *" className="form-group__input" />   
                    </div>  
                    {/* End form group */}
                    {/* Form group */}
                    <div className="form-group">
                      <input type="text" placeholder="Postcode / ZIP *" className="form-group__input" />   
                    </div>  
                    {/* End form group */}
                    {/* Form group */}
                    <div className="form-group">
                      <input type="text" placeholder="Phone Number *" className="form-group__input" />   
                    </div>  
                    {/* End form group */}
                    {/* Form group */}
                    <div className="form-group">
                      <input type="text" placeholder="Email Address *" className="form-group__input" />   
                    </div>  
                    {/* End form group */}
                    {/* Form checkbox */}
                    <div className="form-checkbox">
                      <input type="checkbox" id="checkbox1" className="form-checkbox__input" />
                      <label className="form-checkbox__label" htmlFor="checkbox1">Create an account?</label>
                    </div>
                    {/* End form checkbox */}
                    {/* Form checkbox */}
                    <div className="form-checkbox">
                      <input type="checkbox" id="checkbox2" className="form-checkbox__input" />
                      <label className="form-checkbox__label" htmlFor="checkbox2">Ship to a different address?</label>
                    </div>
                    {/* End form checkbox */}
                    {/* Form group */}
                    <div className="form-group">
                      <textarea placeholder="Order note (optional)" className="form-group__textarea" rows={5} defaultValue={""} />
                    </div>  
                    {/* End form group */}
                  </div>
                  {/* End billing form */}
                </div>
                {/* End container */}
              </div>  
              {/* End left column */}
              {/* Right column */}
              <div className="col-lg-5">
                {/* Summary */}
                <div className="checkout__summary">
                  {/* Title -*/}
                  <h3 className="checkout-summary__title">Your Order</h3>
                  {/* End title */}
                  {/* Products */}
                  <div className="checkout__products">
                    {/* Product */}
                    <div className="checkout__product">
                      <div className="checkout-product__image">
                        <a href="product.html">
                          <img alt="Image" data-sizes="auto" data-srcset="/products/1/10a.jpg 400w,
                          /products/1/10a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                        </a>
                      </div>
                      <div className="checkout-product__title-and-variant">
                        <h3 className="checkout-product__title"><a href="product.html">2 x Slim fit modal cotton shirt</a></h3>
                        <div className="checkout-product__variant">Grey, M</div>
                      </div>
                      <div className="checkout-product__price">$113.98</div>
                    </div>
                    {/* End product */}
                    {/* Product */}
                    <div className="checkout__product">
                      <div className="checkout-product__image">
                        <a href="product.html">
                          <img alt="Image" data-sizes="auto" data-srcset="/products/1/11a.jpg 400w,
                          /products/1/11a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                        </a>
                      </div>
                      <div className="checkout-product__title-and-variant">
                        <h3 className="checkout-product__title"><a href="product.html">1 x Suede sport shoes</a></h3>
                        <div className="checkout-product__variant">Bold Brown, 40</div>
                      </div>
                      <div className="checkout-product__price">$45.5</div>
                    </div>
                    {/* End product */}
                    {/* Product */}
                    <div className="checkout__product">
                      <div className="checkout-product__image">
                        <a href="product.html">
                          <img alt="Image" data-sizes="auto" data-srcset="/products/1/12a.jpg 400w,
                          /products/1/12a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                        </a>
                      </div>
                      <div className="checkout-product__title-and-variant">
                        <h3 className="checkout-product__title"><a href="product.html">1 x Pebbled crossbody belt bag</a></h3>
                      </div>
                      <div className="checkout-product__price">$72.99</div>
                    </div>
                    {/* End product */}
                  </div>  
                  {/* End products */}
                  {/* Subtotal and shipping */}
                  <div className="checkout__subtotal-and-shipping">
                    {/* Subtotal */}
                    <div className="checkout__subtotal">
                      <div className="checkout-subtotal__title">Subtotal</div>
                      <div className="checkout-subtotal__price">$252.47</div>
                    </div>  
                    {/* End subtotal */}
                    {/* Shipping */}
                    <div className="checkout__shipping">
                      <div className="checkout-shipping__title">Standard Shipping</div>
                      <div className="checkout-shipping__price">$20.0</div>
                    </div>  
                    {/* End shipping */}
                  </div>    
                  {/* End subtotal and shipping */}
                  {/* Total */}
                  <div className="checkout__total">
                    <div className="checkout-total__title">Total</div>
                    <div className="checkout-total__price">$272.47</div>
                  </div>
                  {/* End total */}
                  {/* Payment methods */}
                  <div className="checkout__payment-methods">
                    {/* Payment method */}
                    <div className="checkout-payment-method">
                      <input type="radio" name="payment-method" id="payment1" />
                      <label htmlFor="payment1">
                        Direct Bank Transfers
                      </label>
                    </div>
                    {/* End payment method */}
                    {/* Payment method */}
                    <div className="checkout-payment-method">
                      <input type="radio" name="payment-method" id="payment2" />
                      <label htmlFor="payment2">
                        Check Payments
                        <span>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span>
                      </label>
                    </div>
                    {/* End payment method */}
                    {/* Payment method */}
                    <div className="checkout-payment-method">
                      <input type="radio" name="payment-method" id="payment3" />
                      <label htmlFor="payment3">
                        Cash On Delivery
                      </label>
                    </div>
                    {/* End payment method */}
                    {/* Payment method */}
                    <div className="checkout-payment-method">
                      <input type="radio" name="payment-method" id="payment4" />
                      <label htmlFor="payment4">
                        Paypal
                      </label>
                    </div>
                    {/* End payment method */}
                  </div>  
                  {/* End payment methods */}
                  {/* Privacy policy */}
                  <div className="checkout__privacy-policy">
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#">privacy policy</a>.
                  </div>
                  {/* End privacy policy */}
                  {/* Action */}
                  <div className="checkout__action">
                    <button type="submit" className="second-button">Place order</button>
                  </div>
                  {/* End action */}
                </div>
                {/* End summary */}
              </div>
              {/* End right column */}
            </form>
            {/* End form */}
          </div>
          {/* End second container */}
        </div>
        {/* End container */}
      </div>
      {/* End checkout */}
      <Footer />
    </React.Fragment>
  )
}