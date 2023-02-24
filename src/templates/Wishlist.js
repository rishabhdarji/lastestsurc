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
      {/* Shopping cart */}
      <div className="wishlist">
        {/* Container */}
        <div className="container container--type-3">
          {/* Second container */}
          <div className="container">
            {/* Title */}
            <h1 className="wishlist__title">Wishlist</h1>
            {/* End title */}
            {/*- Table responsive */}
            <div className="table-responsive">
              {/* Table */}
              <table className="wishlist__table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {/* Wishlist product item */}
                  <tr>
                    <td>
                      <div className="wishlist__product">
                        <div className="wishlist-product__image">
                          <a href="product.html">
                            <img alt="Image" data-sizes="auto" data-srcset="/products/1/10a.jpg 400w,
                            /products/1/10a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                          </a>
                        </div>
                        <h3 className="wishlist-product__title"><a href="product.html">Slim fit modal cotton shirt</a></h3>
                      </div>
                    </td>
                    <td>
                      <div className="wishlist-product__price">
                        $56.99
                      </div>
                    </td>
                    <td>
                      <div className="wishlist-product__status wishlist-product__status--in-stock">
                        In Stock
                      </div>
                    </td>
                    <td>
                      <a href="#" className="sixth-button">Add to cart</a>
                    </td>
                    <td>
                      <div className="wishlist-product__delete">
                        <a href="#"><i className="lnil lnil-close" /></a>
                      </div>
                    </td>
                  </tr>
                  {/* End wishlist product item */}
                  {/* Wishlist product item */}
                  <tr>
                    <td>
                      <div className="wishlist__product">
                        <div className="wishlist-product__image">
                          <a href="product.html">
                            <img alt="Image" data-sizes="auto" data-srcset="/products/1/11a.jpg 400w,
                            /products/1/11a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                          </a>
                        </div>
                        <h3 className="wishlist-product__title"><a href="product.html">Suede sport shoes</a></h3>
                      </div>
                    </td>
                    <td>
                      <div className="wishlist-product__price">
                        $45.5
                      </div>
                    </td>
                    <td>
                      <div className="wishlist-product__status wishlist-product__status--stock-out">
                        Stock Out
                      </div>
                    </td>
                    <td>
                      <a href="#" className="sixth-button">Pre-order</a>
                    </td>
                    <td>
                      <div className="wishlist-product__delete">
                        <a href="#"><i className="lnil lnil-close" /></a>
                      </div>
                    </td>
                  </tr>
                  {/* End wishlist product item */}
                  {/* Wishlist product item */}
                  <tr>
                    <td>
                      <div className="wishlist__product">
                        <div className="wishlist-product__image">
                          <a href="product.html">
                            <img alt="Image" data-sizes="auto" data-srcset="/products/1/12a.jpg 400w,
                            /products/1/12a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                          </a>
                        </div>
                        <h3 className="wishlist-product__title"><a href="product.html">Pebbled crossbody belt bag</a></h3>
                      </div>
                    </td>
                    <td>
                      <div className="wishlist-product__price">
                        $72.99
                      </div>
                    </td>
                    <td>
                      <div className="wishlist-product__status wishlist-product__status--pre-order">
                        Pre-Order
                      </div>
                    </td>
                    <td>
                      <a href="#" className="sixth-button">Pre-order</a>
                    </td>
                    <td>
                      <div className="wishlist-product__delete">
                        <a href="#"><i className="lnil lnil-close" /></a>
                      </div>
                    </td>
                  </tr>
                  {/* End wishlist product item */}
                </tbody>
              </table>
              {/* End table */}
            </div>
            {/* End table responsive */}
          </div>
          {/* End second container */}
        </div>
        {/* End container */}
      </div>
      {/* End wishlist */}
      <Footer />
    </div>
  )
}