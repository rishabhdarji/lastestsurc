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
      {/* Contact page */}
      <div className="contact-page">
        {/* Container */}
        <div className="container container--type-3">
          {/* Title */}
          <h1 className="contact-page__title">Contact Us</h1>
          {/* End title */}
          {/* Description */}
          <div className="contact-page__description">We love to hear from you on our customer service, merchandise,<br />website or any topics you want to share with us</div>
          {/* End description */}
          {/* Google map */}
          <div className="contact-page__google-map">
            <iframe width={600} height={570} id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
          </div>
          {/* End google map */}
          {/* Section */}
          <div className="contact-page__section">
            {/* Container */}
            <div className="container">
              {/* Row */}
              <div className="row">
                {/* Title */}
                <div className="col-lg-3">
                  <h3 className="contact-section__title">Contact Information</h3>
                </div>  
                {/* End title */}
                {/* Content */}
                <div className="col-lg-9">
                  {/* Stores list */}
                  <div className="stores-list">
                    {/* Row */}
                    <div className="row">
                      {/* Store */}
                      <div className="col-lg-6">
                        <div className="stores-list__item">
                          {/* Title */}
                          <h3 className="store-item__title">New York</h3>
                          {/* End title */}
                          {/* Address */}
                          <div className="store-item__address">
                            {/* Store 1 */}
                            <h4 className="address__store-number">Store 1</h4>
                            <p>
                              68 Atlantic Ave St, Brooklyn, NY 90002, USA<br />
                              (+005) 5896 72 78 79<br />
                              <a href="mailto:hellony@durotan.com.us">hellony@durotan.com.us</a>
                            </p>
                            {/* End store 1 */}
                            {/* Store 1 */}
                            <h4 className="address__store-number">Store 2</h4>
                            <p>
                              172 Richmond Hill Ave St, Stamford, NY 90002, USA <br />
                              (+005) 5896 03 04 05
                            </p>
                            {/* End store 1 */}
                          </div>
                          {/* End address */}
                        </div>
                      </div>
                      {/* End store */}
                      {/* Store */}
                      <div className="col-lg-6">
                        <div className="stores-list__item">
                          {/* Title */}
                          <h3 className="store-item__title">London</h3>
                          {/* End title */}
                          {/* Address */}
                          <div className="store-item__address">
                            {/* Store 1 */}
                            <p>
                              88 Landsome Way St, Stockwell, London 534, UK<br />
                              (+089) 5896 26 26 27<br />
                              <a href="mailto:hellold@durotan.com.uk">hellold@durotan.com.uk</a>
                            </p>
                            {/* End store 1 */}
                          </div>
                          {/* End address */}
                        </div>
                      </div>
                      {/* End store */}
                      {/* Social media */}
                      <div className="col-lg-6">
                        <div className="stores-list__item">
                          {/* Title */}
                          <h3 className="store-item__title">Social</h3>
                          {/* End title */}
                          <ul className="footer__socials">
                            <li><a href="https://twitter.com" target="_blank"><i className="lnil lnil-twitter" /></a></li>
                            <li><a href="https://facebook.com" target="_blank"><i className="lnil lnil-facebook" /></a></li>
                            <li><a href="https://instagram.com" target="_blank"><i className="lnil lnil-Instagram" /></a></li>
                          </ul>
                        </div>
                      </div>
                      {/* End social media */}
                    </div>
                    {/* End row */}
                  </div>
                  {/* End stores list */}
                </div>
                {/* End content */}
              </div>
              {/* End row */}
            </div>  
            {/* End container */}
          </div>
          {/* End section */}
          {/* Section */}
          <div className="contact-page__section">
            {/* Container */}
            <div className="container">
              {/* Line 1 px */}
              <hr />
              {/* End line 1x px */}
              {/* Row */}
              <div className="row">
                {/* Title */}
                <div className="col-lg-3">
                  <h3 className="contact-section__title">Drop Us A<br />Line</h3>
                </div>  
                {/* End title */}
                {/* Content */}
                <div className="col-lg-9">
                  {/* Form */}
                  <form className="contact-page__form">
                    {/* Required fields */}
                    <div className="form__required-fields">Required fields are marked<span>*</span></div>
                    {/* End required fields */}
                    {/* Form group */}
                    <div className="form-group">
                      <input type="text" name="subject" className="form-group__input" placeholder="Subject (optional)" />
                    </div>
                    {/* End form group */}
                    {/* Form group */}
                    <div className="form-group">
                      <textarea placeholder="Write your message here" className="form-group__textarea" rows={5} defaultValue={""} />
                    </div>
                    {/* End form group */}
                    {/* Row */}
                    <div className="row">
                      <div className="col-md-6">
                        {/* Form group */}
                        <div className="form-group">
                          <input type="text" name="name" className="form-group__input" placeholder="Full Name" />
                        </div>
                        {/* End form group */}
                      </div>
                      <div className="col-md-6">
                        {/* Form group */}
                        <div className="form-group">
                          <input type="email" name="email" className="form-group__input" placeholder="Your E-mail*" />
                        </div>
                        {/* End form group */}
                      </div>
                    </div>
                    {/* End row */}
                    {/* Action */}
                    <div className="form__action">
                      <button type="submit" className="second-button">Send message</button>
                    </div>
                    {/* End action */}
                  </form>
                  {/* End form */}
                </div>
                {/* End content */}
              </div>
              {/* End row */}
            </div>  
            {/* End container */}
          </div>
          {/* End section */}
        </div>
        {/* End container */}
      </div>
      {/* End contact page */}
      <Footer />
    </React.Fragment>
  )
}