import React, { useEffect, useState } from 'react';
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { Link } from 'react-router-dom';
import { useShopify } from "../hooks"
import RecentlyViewed from "../sections/RecentlyViewed"
import CompleteYourOutfit from "../sections/CompleteYourOutfit"
import RelatedProducts from "../sections/RelatedProducts"
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';
import Slider from "react-slick";

export default (props) => {
  const {
    product,
    fetchProduct,
    openCart,
    checkoutState,
    addVariant,
    closeCart, 
    closeSearch, 
    closeCanvasMenu,
  } = useShopify()

  const id = props.match.params.productId
  const defaultSize = product.variants && product.variants[0].id.toString()
  const [size, setSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState({src: '', index: ''})
  const [loader, setLoader] = useState(false)
  const [fromImages, setFromImages] = useState(false)
  const [toImages, setToImages] = useState(false)
  const [activeDesktopTab, setActiveDesktopTab] = useState(false)
  const [activeMobileTab, setActiveMobileTab] = useState(false)

  function changeImage(src, index) {
    setActiveImage({'src': src, 'index': index})
  }

  function openDesktopTab(index) {
    setActiveDesktopTab(index);
  }

  function openMobileTab(index) {
    setActiveMobileTab(index);
  }

  function prevImages() {
    if(fromImages > 5) {
      setFromImages(fromImages-6);
      setToImages(toImages-6);
    }
  }

  function nextImages() {
    if(toImages < product.images.length) {
      setFromImages(fromImages+6);
      setToImages(toImages+6);
    }
  }

  function changeSize(sizeId, quantity) {
    if (sizeId === "") {
      sizeId = defaultSize
      const lineItemsToAdd = [
        { variantId: sizeId, quantity: parseInt(quantity, 10) },
      ]
      const checkoutId = checkoutState.id
      localStorage.setItem("checkoutId", checkoutId);
      addVariant(checkoutId, lineItemsToAdd)
    } else {
      const lineItemsToAdd = [
        { variantId: sizeId, quantity: parseInt(quantity, 10) },
      ]
      const checkoutId = checkoutState.id
      localStorage.setItem("checkoutId", checkoutId);
      addVariant(checkoutId, lineItemsToAdd)
    }
    openCart();
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoader(false);
    setFromImages(0);
    setToImages(6);
    setActiveMobileTab(1);

    closeCart();
    closeSearch();
    closeCanvasMenu();

    fetchProduct(id).then((res) => {
      setTimeout(function () {
        setLoader(true);
      }, 200)
      changeImage(res.images[0].src, 0);
    })
  }, [id])
  return (
    <React.Fragment>
      <div className="product-page">
        <Header />
        {loader ? (
          <React.Fragment>
            {/* Product breadcrumb */}
            <div className="product-breadcrumb">
              {/* Container */}
              <div className="container container--type-3">
                {/* D-flex */}
                <div className="product-breadcrumb__d-flex d-flex align-items-center">
                  {/* Breadcrumb */}
                  <ol className="breadcrumb text-uppercase">
                    <li className="breadcrumb__item"><a href="index.html">home </a></li>
                    <li className="breadcrumb__item"><a href="product.html">product</a></li>
                    <li className="breadcrumb__item active" aria-current="page">{product.title}</li>
                  </ol>
                  {/* End breadcrumb */}
                  {/* Prev / next */}
                  <ul className="product-breadcrumb__prev-next d-flex align-items-center">
                    <li><a href="#"><i className="lnil lnil-chevron-left" /><span>Prev</span></a></li>
                    <li><a href="#"><span>Next</span><i className="lnil lnil-chevron-right" /></a></li>
                  </ul>
                  {/* End prev / next */}
                </div>
                {/* End d-flex */}
              </div>
              {/* End container */}
            </div>
            {/* End product breadcrumb */}
            {/* Product mobile previous page */}
            <div className="product__previous-page">
              <Link to="/collections/all"><i className="lnil lnil-arrow-left" /></Link>
            </div>
            {/* End product mobile previous page */}
            {/* Product mobile gallery */}
            <Slider className="product__mobile-gallery" {...settings}>
              {product.images.map((image, index) => {
                return (
                  <div className="mobile-product-image" key={index}>
                    <p>
                      <img src={image.src} title={product.title} alt={product.title} />
                    </p>
                  </div>
                );
              })}
            </Slider>
            {/* End product mobile gallery */}
            {/* Product */}
            <div className="product">
              {/* Container */}
              <div className="container container--type-3">
                {/* Product main */}
                <div className="product__main d-flex">
                  {/* Product thumbnails */}
                  <ul className="product__thumbnails">
                    {product.images.map((image, index) => {
                      return (
                        <li key={index} className={index >= fromImages && index < toImages ? '' : 'd-none' }>
                          <a href="#product_image" className={activeImage.index === index ? 'active' : '' } onClick={() => changeImage(image.src, index)}>
                            <img src={image.src} title={product.title} alt={product.title} />
                          </a>
                        </li>
                      );
                    })}
                    <li className={product.images.length > 6 ? 'product-thumbnails__next' : 'product-thumbnails__next d-none' }>
                      <p className="js-product-thumbnails-prev" onClick={() => prevImages()} />
                      <p className="js-product-thumbnails-next" onClick={() => nextImages()} />
                    </li>
                  </ul>
                  {/* End product thumbnails */}
                  {/* Product main image */}
                  <ul className="product__main-image js-popup-gallery">
                    <li className="active js-product-main-image" data-id={0}>
                      <InnerImageZoom src={activeImage.src} />
                    </li>
                  </ul>
                  {/* End product main image */}
                  {/* Product right */}
                  <div className="product__right">
                    {/* Tag */}
                    <div className="product__tag">Washable</div>
                    {/* End tag */}
                    {/* Product title */}
                    <h1 className="product__title">{product.title}</h1>
                    {/* End product title */}
                    {/* Product reviews */}
                    <div className="product__reviews">
                      <i className="lnir lnir-star-filled active" />
                      <i className="lnir lnir-star-filled active" />
                      <i className="lnir lnir-star-filled active" />
                      <i className="lnir lnir-star-filled active" />
                      <i className="lnir lnir-star-filled" />
                      <span>3 reviews</span>
                    </div>
                    {/* End product reviews */}
                    {/* Product price */}
                    <div className="product__price">
                      {product.variants[0].compareAtPrice != null ? (
                        <React.Fragment>
                          <span className="product-price__new">${product.variants[0].price}</span> <span className="product-price__old">${product.variants[0].compareAtPrice}</span>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <span>${product.variants[0].price}</span>
                        </React.Fragment>
                      )}
                    </div>
                    {/* End product price */}
                    {/* Status */}
                    <div className="product__status">
                      <i className="lnir lnir-package" />
                      <span>Status:</span>
                      <span className="status__value status__value--in-stock">In stock</span>
                    </div>  
                    {/* End product status */}
                    {/* Options */}
                    <div className="product__options">
                      {/* Product colors */}
                      <div className="product__colors d-flex align-items-center">
                        {/* Available colors */}
                        <ul className="product__available-colors">
                          <li className="active"><a href="#" style={{background: '#af957c'}} className="open-tooltip"><span className="custom-tooltip">Brown</span></a></li>
                          <li><a href="#" style={{background: '#144412'}} className="open-tooltip"><span className="custom-tooltip">Green</span></a></li>
                          <li><a href="#" style={{background: '#1c1b20'}} className="open-tooltip"><span className="custom-tooltip">Black</span></a></li>
                          <li><a href="#" style={{background: '#8c000d'}} className="open-tooltip"><span className="custom-tooltip">Red</span></a></li>
                        </ul>
                        {/* End available colors */}
                        {/* Current color */}
                        <div className="product__current-color">Color: <span>Brown</span></div>
                        {/* End current color */}
                      </div>
                      {/* End product colors */}
                      {/* Product sizes */}
                      <div className="product__sizes">
                        <select
                          id="prodOptions"
                          name={size}
                          onChange={(e) => {
                            setSize(e.target.value)
                          }}
                        >
                          {product.variants &&
                            product.variants.map((item, i) => {
                              return (
                                <option
                                  value={item.id.toString()}
                                  key={item.title + i}
                                >{`${item.title}`}</option>
                              )
                            })}
                        </select>
                      </div>
                      {/* End product sizes */}
                    </div>
                    {/* End options */}
                    {/* Product action */} 
                    <div className="product__action js-product-action">
                      {/* Product quantity and add to cart */}
                      <div className="product__quantity-and-add-to-cart d-flex">
                        {/* Quantity */}
                        <div className="product__quantity">
                          <div className="product-quantity__minus"><a href="#"><i className="lnil lnil-minus" /></a></div>
                          <input
                            className="product-quantity__input"
                            type="text"
                            min={1}
                            value={quantity}
                            onChange={(e) => {
                              setQuantity(e.target.value)
                            }}
                          ></input>
                          <div className="product-quantity__plus"><a href="#"><i className="lnil lnil-plus" /></a></div>
                        </div>  
                        {/* End quantity */}
                        {/* Add to cart */}
                        <div className="product__add-to-cart">
                          <a className="eighth-button" onClick={(e) => changeSize(size, quantity)}>Add to cart</a>
                        </div>
                        {/* End add to cart */}
                      </div>
                      {/* End product quantity and add to cart */}
                      {/* Buy now */}
                      <div className="product__buy-now">
                        <a href="#" className="second-button">Buy now</a>
                      </div>
                      {/* End buy now */}
                    </div>
                    {/* End product action */}
                    {/* Product second action */}
                    <ul className="product__second-action d-flex">
                      <li><a href="#"><i className="lnil lnil-heart" /> Add to wishlist</a></li>
                      <li><a href="#"><i className="lnil lnil-reload" /> Compare</a></li>
                      <li><a href="#"><i className="lnil lnil-tshirt" /> Size guide</a></li>
                    </ul>
                    {/* End product section action */}
                    {/* Product information */}
                    <ul className="product__information">
                      <li><span>SKU</span><p>SS-501</p></li>
                      <li><span>Category</span><p>Men’s Clothing</p></li>
                      <li><span>Tags</span><p><a href="#">shirt</a>, <a href="#">men</a>, <a href="#">basic</a>, <a href="#">cotton</a></p></li>
                    </ul>
                    {/* End product information */}
                    {/* Product social */}
                    <ul className="product__socials">
                      <li><a href="https://twitter.com" target="_blank"><i className="lnil lnil-twitter" /></a></li>
                      <li><a href="https://facebook.com" target="_blank"><i className="lnil lnil-facebook" /></a></li>
                      <li><a href="https://instagram.com" target="_blank"><i className="lnil lnil-Instagram" /></a></li>
                    </ul>
                    {/* End product social */}
                    {/* Mobile tabs */}
                    <div className="product__mobile-tabs">
                      {/* Accordion */}
                      <div className={activeMobileTab == 1 ? 'active accordion' : 'accordion'}>
                        {/* Title */}
                        <div className="accordion__title" onClick={() => openMobileTab(1)}>
                          Description
                        </div>
                        {/* End title */}
                        {/* Content */}
                        <div className="accordion__content js-accordion-content">
                          <h3>Introduce</h3>
                          <p>Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel with notch. Back slit. Two pockets with flaps on the front. Button up. Inner lining. Inner pocket. Back length 95.0 cm.</p>
                          <h3>Material &amp; Washing Instructions</h3>
                          <p>Composition: 51% wool,45% polyester,2% acrylic,2% viscose.<br />Lining: 53% cotton,47% polyester.<br />Sleeve lining: 100% polyester</p>
                          <ul className="tab__features">
                            <li><p><img src="/images/default/icon-washing.png" alt="Icon" /></p> <span>No Washing</span></li>
                            <li><p><img src="/images/default/icon-bleach.png" alt="Icon" /></p> <span>do not bleach</span></li>
                            <li><p><img src="/images/default/icon-ironing.png" alt="Icon" /></p> <span>ironing max 110 0 c / 230 0 f</span></li>
                            <li><p><img src="/images/default/icon-dry-cleaning.png" alt="Icon" /></p> <span>dry cleaning perchloroethylene</span></li>
                            <li><p><img src="/images/default/icon-tumble-dry.png" alt="Icon" /></p> <span>do not tumble dry</span></li>
                          </ul>
                        </div>
                        {/* End content */}
                      </div>
                      {/* End accordion */}
                      {/* Accordion */}
                      <div className={activeMobileTab == 2 ? 'active accordion' : 'accordion'}>
                        {/* Title */}
                        <div className="accordion__title" onClick={() => openMobileTab(2)}>
                          Ship &amp; return
                        </div>
                        {/* End title */}
                        {/* Content */}
                        <div className="accordion__content js-accordion-content">
                          <h3>Shipping</h3>
                          <ul>
                            <li>Complimentary ground shipping within 1 to 7 business days</li>
                            <li>In-store collection available within 1 to 7 business days</li>
                            <li>Next-day and Express delivery options also available</li>
                            <li>Purchases are delivered in an orange box tied with a Bolduc ribbon.</li>
                            <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                          </ul>
                          <h3>Returns &amp; Exchanges</h3>
                          <ul>
                            <li>Easy and complimentary, within 14 days</li>
                            <li>See conditions and procedure in our return FAQs</li>
                            <li>Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</li>
                          </ul>
                        </div>
                        {/* End content */}
                      </div>
                      {/* End accordion */}
                      {/* Accordion */}
                      <div className={activeMobileTab == 3 ? 'active accordion' : 'accordion'}>
                        {/* Title */}
                        <div className="accordion__title" onClick={() => openMobileTab(3)}>
                          Review (3)
                        </div>
                        {/* End title */}
                        {/* Content */}
                        <div className="accordion__content js-accordion-content">
                          <h3 className="review__title">Customer’s Review (2)</h3>
                          {/* Review */}
                          <div className="review d-flex">
                            {/* Avatar */}
                            <div className="review__avatar">
                              <img alt="Image" data-sizes="auto" data-srcset="/images/default/avatar_1.jpg 1560w,
                            /images/default/avatar_1.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                            </div>
                            {/* End avatar */}
                            {/* Details */}
                            <div className="review__details">
                              {/* Title and rating */}
                              <div className="review__title-and-rating d-flex">
                                {/* Name */}
                                <div className="review__title">Quality product &amp; very comfortable!</div>
                                {/* End name */}
                                {/* Rating */}
                                <div className="review__rating">
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                </div>
                                {/* End rating */}
                              </div>
                              {/* End title and rating */}
                              {/* Content */}
                              <div className="review__content">Thanks to the precious advice of the store owner, I choose this wonderful product. I absolutely love it! Additionally, my order was sent very quickly. I'm a happy customer and I'll order again!</div>
                              {/* End content */}
                              {/* Meta */}
                              <div className="review__meta">
                                <span>andy robertson.</span>  on 25 April, 2022
                              </div>
                              {/* End meta */}
                            </div>
                            {/* End details */}
                          </div>
                          {/* End review */}
                          {/* Review */}
                          <div className="review d-flex">
                            {/* Avatar */}
                            <div className="review__avatar">
                              <img alt="Image" data-sizes="auto" data-srcset="/images/default/avatar_2.jpg 1560w,
                            /images/default/avatar_2.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                            </div>
                            {/* End avatar */}
                            {/* Details */}
                            <div className="review__details">
                              {/* Title and rating */}
                              <div className="review__title-and-rating d-flex align">
                                {/* Name */}
                                <div className="review__title">Awesome product</div>
                                {/* End name */}
                                {/* Rating */}
                                <div className="review__rating">
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                </div>
                                {/* End rating */}
                              </div>
                              {/* End title and rating */}
                              {/* Content */}
                              <div className="review__content">I love it &amp; certainly that i’ll buy it once again. Perfection experience!</div>
                              {/* End content */}
                              {/* Meta */}
                              <div className="review__meta">
                                <span>Alexander Arnold.</span>  on 25 April, 2022
                              </div>
                              {/* End meta */}
                            </div>
                            {/* End details */}
                          </div>
                          {/* End review */}
                          <h3>Add A Review</h3>
                          {/* Form */}
                          <form className="review__form">
                            {/* Required fields */}
                            <div className="form__required-fields">Your email address will not be published. Required fields are marked<span>*</span></div>
                            {/* End required fields */}
                            {/* Your rating */}
                            <div className="form__your-rating d-flex align-items-center">
                              <div className="your-rating__title">Your rating</div>
                              <div className="your-rating__content js-rating-content">
                                <i className="lnir lnir-star-filled js-rating" data-value={1} />
                                <i className="lnir lnir-star-filled js-rating" data-value={2} />
                                <i className="lnir lnir-star-filled js-rating" data-value={3} />
                                <i className="lnir lnir-star-filled js-rating" data-value={4} />
                                <i className="lnir lnir-star-filled js-rating" data-value={5} />
                                <div className="d-none">
                                  <input type="radio" name="rating" className="js-rating-input" defaultValue={1} />
                                  <input type="radio" name="rating" className="js-rating-input" defaultValue={2} />
                                  <input type="radio" name="rating" className="js-rating-input" defaultValue={3} />
                                  <input type="radio" name="rating" className="js-rating-input" defaultValue={4} />
                                  <input type="radio" name="rating" className="js-rating-input" defaultValue={5} />
                                </div>
                              </div>
                            </div>
                            {/* End your rating */}
                            {/* Form group */}
                            <div className="form-group">
                              <input type="text" name="subject" className="form-group__input" placeholder="Give your review a tittle " />
                            </div>
                            {/* End form group */}
                            {/* Form group */}
                            <div className="form-group">
                              <textarea placeholder="Write your review here" className="form-group__textarea" rows={3} defaultValue={""} />
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
                            {/* Form checkbox */}
                            <div className="form-checkbox">
                              <input type="checkbox" id="checkbox1" className="form-checkbox__input" />
                              <label className="form-checkbox__label" htmlFor="checkbox1">Save my name &amp; email in this browser for next time i comment</label>
                            </div>
                            {/* End form checkbox */}
                            {/* Action */}
                            <div className="form__action">
                              <button type="submit" className="second-button">Submit review</button>
                            </div>
                            {/* End action */}
                          </form>
                          {/* End form */}
                        </div>
                        {/* End content */}
                      </div>
                      {/* End accordion */}
                      {/* Accordion */}
                      <div className={activeMobileTab == 4 ? 'active accordion' : 'accordion'}>
                        {/* Title */}
                        <div className="accordion__title" onClick={() => openMobileTab(4)}>
                          Ask a question
                        </div>
                        {/* End title */}
                        {/* Content */}
                        <div className="accordion__content js-accordion-content">
                          {/* Form */}
                          <form className="contact-page__form">
                            {/* Form group */}
                            <div className="form-group">
                              <input type="text" name="subject" className="form-group__input" placeholder="Subject (optional)" />
                            </div>
                            {/* End form group */}
                            {/* Form group */}
                            <div className="form-group">
                              <textarea placeholder="Write your question here" className="form-group__textarea" rows={5} defaultValue={""} />
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
                              <button type="submit" className="second-button">Ask a question</button>
                            </div>
                            {/* End action */}
                          </form>
                          {/* End form */}
                        </div>
                        {/* End content */}
                      </div>
                      {/* End accordion */}
                    </div>
                    {/* End mobile tabs */}
                    {/* Product tabs */}
                    <ul className="product__tabs d-flex">
                      <li><a className="js-open-tab" onClick={() => openDesktopTab(1)}>Description</a></li>
                      <li><a className="js-open-tab" onClick={() => openDesktopTab(2)}>Ship &amp; return</a></li>
                      <li><a className="js-open-tab" onClick={() => openDesktopTab(3)}>Review (3)</a></li>
                      <li><a className="js-open-tab" onClick={() => openDesktopTab(4)}>Ask a question</a></li>
                    </ul>
                    {/* End product tabs */}
                    {/* Tab description */}
                    <div className={activeDesktopTab == 1 ? 'active tab' : 'tab'}>
                      <div className="tab__overlay" onClick={() => openDesktopTab(0)} />
                      {/* Tab content */}
                      <div className="tab__content">
                        {/* Heading */}
                        <div className="tab__heading d-flex align-items-center">
                          {/* H3 */}
                          <h3 className="tab__h3">Description</h3>
                          {/* End h3 */}
                          {/* Close */}
                          <div className="tab__close"><a onClick={() => openDesktopTab(0)}><i className="lnil lnil-close" /></a></div>
                          {/* End close */}
                        </div>  
                        {/* End heading */}
                        {/* Description */}
                        <div className="tab__description">
                          <h3>Introduce</h3>
                          <p>Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel with notch. Back slit. Two pockets with flaps on the front. Button up. Inner lining. Inner pocket. Back length 95.0 cm.</p>
                          <h3>Material &amp; Washing Instructions</h3>
                          <p>Composition: 51% wool,45% polyester,2% acrylic,2% viscose.<br />Lining: 53% cotton,47% polyester.<br />Sleeve lining: 100% polyester</p>
                          <ul className="tab__features">
                            <li><p><img src="/images/default/icon-washing.png" alt="Icon" /></p> <span>No Washing</span></li>
                            <li><p><img src="/images/default/icon-bleach.png" alt="Icon" /></p> <span>do not bleach</span></li>
                            <li><p><img src="/images/default/icon-ironing.png" alt="Icon" /></p> <span>ironing max 110 0 c / 230 0 f</span></li>
                            <li><p><img src="/images/default/icon-dry-cleaning.png" alt="Icon" /></p> <span>dry cleaning perchloroethylene</span></li>
                            <li><p><img src="/images/default/icon-tumble-dry.png" alt="Icon" /></p> <span>do not tumble dry</span></li>
                          </ul>
                        </div>
                        {/* End description */}
                      </div>
                      {/* End tab content */}
                    </div>
                    {/* End tab description */}
                    {/* Tab ship & return */}
                    <div className={activeDesktopTab == 2 ? 'active tab' : 'tab'}>
                      <div className="tab__overlay" onClick={() => openDesktopTab(0)} />
                      {/* Tab content */}
                      <div className="tab__content">
                        {/* Heading */}
                        <div className="tab__heading d-flex align-items-center">
                          {/* H3 */}
                          <h3 className="tab__h3">Ship &amp; return</h3>
                          {/* End h3 */}
                          {/* Close */}
                          <div className="tab__close"><a  onClick={() => openDesktopTab(0)}><i className="lnil lnil-close" /></a></div>
                          {/* End close */}
                        </div>  
                        {/* End heading */}
                        {/* Description */}
                        <div className="tab__description">
                          <h3>Shipping</h3>
                          <ul>
                            <li>Complimentary ground shipping within 1 to 7 business days</li>
                            <li>In-store collection available within 1 to 7 business days</li>
                            <li>Next-day and Express delivery options also available</li>
                            <li>Purchases are delivered in an orange box tied with a Bolduc ribbon.</li>
                            <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                          </ul>
                          <h3>Returns &amp; Exchanges</h3>
                          <ul>
                            <li>Easy and complimentary, within 14 days</li>
                            <li>See conditions and procedure in our return FAQs</li>
                            <li>Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</li>
                          </ul>
                        </div>
                        {/* End description */}
                      </div>
                      {/* End tab content */}
                    </div>
                    {/* End tab ship & return */}
                    {/* Tab reviews  */}
                    <div className={activeDesktopTab == 3 ? 'active tab' : 'tab'}>
                      <div className="tab__overlay" onClick={() => openDesktopTab(0)} />
                      {/* Tab content */}
                      <div className="tab__content">
                        {/* Heading */}
                        <div className="tab__heading d-flex align-items-center">
                          {/* H3 */}
                          <h3 className="tab__h3">Review (3)</h3>
                          {/* End h3 */}
                          {/* Close */}
                          <div className="tab__close"><a onClick={() => openDesktopTab(0)}><i className="lnil lnil-close" /></a></div>
                          {/* End close */}
                        </div>  
                        {/* End heading */}
                        {/* Description */}
                        <div className="tab__description">
                          <h3 className="review__title">Customer’s Review (2)</h3>
                          {/* Review */}
                          <div className="review d-flex">
                            {/* Avatar */}
                            <div className="review__avatar">
                              <img alt="Image" data-sizes="auto" data-srcset="/images/default/avatar_1.jpg 1560w,
                            /images/default/avatar_1.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                            </div>
                            {/* End avatar */}
                            {/* Details */}
                            <div className="review__details">
                              {/* Title and rating */}
                              <div className="review__title-and-rating d-flex">
                                {/* Name */}
                                <div className="review__title">Quality product &amp; very comfortable!</div>
                                {/* End name */}
                                {/* Rating */}
                                <div className="review__rating">
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                </div>
                                {/* End rating */}
                              </div>
                              {/* End title and rating */}
                              {/* Content */}
                              <div className="review__content">Thanks to the precious advice of the store owner, I choose this wonderful product. I absolutely love it! Additionally, my order was sent very quickly. I'm a happy customer and I'll order again!</div>
                              {/* End content */}
                              {/* Meta */}
                              <div className="review__meta">
                                <span>andy robertson.</span>  on 25 April, 2022
                              </div>
                              {/* End meta */}
                            </div>
                            {/* End details */}
                          </div>
                          {/* End review */}
                          {/* Review */}
                          <div className="review d-flex">
                            {/* Avatar */}
                            <div className="review__avatar">
                              <img alt="Image" data-sizes="auto" data-srcset="/images/default/avatar_2.jpg 1560w,
                            /images/default/avatar_2.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                            </div>
                            {/* End avatar */}
                            {/* Details */}
                            <div className="review__details">
                              {/* Title and rating */}
                              <div className="review__title-and-rating d-flex align">
                                {/* Name */}
                                <div className="review__title">Awesome product</div>
                                {/* End name */}
                                {/* Rating */}
                                <div className="review__rating">
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                  <i className="lnir lnir-star-filled active" />
                                </div>
                                {/* End rating */}
                              </div>
                              {/* End title and rating */}
                              {/* Content */}
                              <div className="review__content">I love it &amp; certainly that i’ll buy it once again. Perfection experience!</div>
                              {/* End content */}
                              {/* Meta */}
                              <div className="review__meta">
                                <span>Alexander Arnold.</span>  on 25 April, 2022
                              </div>
                              {/* End meta */}
                            </div>
                            {/* End details */}
                          </div>
                          {/* End review */}
                          <h3>Add A Review</h3>
                          {/* Form */}
                          <form className="review__form">
                            {/* Required fields */}
                            <div className="form__required-fields">Your email address will not be published. Required fields are marked<span>*</span></div>
                            {/* End required fields */}
                            {/* Your rating */}
                            <div className="form__your-rating d-flex align-items-center">
                              <div className="your-rating__title">Your rating</div>
                              <div className="your-rating__content js-rating-content">
                                <i className="lnir lnir-star-filled js-rating" data-value={1} />
                                <i className="lnir lnir-star-filled js-rating" data-value={2} />
                                <i className="lnir lnir-star-filled js-rating" data-value={3} />
                                <i className="lnir lnir-star-filled js-rating" data-value={4} />
                                <i className="lnir lnir-star-filled js-rating" data-value={5} />
                                <div className="d-none">
                                  <input type="radio" name="rating" className="js-rating-input" defaultValue={1} />
                                  <input type="radio" name="rating" className="js-rating-input" defaultValue={2} />
                                  <input type="radio" name="rating" className="js-rating-input" defaultValue={3} />
                                  <input type="radio" name="rating" className="js-rating-input" defaultValue={4} />
                                  <input type="radio" name="rating" className="js-rating-input" defaultValue={5} />
                                </div>
                              </div>
                            </div>
                            {/* End your rating */}
                            {/* Form group */}
                            <div className="form-group">
                              <input type="text" name="subject" className="form-group__input" placeholder="Give your review a tittle " />
                            </div>
                            {/* End form group */}
                            {/* Form group */}
                            <div className="form-group">
                              <textarea placeholder="Write your review here" className="form-group__textarea" rows={3} defaultValue={""} />
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
                            {/* Form checkbox */}
                            <div className="form-checkbox">
                              <input type="checkbox" id="checkbox2" className="form-checkbox__input" />
                              <label className="form-checkbox__label" htmlFor="checkbox2">Save my name &amp; email in this browser for next time i comment</label>
                            </div>
                            {/* End form checkbox */}
                            {/* Action */}
                            <div className="form__action">
                              <button type="submit" className="second-button">Submit review</button>
                            </div>
                            {/* End action */}
                          </form>
                          {/* End form */}
                        </div>
                        {/* End description */}
                      </div>
                      {/* End tab content */}
                    </div>
                    {/* End tab reviews */}
                    {/* Tab ask a question */}
                    <div className={activeDesktopTab == 4 ? 'active tab' : 'tab'}>
                      <div className="tab__overlay" onClick={() => openDesktopTab(0)} />
                      {/* Tab content */}
                      <div className="tab__content">
                        {/* Heading */}
                        <div className="tab__heading d-flex align-items-center">
                          {/* H3 */}
                          <h3 className="tab__h3">Ask a question</h3>
                          {/* End h3 */}
                          {/* Close */}
                          <div className="tab__close"><a onClick={() => openDesktopTab(0)}><i className="lnil lnil-close" /></a></div>
                          {/* End close */}
                        </div>  
                        {/* End heading */}
                        {/* Description */}
                        <div className="tab__description">
                          {/* Form */}
                          <form className="contact-page__form">
                            {/* Form group */}
                            <div className="form-group">
                              <input type="text" name="subject" className="form-group__input" placeholder="Subject (optional)" />
                            </div>
                            {/* End form group */}
                            {/* Form group */}
                            <div className="form-group">
                              <textarea placeholder="Write your question here" className="form-group__textarea" rows={5} defaultValue={""} />
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
                              <button type="submit" className="second-button">Ask a question</button>
                            </div>
                            {/* End action */}
                          </form>
                          {/* End form */}
                        </div>
                        {/* End description */}
                      </div>
                      {/* End tab content */}
                    </div>
                    {/* End tab ask a question */}
                  </div>
                  {/* End product right */}
                </div>
                {/* End product main */}
              </div>
              {/* End container */}
            </div>
            {/* End product */}
            <CompleteYourOutfit />
            <RelatedProducts collection_id="all" />
          </React.Fragment>
        ) : (
          <div className="col-12"><div className="loading-spin text-center"><div className="loader"></div></div><br /><br /></div>
        )}
        <Footer />
      </div>
    </React.Fragment>
  )
}