import React, { useEffect } from 'react';
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { Link } from 'react-router-dom';
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
      <Header homepage="true" />
      {/* Not found page */}
      <div className="not-found-page">
        {/* Container */}
        <div className="container container--type-3">
          {/* Title */}
          <h1 className="not-found-page__title">404</h1>
          {/* End title */}
          {/* Description */}
          <div className="not-found-page__description">This page has been probably moved somewhere.</div>
          {/* End description */}
          {/* Action */}
          <div className="not-found-page__action">
            <Link to="/" className="fourth-button">Back to homepage</Link>
          </div> 
          {/* End action */}
        </div>
        {/* End Container */}
      </div>
      {/* End not found page */}
      <Footer />
    </React.Fragment>
  )
}