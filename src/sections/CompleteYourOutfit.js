import React from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      {/* Complete Your Outfit */}
      <div className="complete-your-outfit">
        {/* Container */}
        <div className="container container--type-3">
          {/* Line 1 px */}
          <hr />
          {/* End line 1 px */}
          {/* Title */}
          <h3 className="complete-your-outfit__title">Complete Your Outfit</h3>
          {/* End title */}
          {/* Results */}
          <div className="search-popups__results-products d-flex">
            {/* Product */}
            <div className="result-product">
              {/* Image */}
              <div className="result-product__image">
                <a href="#">
                  <img alt="Image" data-sizes="auto" data-srcset="/products/1/13a.jpg 400w,
                /products/1/13a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </a>
              </div>
              {/* End image */}
              {/* Product name */}
              <div className="result-product__name"><a href="#">Double-breasted wool Tailored coat</a></div>
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
                <a href="#">
                  <img alt="Image" data-sizes="auto" data-srcset="/products/1/7_1-a.jpg 400w,
                /products/1/7_1-a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </a>
              </div>
              {/* End image */}
              {/* Product name */}
              <div className="result-product__name"><a href="#">Slim fit modal cotton shirt</a></div>
              {/* End product name */}
              {/* Product price */}
              <div className="result-product__price">$59.99</div>
              {/* End product price */}
            </div>
            {/* End product */}
          </div>
          {/* End results */}
        </div>
        {/* End container */}
      </div>
      {/* End Complete Your Outfit */}
    </div>
  )
}