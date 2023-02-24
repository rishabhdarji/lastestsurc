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
      {/* About page */}
      <div className="about-page">
        {/* Container */}
        <div className="container container--type-3">
          {/* Title */}
          <h1 className="about-page__title">Durotan's Story</h1>
          {/* End title */}
          {/* Description */}
          <div className="about-page__description">Established in 1991, Durotan &amp; Logan Cee, 2 fashion artists work together in UK, The inspiration got from natural, color pastel &amp; activities the daily. Durotan’s items alway look very basic but never out trend, easy to mixed with any style.</div>
          {/* End description */}
          {/* Image */}
          <div className="about-page__image">
            <img alt="Image" data-sizes="auto" data-srcset="/images/default/about_us.jpg 1560w,
            /images/default/about_us.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
          </div>
          {/* End image */}
          {/* Features */}
          <div className="about-page__features">
            {/* Row */}
            <div className="row">
              {/* Feature */}
              <div className="col-lg-4">
                <div className="about-feature">
                  {/* Icon */}
                  <div className="about-feature__icon">
                    <i className="lnil lnil-tshirt" />
                  </div>
                  {/* End icon */}
                  {/* Text */}
                  <div className="about-feature__text">
                    {/* Title */}
                    <h3 className="about-feature__title">Quality materials</h3>
                    {/* End title */}
                    {/* Description */}
                    <div className="about-feature__description">Gurantee 100% polyurethane and 100% polyester</div>
                    {/* End description */}
                  </div>  
                  {/* End text */}
                </div>
              </div>
              {/* End feature */}
              {/* Feature */}
              <div className="col-lg-4">
                <div className="about-feature">
                  {/* Icon */}
                  <div className="about-feature__icon">
                    <i className="lnil lnil-ship" />
                  </div>
                  {/* End icon */}
                  {/* Text */}
                  <div className="about-feature__text">
                    {/* Title */}
                    <h3 className="about-feature__title">Free shipping</h3>
                    {/* End title */}
                    {/* Description */}
                    <div className="about-feature__description">We free shipping for all oders over $199</div>
                    {/* End description */}
                  </div>  
                  {/* End text */}
                </div>
              </div>
              {/* End feature */}
              {/* Feature */}
              <div className="col-lg-4">
                <div className="about-feature">
                  {/* Icon */}
                  <div className="about-feature__icon">
                    <i className="lnil lnil-money-protection" />
                  </div>
                  {/* End icon */}
                  {/* Text */}
                  <div className="about-feature__text">
                    {/* Title */}
                    <h3 className="about-feature__title">Secure payment</h3>
                    {/* End title */}
                    {/* Description */}
                    <div className="about-feature__description">Guarante 100% secure payment online on our website</div>
                    {/* End description */}
                  </div>  
                  {/* End text */}
                </div>
              </div>
              {/* End feature */}
            </div>
            {/* End row */}
          </div>  
          {/* End features */}
        </div>
        {/* End container */}
        {/* About company */}
        <div className="about-company">
          {/* Container */}
          <div className="container container--type-3">
            {/* Row */}
            <div className="row">
              {/* Company */}
              <div className="col-lg-6 about-company__item">
                {/* Image */}
                <div className="about-company__image">
                  <img alt="Image" data-sizes="auto" data-srcset="/images/default/about_company.jpg 735w,
                  /images/default/about_company.jpg 1470w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </div>
                {/* End image */}
                {/* Title */}
                <h2 className="about-company__title">The Company</h2>
                {/* End title */}
                {/* Description */}
                <div className="about-company__description">
                  <p><span>With a strong sense of community and a moral responsibility, our brand was born. Our passion for the environment and unique design brought our vision, and products, to life.</span></p>
                  <p>Each product is infused with the elements of aroma, memory, place and beauty traditions from across the globe. These “artifacts” carry with them stories and maps of their discoveries. Always striving to inspire and to be inspired.</p>
                  <p><strong>EST. 1991</strong></p>
                </div>
                {/* End description */}
              </div>
              {/* End company */}
              {/* Leader */}
              <div className="col-lg-6 about-company__item">
                {/* Image */}
                <div className="about-company__image">
                  <img alt="Image" data-sizes="auto" data-srcset="/images/default/about_leader.jpg 735w,
                  /images/default/about_leader.jpg 1470w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </div>
                {/* End image */}
                {/* Title */}
                <h2 className="about-company__title">The Leader</h2>
                {/* End title */}
                {/* Description */}
                <div className="about-company__description">
                  <p>What that starts with, then, is a design which meets the needs not only of today and tomorrow, but the tomorrow after tomorrow, too, and of any number of tomorrows after that. It is a design which has designs to be, above all, pleasing to wear and satisfying to use, and, all the while, to go about its business in a way best described as unassuming.</p>
                  <p>Absolutely no hassle. No matter what you spill on it - coffee, oil, cranberry juice, nail polish, you can easily wipe it clean with just soap and water.</p>
                  <p>From Durotan with Love,</p>
                  <p><strong>LOGAN CEE</strong></p>
                </div>
                {/* End description */}
              </div>
              {/* End leader */}
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </div>
        {/* End about company */}
        {/* About section */}
        <div className="about-section">
          {/* Container */}
          <div className="container container--type-3">
            {/* Title */}
            <h3 className="about-section__title">Stores list</h3>
            {/* End title */}
            {/* Stores list */}
            <div className="stores-list">
              {/* Row */}
              <div className="row">
                {/* Store */}
                <div className="col-lg-4">
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
                <div className="col-lg-4">
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
                {/* Store */}
                <div className="col-lg-4">
                  <div className="stores-list__item">
                    {/* Title */}
                    <h3 className="store-item__title">Berlin</h3>
                    {/* End title */}
                    {/* Address */}
                    <div className="store-item__address">
                      {/* Store 1 */}
                      <p>
                        205 Luckstrabe St, Rummelburg, Berlin 77502, Germany<br />
                        (+0668) 5896 45 45 46<br />
                        <a href="mailto:helloge@durotan.com.us">helloge@durotan.com.us</a>
                      </p>
                      {/* End store 1 */}
                    </div>
                    {/* End address */}
                  </div>
                </div>
                {/* End store */}
              </div>
              {/* End row */}
            </div>
            {/* End stores list */}
          </div>
          {/* End container */}
        </div>
        {/* End about section */}
        {/* About section */}
        <div className="about-section">
          {/* Container */}
          <div className="container container--type-3">
            {/* Line 1px */}
            <hr />
            {/* End line 1px */}
            {/* Title */}
            <h3 className="about-section__title">Our partners</h3>
            {/* End title */}
            {/* Home brands items */}
            <div className="home-brands__items">
              {/* Item */}
              <div className="home-brand-item">
                <a href="#">
                  <img alt="Image" src="/images/default/brand_1.png" className="lazyload" />
                </a>
              </div>
              {/* End item */}
              {/* Item */}
              <div className="home-brand-item">
                <a href="#">
                  <img alt="Image" src="/images/default/brand_2.png" className="lazyload" />
                </a>
              </div>
              {/* End item */}
              {/* Item */}
              <div className="home-brand-item">
                <a href="#">
                  <img alt="Image" src="/images/default/brand_3.png" className="lazyload" />
                </a>
              </div>
              {/* End item */}
              {/* Item */}
              <div className="home-brand-item">
                <a href="#">
                  <img alt="Image" src="/images/default/brand_4.png" className="lazyload" />
                </a>
              </div>
              {/* End item */}
              {/* Item */}
              <div className="home-brand-item">
                <a href="#">
                  <img alt="Image" src="/images/default/brand_5.png" className="lazyload" />
                </a>
              </div>
              {/* End item */}
              {/* Item */}
              <div className="home-brand-item">
                <a href="#">
                  <img alt="Image" src="/images/default/brand_6.png" className="lazyload" />
                </a>
              </div>
              {/* End item */}
            </div>
            {/* End home brands items */}
          </div>
          {/* End container */}
        </div>
        {/* End about section */}
      </div>
      {/* End about page */}
      <Footer />
    </React.Fragment>
  )
}