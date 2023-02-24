import React from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      {/* Full Width banners */}
      <div className="full-width-banners">
        {/* Banner */}
        <div className="full-width-banner">
          {/* Image */}
          <div className="full-width-banner__image">
            <img alt="Image" data-sizes="auto" data-srcset="/images/full-width/banner-01.png 400w,
            /images/full-width/banner-01.png 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
          </div>
          {/* End image */}
          {/* Content */}
          <div className="full-width-banner__content">
            {/* Tag */}
            <div className="full-width-banner__tag">Winter sale</div>
            {/* End tag */}
            {/* Title */}
            <h2 className="full-width-banner__title"><span>30%</span> SALE OFF Sneakers</h2>
            {/* End title */}
            {/* Description */}
            <div className="full-width-banner__description">Discount 30% for all shoes &amp; sneakers. Limited time offer, dont’s miss out!</div>
            {/* End description */}
          </div>
          {/* End content */}
          {/* Action */}
          <div className="full-width-banner__action">
            <Link to="/collections/frontpage">Shop now</Link>
          </div>
          {/* End action */}
        </div>
        {/* End banner */}
        {/* Banner */}
        <div className="full-width-banner full-width-banner--small full-width-banner--white-text">
          {/* Image */}
          <div className="full-width-banner__image">
            <img alt="Image" data-sizes="auto" data-srcset="/images/full-width/banner-02.png 400w,
            /images/full-width/banner-02.png 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
          </div>
          {/* End image */}
          {/* Content */}
          <div className="full-width-banner__content">
            {/* Tag */}
            <div className="full-width-banner__tag">Trending</div>
            {/* End tag */}
            {/* Title */}
            <h2 className="full-width-banner__title">Braided Bracelet</h2>
            {/* End title */}
            {/* Description */}
            <div className="full-width-banner__description">The trending item necessary for stylish guys</div>
            {/* End description */}
          </div>
          {/* End content */}
          {/* Action */}
          <div className="full-width-banner__action">
            <Link to="/collections/frontpage">Shop now</Link>
          </div>
          {/* End action */}
        </div>
        {/* End banner */}
      </div>
      {/* End full width banners */}
    </div>
  )
}