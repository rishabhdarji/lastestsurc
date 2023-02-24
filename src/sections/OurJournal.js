import React from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      {/* Our journal */}
      <div className="full-width-our-journal">
        {/* Container */}
        <div className="container container--type-3">
          {/* Title and action */}
          <div className="full-width-our-journal__title-and-action d-flex align-items-center">
            {/* Title */}
            <h3 className="full-width-our-journal__title">Our Journal</h3>
            {/* End title */}
            {/* Action */}
            <div className="full-width-our-journal__action">
              <Link to="/blogs/news">All articles <i className="lnil lnil-chevron-right" /></Link>
            </div>
            {/* End action */}
          </div>
          {/* End title and action */}
          {/* Row */}
          <div className="row">
            {/* Post */}
            <div className="col-lg-6 col-xl-4">
              <div className="full-width-post">
                <div className="full-width-post__image">
                  <img alt="Image" data-sizes="auto" data-srcset="/images/full-width/post-1.jpg 400w,
                  /images/full-width/post-1.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </div>
                <div className="full-width-post__content">
                  <div className="full-width-post__date">December 15, 2022</div>
                  <h3 className="full-width-post__title"><Link to="/blogs/news/article">How to choose a sneakers suit for any your style</Link></h3>
                  <div className="full-width-post__description">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nullam dignissim tortor  vitae mattis tempor surt ert loper loper ade lipo pusre etet me...</div>
                  <div className="full-width-post__continue-link"><Link to="/blogs/news/article">Continue</Link></div>
                </div>
              </div>
            </div> 
            {/* End post */}
            {/* Post */}
            <div className="col-lg-6 col-xl-4">
              <div className="full-width-post">
                <div className="full-width-post__image">
                  <img alt="Image" data-sizes="auto" data-srcset="/images/full-width/post-2.jpg 400w,
                  /images/full-width/post-2.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </div>
                <div className="full-width-post__content">
                  <div className="full-width-post__date">December 15, 2022</div>
                  <h3 className="full-width-post__title"><Link to="/blogs/news/article">Minimalist fashion style with basic items</Link></h3>
                  <div className="full-width-post__description">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nullam dignissim tortor  vitae mattis tempor surt ert loper loper ade lipo pusre etet me...</div>
                  <div className="full-width-post__continue-link"><Link to="/blogs/news/article">Continue</Link></div>
                </div>
              </div>
            </div> 
            {/* End post */}
            {/* Post */}
            <div className="col-lg-6 col-xl-4 d-lg-none d-xl-block">
              <div className="full-width-post">
                <div className="full-width-post__image">
                  <img alt="Image" data-sizes="auto" data-srcset="/images/full-width/post-3.jpg 400w,
                  /images/full-width/post-3.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </div>
                <div className="full-width-post__content">
                  <div className="full-width-post__date">December 15, 2022</div>
                  <h3 className="full-width-post__title"><Link to="/blogs/news/article">Hello summer, discover the new sunglasses in lookbook #82</Link></h3>
                  <div className="full-width-post__description">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nullam dignissim tortor  vitae mattis tempor surt ert loper loper ade lipo pusre etet me...</div>
                  <div className="full-width-post__continue-link"><Link to="/blogs/news/article">Continue</Link></div>
                </div>
              </div>
            </div> 
            {/* End post */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </div>
      {/* End our journal */}
    </div>
  )
}