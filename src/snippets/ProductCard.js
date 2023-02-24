import React, { useRef } from "react"
import { Link } from 'react-router-dom';
import Slider from "react-slick";

export default (props) => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  };

  const sliderRef = useRef();
  const next = () => {
    sliderRef.current.slickNext();
  }
  const prev = () => {
    sliderRef.current.slickPrev();
  }
  return (

    <Slider ref={sliderRef} {...settings}>
    <div>
      {/* Product */}
      <div className="product-grid-item">
        {props.variants[0].compareAtPrice != null &&
          <div className="product-grid-item__tag">Sale</div>
        }
        {/* Product images */}
        <div className="product-grid-item__images">
          {/* Product image */}
          <div className="product-grid-item__image active">
            <Link to={'/product/' + props.handle }>
              <img alt="Image" data-sizes="auto" data-srcset={props.images[0].src + ' 270w'} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
            </Link>
          </div>
          {/* End product image */}
        </div>
        {/* End product images */}
        {/* Product action */}
        <div className="product-grid-item__action">
          {/* D-flex */}
          <div className="d-flex align-items-center">
            {/* Add to cart */}
            <div className="product-grid-item__add-to-cart">
              <a href="#">Add to cart</a>
            </div>
            {/* End add to cart */}
            {/* Quickview */}
            <div className="product-grid-item__quickview">
              <a href="#" className="open-tooltip"><span className="custom-tooltip">Quick view</span><i className="lnil lnil-full-screen" /></a>
            </div>
            {/* End quickview */}
            {/* Wishlist */}
            <div className="product-grid-item__wishlist">
              <a href="#" className="open-tooltip"><span className="custom-tooltip">Add to wishlist</span><i className="lnil lnil-heart" /></a>
            </div>
            {/* End wishlist */}
            {/* Compare */}
            <div className="product-grid-item__compare">
              <a href="#" className="open-tooltip"><span className="custom-tooltip">Add to compare</span><i className="lnil lnil-reload" /></a>
            </div>
            {/* End Compare */}
          </div>
          {/* End d-flex */}
        </div>
        {/* End product action */}
        {/* Product name */}
        <div className="product-grid-item__name">
          <Link to={'/product/' + props.handle }>{props.title}</Link>
        </div>
        {/* End product name */}
        {/* Product price */}
        <div className="product-grid-item__price">
          {/* {console.log(props.variants[0])} */}
          {props.variants[0].compareAtPrice != null ? (
            <React.Fragment>
              <span className="product-grid-item__price-new">${props.variants[0].price.amount}</span> <span className="product-grid-item__price-old">${props.variants[0].compareAtPrice.amount}</span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span>${props.variants[0].price.amount}</span>
            </React.Fragment>
          )}
        </div>
        {/* End product price */}
      </div>
      {/* End Product */}
    </div>
    </Slider>
  )
}