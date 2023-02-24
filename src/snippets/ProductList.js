import React from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <React.Fragment>
      {/* Product */}
      <div className="col-xl-6">
        <div className="product-list-item d-flex">
          {props.variants[0].compareAtPrice != null &&
            <div className="product-list-item__tag">Sale</div>
          }
          {/* Product images */}
          <div className="product-list-item__images">
            {/* Product image */}
            <div className="product-list-item__image active">
              <Link to={'/product/' + props.handle }>
                <img alt="Image" data-sizes="auto" data-srcset={props.images[0].src + ' 270w'} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
              </Link>
            </div>
            {/* End product image */}
            {/* Product action */}
            <div className="product-list-item__action">
              {/* D-flex */}
              <div className="d-flex align-items-center">
                {/* Quickview */}
                <div className="product-list-item__quickview">
                  <a href="#" className="open-tooltip"><span className="custom-tooltip">Quick view</span><i className="lnil lnil-full-screen" /></a>
                </div>
                {/* End quickview */}
                {/* Wishlist */}
                <div className="product-list-item__wishlist">
                  <a href="#" className="open-tooltip"><span className="custom-tooltip">Add to wishlist</span><i className="lnil lnil-heart" /></a>
                </div>
                {/* End wishlist */}
                {/* Compare */}
                <div className="product-list-item__compare">
                  <a href="#" className="open-tooltip"><span className="custom-tooltip">Add to compare</span><i className="lnil lnil-reload" /></a>
                </div>
                {/* End Compare */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End product action */}
          </div>
          {/* End product images */}
          {/* Product right */}
          <div className="product-list-item__right">
            {/* Product name */}
            <div className="product-list-item__name">
              <Link to={'/product/' + props.handle }>{props.title}</Link>
            </div>
            {/* End product name */}
            {/* Product price */}
            <div className="product-list-item__price">
              {props.variants[0].compareAtPrice != null ? (
                <React.Fragment>
                  <span className="product-grid-item__price-new">${props.variants[0].price}</span> <span className="product-grid-item__price-old">${props.variants[0].compareAtPrice}</span>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <span>${props.variants[0].price}</span>
                </React.Fragment>
              )}
            </div>
            {/* End product price */}
            {/* Description */}
            <div className="product-list-item__description">
              Casual line. Short design. 100% suede leather. Backstitched elbow patche
            </div>
            {/* End description */}
            {/* Add to cart */}
            <div className="product-list-item__add-to-cart">
              <a href="#" className="sixth-button">Add to cart</a>
            </div>
            {/* End add to cart */}
          </div>
          {/* End product right */}
        </div>
      </div>
      {/* End product */}
    </React.Fragment>
  )
}