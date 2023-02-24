import React from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      {/* Recently viewed */}
      <div className="recently-viewed">
        {/* Container */}
        <div className="container container--type-3">
          {/* Title */}
          <h3 className="recently-viewed__title">Recently Viewed</h3>
          {/* End title */}
          {/* Results */}
          <div className="search-popups__results-products d-flex">
            {/* Product */}
            <div className="result-product">
              {/* Image */}
              <div className="result-product__image">
                <a href="#">
                  <img alt="Image" data-sizes="auto" data-srcset="/products/1/2_1-a.jpg 400w,
                /products/1/2_1-a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
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
                  <img alt="Image" data-sizes="auto" data-srcset="/products/1/2_2-a.jpg 400w,
                /products/1/2_2-a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
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
            {/* Product */}
            <div className="result-product">
              {/* Image */}
              <div className="result-product__image">
                <a href="#">
                  <img alt="Image" data-sizes="auto" data-srcset="/products/1/2_3-a.jpg 400w,
                /products/1/2_3-a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </a>
              </div>
              {/* End image */}
              {/* Product name */}
              <div className="result-product__name"><a href="#">Wool/Cashmera basic cardigan</a></div>
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
                <a href="#">
                  <img alt="Image" data-sizes="auto" data-srcset="/products/1/2_4-a.jpg 400w,
                /products/1/2_4-a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </a>
              </div>
              {/* End image */}
              {/* Product name */}
              <div className="result-product__name"><a href="#">Regular fit striped cotton shirt</a></div>
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
                <a href="#">
                  <img alt="Image" data-sizes="auto" data-srcset="/products/1/3_1-a.jpg 400w,
                /products/1/3_1-a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </a>
              </div>
              {/* End image */}
              {/* Product name */}
              <div className="result-product__name"><a href="#">Slim fit modal cotton shity</a></div>
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
        </div>
        {/* End container */}
      </div>
      {/* End recently viewed */}
    </div>
  )
}