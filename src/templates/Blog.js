import React, { useEffect } from 'react';
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { useShopify } from "../hooks"

export default (props) => {
  const { closeCart, closeSearch, closeCanvasMenu } = useShopify()
  useEffect(() => {
    window.scrollTo(0, 0);
    closeCart();
    closeSearch();
    closeCanvasMenu();
  }, [])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <React.Fragment>
      <Header />
      {/* Blog page */}
      <div className="blog">
        {/* Container */}
        <div className="container container--type-3">
          {/* Title */}
          <h1 className="blog__title">Our Journal</h1>
          {/* End title */}
          {/* Description */}
          <div className="blog__description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</div>
          {/* End description */}
          {/* Featured articles */}
          <Slider className="blog__featured-articles" {...settings}>
            {/* Article */}
            <div className="featured-article">
              {/* Image */}
              <div className="featured-article__image">
                <Link to="/blogs/news/article">
                  <img alt="Image" data-sizes="auto" data-srcset="/images/default/blog_post.jpg 400w,
                  /images/default/blog_post.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </Link>
              </div>
              {/* End image */}
              {/* Details */}
              <div className="featured-article__details">
                {/* Container */}
                <div className="container">
                  {/* Meta */}
                  <ul className="featured-article__meta">
                    <li><Link to="/blogs/news/article">Inspiration</Link></li>
                    <li>Dec 24, 2022</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h3 className="featured-article__title">
                    <Link to="/blogs/news/article">Ready for the winter! Discover the new collections of Durotan</Link>
                  </h3>
                  {/* End title */}
                </div>
                {/* End container */}
              </div>  
              {/* End details */}
            </div>
            {/* End article */}
            {/* Article */}
            <div className="featured-article">
              {/* Image */}
              <div className="featured-article__image">
                <Link to="/blogs/news/article">
                  <img alt="Image" data-sizes="auto" data-srcset="/images/default/blog_post.jpg 400w,
                  /images/default/blog_post.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </Link>
              </div>
              {/* End image */}
              {/* Details */}
              <div className="featured-article__details">
                {/* Container */}
                <div className="container">
                  {/* Meta */}
                  <ul className="featured-article__meta">
                    <li><Link to="/blogs/news/article">Inspiration</Link></li>
                    <li>Dec 24, 2022</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h3 className="featured-article__title">
                    <Link to="/blogs/news/article">Second for the winter! Discover the new collections of Durotan</Link>
                  </h3>
                  {/* End title */}
                </div>
                {/* End container */}
              </div>  
              {/* End details */}
            </div>
            {/* End article */}
            {/* Article */}
            <div className="featured-article">
              {/* Image */}
              <div className="featured-article__image">
                <Link to="/blogs/news/article">
                  <img alt="Image" data-sizes="auto" data-srcset="/images/default/blog_post.jpg 400w,
                  /images/default/blog_post.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </Link>
              </div>
              {/* End image */}
              {/* Details */}
              <div className="featured-article__details">
                {/* Container */}
                <div className="container">
                  {/* Meta */}
                  <ul className="featured-article__meta">
                    <li><Link to="/blogs/news/article">Inspiration</Link></li>
                    <li>Dec 24, 2022</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h3 className="featured-article__title">
                    <Link to="/blogs/news/article">Third for the winter! Discover the new collections of Durotan</Link>
                  </h3>
                  {/* End title */}
                </div>
                {/* End container */}
              </div>  
              {/* End details */}
            </div>
            {/* End article */}
          </Slider>
          {/* End featured articles */}
          {/* Latest articles */}
          <div className="blog__latest-articles">
            {/* Container */}
            <div className="container">
              {/* Title */}
              <h4 className="latest-articles__title">Latest Articles</h4>
              {/* End title */}
              {/* Articles */}
              <Slider className="latest-articles" {...settings2}>
                {/* Post */}
                <div className="our-journal__post">
                  {/* Post image */}
                  <div className="our-journal__post-image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/default/post_1.jpg 400w,
                      /images/default/post_1.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End post image */}
                  {/* Post info */}
                  <div className="our-journal__post-info">
                    {/* Post date */}
                    <div className="our-journal__post-date">
                      <span>25</span>
                      December<br />
                      2022
                    </div>
                    {/* End post date */}
                    {/* Post details */}
                    <div className="our-journal__post-details">
                      {/* Post title */}
                      <h5 className="our-journal__post-title"><Link to="/blogs/news/article">How to choose a sneakers suit for any your style look impressive</Link></h5>
                      {/* End post title */}
                      {/* Post meta */}
                      <ul className="our-journal__post-meta">
                        <li><Link to="/blogs/news/article">Inspiration</Link></li>
                        <li>By Admin</li>
                      </ul>
                      {/* End post meta */}                
                    </div>
                    {/* End post details */}
                  </div>
                  {/* End post info */}
                </div>
                {/* End post */}
                {/* Post */}
                <div className="our-journal__post">
                  {/* Post image */}
                  <div className="our-journal__post-image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/default/post_2.jpg 400w,
                      /images/default/post_2.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End post image */}
                  {/* Post info */}
                  <div className="our-journal__post-info">
                    {/* Post date */}
                    <div className="our-journal__post-date">
                      <span>20</span>
                      December<br />
                      2022
                    </div>
                    {/* End post date */}
                    {/* Post details */}
                    <div className="our-journal__post-details">
                      {/* Post title */}
                      <h5 className="our-journal__post-title"><Link to="/blogs/news/article">Your checkout now faster at our store with Google Pay</Link></h5>
                      {/* End post title */}
                      {/* Post meta */}
                      <ul className="our-journal__post-meta">
                        <li><Link to="/blogs/news/article">Tips &amp; tricks</Link></li>
                        <li>By Logan Cee</li>
                      </ul>
                      {/* End post meta */}                
                    </div>
                    {/* End post details */}
                  </div>
                  {/* End post info */}
                </div>
                {/* End post */}
                {/* Post */}
                <div className="our-journal__post">
                  {/* Post image */}
                  <div className="our-journal__post-image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/default/post_1.jpg 400w,
                      /images/default/post_1.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End post image */}
                  {/* Post info */}
                  <div className="our-journal__post-info">
                    {/* Post date */}
                    <div className="our-journal__post-date">
                      <span>25</span>
                      December<br />
                      2022
                    </div>
                    {/* End post date */}
                    {/* Post details */}
                    <div className="our-journal__post-details">
                      {/* Post title */}
                      <h5 className="our-journal__post-title"><Link to="/blogs/news/article">How to choose a sneakers suit for any your style look impressive</Link></h5>
                      {/* End post title */}
                      {/* Post meta */}
                      <ul className="our-journal__post-meta">
                        <li><Link to="/blogs/news/article">Inspiration</Link></li>
                        <li>By Admin</li>
                      </ul>
                      {/* End post meta */}                
                    </div>
                    {/* End post details */}
                  </div>
                  {/* End post info */}
                </div>
                {/* End post */}
              </Slider>
              {/* End articles */}
              {/* Line 1 px */}
              <hr />
              {/* End line 1 px */}
            </div>
            {/* End container */}
          </div>
          {/* End latest articles */}
          {/* Container */}
          <div className="container">
            {/* Categories and search */}
            <div className="blog__categories-and-search">
              {/* Categories */}
              <ul className="blog__categories">
                <li><Link to="/blogs/news" className="active">All</Link></li>
                <li><Link to="/blogs/news/article">Inspiration</Link></li>
                <li><Link to="/blogs/news/article">Lookbook</Link></li>
                <li><Link to="/blogs/news/article">Tips &amp; tricks</Link></li>
                <li><Link to="/blogs/news/article">News</Link></li>
                <li><Link to="/blogs/news/article">Others</Link></li>
              </ul>
              {/* End categories */}
              {/* Search */}
              <div className="blog__search">
                <form>
                  <input type="text" className="blog-search__input" placeholder="Search in blog" />
                  <button type="submit" className="blog-search__button"><i className="lnil lnil-search-alt" /></button>
                </form>
              </div>
              {/* End search */}
            </div>
            {/* End Categories and search */}
            {/* Blog articles */}
            <div className="blog__articles row">
              {/* Article */}
              <div className="col-lg-4">
                <div className="blog-article">
                  {/* Image */}
                  <div className="blog-article__image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/default/article_1.jpg 1560w,
                      /images/default/article_1.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End image */}
                  {/* Meta */}
                  <ul className="blog-article__meta">
                    <li><Link to="/blogs/news/article">Inspiration</Link></li>
                    <li>Dec 24, 2022</li>
                    <li>By Admin</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h5 className="blog-article__title">
                    <Link to="/blogs/news/article">How to choose a sneakers suit for any your style</Link>
                  </h5>
                  {/* End Title */}
                </div>
              </div>
              {/* End article */}
              {/* Article */}
              <div className="col-lg-4">
                <div className="blog-article">
                  {/* Image */}
                  <div className="blog-article__image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/default/article_2.jpg 1560w,
                      /images/default/article_2.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End image */}
                  {/* Meta */}
                  <ul className="blog-article__meta">
                    <li><Link to="/blogs/news/article">Tips &amp; Tricks</Link></li>
                    <li>Dec 24, 2022</li>
                    <li>By Admin</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h5 className="blog-article__title">
                    <Link to="/blogs/news/article">How to mixed minimalist fashion style with basic items</Link>
                  </h5>
                  {/* End Title */}
                </div>
              </div>
              {/* End article */}
              {/* Article */}
              <div className="col-lg-4">
                <div className="blog-article">
                  {/* Image */}
                  <div className="blog-article__image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/default/article_3.jpg 1560w,
                      /images/default/article_3.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End image */}
                  {/* Meta */}
                  <ul className="blog-article__meta">
                    <li><Link to="/blogs/news/article">Lookbook</Link></li>
                    <li>Dec 24, 2022</li>
                    <li>By Admin</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h5 className="blog-article__title">
                    <Link to="/blogs/news/article">Hello summer, discover the new sunglasses in lookbook #82</Link>
                  </h5>
                  {/* End Title */}
                </div>
              </div>
              {/* End article */}
              {/* Article */}
              <div className="col-lg-4">
                <div className="blog-article">
                  {/* Image */}
                  <div className="blog-article__image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/default/article_4.jpg 1560w,
                      /images/default/article_4.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End image */}
                  {/* Meta */}
                  <ul className="blog-article__meta">
                    <li><Link to="/blogs/news/article">Inspiration</Link></li>
                    <li>Dec 24, 2022</li>
                    <li>By Admin</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h5 className="blog-article__title">
                    <Link to="/blogs/news/article">Ready for the winter! Discover the new collections of Durotan</Link>
                  </h5>
                  {/* End Title */}
                </div>
              </div>
              {/* End article */}
              {/* Article */}
              <div className="col-lg-4">
                <div className="blog-article">
                  {/* Image */}
                  <div className="blog-article__image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/default/article_5.jpg 1560w,
                      /images/default/article_5.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End image */}
                  {/* Meta */}
                  <ul className="blog-article__meta">
                    <li><Link to="/blogs/news/article">Inspiration</Link></li>
                    <li>Dec 24, 2022</li>
                    <li>By Admin</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h5 className="blog-article__title">
                    <Link to="/blogs/news/article">Simple Men #5: Top items essential for any gentleman</Link>
                  </h5>
                  {/* End Title */}
                </div>
              </div>
              {/* End article */}
              {/* Article */}
              <div className="col-lg-4">
                <div className="blog-article">
                  {/* Image */}
                  <div className="blog-article__image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/default/article_6.jpg 1560w,
                      /images/default/article_6.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End image */}
                  {/* Meta */}
                  <ul className="blog-article__meta">
                    <li><Link to="/blogs/news/article">Inspiration</Link></li>
                    <li>Dec 24, 2022</li>
                    <li>By Admin</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h5 className="blog-article__title">
                    <Link to="/blogs/news/article">Irresistible Attraction</Link>
                  </h5>
                  {/* End Title */}
                </div>
              </div>
              {/* End article */}
              {/* Article */}
              <div className="col-lg-4">
                <div className="blog-article">
                  {/* Image */}
                  <div className="blog-article__image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/default/article_7.jpg 1560w,
                      /images/default/article_7.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End image */}
                  {/* Meta */}
                  <ul className="blog-article__meta">
                    <li><Link to="/blogs/news/article">Inspiration</Link></li>
                    <li>Dec 24, 2022</li>
                    <li>By Admin</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h5 className="blog-article__title">
                    <Link to="/blogs/news/article">Downtown</Link>
                  </h5>
                  {/* End Title */}
                </div>
              </div>
              {/* End article */}
              {/* Article */}
              <div className="col-lg-4">
                <div className="blog-article">
                  {/* Image */}
                  <div className="blog-article__image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/default/article_8.jpg 1560w,
                      /images/default/article_8.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End image */}
                  {/* Meta */}
                  <ul className="blog-article__meta">
                    <li><Link to="/blogs/news/article">Inspiration</Link></li>
                    <li>Dec 24, 2022</li>
                    <li>By Admin</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h5 className="blog-article__title">
                    <Link to="/blogs/news/article">For long day activities</Link>
                  </h5>
                  {/* End Title */}
                </div>
              </div>
              {/* End article */}
              {/* Article */}
              <div className="col-lg-4">
                <div className="blog-article">
                  {/* Image */}
                  <div className="blog-article__image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/default/article_9.jpg 1560w,
                      /images/default/article_9.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End image */}
                  {/* Meta */}
                  <ul className="blog-article__meta">
                    <li><Link to="/blogs/news/article">Inspiration</Link></li>
                    <li>Dec 24, 2022</li>
                    <li>By Admin</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h5 className="blog-article__title">
                    <Link to="/blogs/news/article">Jurgen Kloop - Fashion Designer leading the minimalist trend</Link>
                  </h5>
                  {/* End Title */}
                </div>
              </div>
              {/* End article */}
            </div>
            {/* End Blog articles */}
            {/* Load more */}
            <div className="blog__load-more">
              <a href="#" className="sixth-button">Load more (6)</a>
            </div>
            {/* End load more */}
          </div>
          {/* End container */}
        </div>
        {/* End container */}
      </div>
      {/* End Blog page */}
      <Footer />
    </React.Fragment>
  )
}