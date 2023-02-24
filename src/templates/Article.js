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
      <Header />
      {/* Post */}
      <div className="post">
        {/* Post heading */}
        <div className="post__heading">
          {/* Container */}
          <div className="container container--type-3">
            {/* Post meta */}
            <ul className="post__meta">
              <li><a href="#">Inspiration</a></li>
              <li>Dec 27, 2022</li>
            </ul>
            {/* End post meta */}
            {/* Post title */}
            <h1 className="post__title">Ready for the winter! Discover the new collections of Durotan</h1>
            {/* End post title */}
          </div>
          {/* End container */}
        </div>
        {/* End post heading */}
        {/* Post image */}
        <div className="post__image">
          {/* Container */}
          <div className="container container--type-3">
            <img alt="Image" data-sizes="auto" data-srcset="/images/default/blog_post.jpg 400w,
            /images/default/blog_post.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
          </div>
          {/* End container */}
        </div>
        {/* End post image */}
        {/* Post content */}
        <div className="post__content">
          {/* Container */}
          <div className="container container--type-3">
            {/* Post container */}
            <div className="post__container">
              <h5>To mark the first UK show of artist Henri Barande, graphic designer <strong>Artur Sulkowski</strong> and German studio Schultzschultz have created The Lodge Wooden</h5>
              <p>Today most people get on average 4 to 6 hours of exercise every day, and make sure that everything they put in their mouths is not filled with sugars or preservatives, but they pay no attention to their mental health, no vacations, not even the occasional long weekend. All of this for hopes of one day getting that big promotion.</p>
              <p>Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist. Located in the heart of Warwickshire.</p>
            </div>
            {/* End post container */}
          </div>
          {/* End container */}
        </div>
        {/* End post content */}
        {/* Post images */}
        <div className="post__images">
          {/* Container */}
          <div className="container container--type-3">
            {/* Container */}
            <div className="container">
              {/* Row */}
              <div className="row">
                <div className="col-12 col-md-6">
                  {/* Post image */}
                  <div className="post__image">
                    <img alt="Image" data-sizes="auto" data-srcset="/images/default/post_image_1.jpg 400w,
                    /images/default/post_image_1.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    <p className="image__info">Images by <span>@element5digital</span></p>
                  </div>
                  {/* End post image */}
                </div>
                <div className="col-12 col-md-6">
                  {/* Post image */}
                  <div className="post__image">
                    <img alt="Image" data-sizes="auto" data-srcset="/images/default/post_image_2.jpg 400w,
                    /images/default/post_image_2.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    <p className="image__info">Images by <span>@insideweather</span></p>
                  </div>
                  {/* End post image */}
                </div>
              </div>
              {/* End row */}
            </div>
            {/* End container */}
          </div>
          {/* End container */}
        </div>
        {/* End post images */}
        {/* Post content */}
        <div className="post__content">
          {/* Container */}
          <div className="container container--type-3">
            {/* Post container */}
            <div className="post__container">
              <p>The short answer is yes. According to Kross, when you think of yourself as another person, it allows you give yourself more objective, helpful feedback.</p>
            </div>
            {/* End post container */}
          </div>
          {/* End container */}
        </div>
        {/* End post content */}
        {/* Post content */}
        <div className="post__twitter">
          {/* Container */}
          <div className="container container--type-3">
            {/* Post container */}
            <div className="post__container">
              {/* Twitter quote */}
              <div className="twitter-quote">
                {/* Author */}
                <div className="twitter-quote__author">
                  {/* Avatar */}
                  <div className="twitter-author__avatar">
                    <img alt="Image" data-sizes="auto" data-srcset="/images/default/twitter_quote.jpg 400w,
                    /images/default/twitter_quote.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                  </div>
                  {/* End avatar */}
                  {/* Details */}
                  <div className="twitter-author__details">
                    <strong>Paoblo Dybala</strong>
                    <p>@dybala.juve  - 15 Dec, 2020</p>
                  </div>
                  {/* End details */}
                  {/* Icon */}
                  <div className="twitter-author__icon">
                    <i className="lnir lnir-twitter-original" />
                  </div>
                  {/* End icon */}
                </div>
                {/* End author */}
                {/* Content */}
                <div className="twitter-quote__content">
                  The team at <span>@durotan.store</span> is incredibly dedicated, knowledgeable, and helpful. The finished product was beautiful, and worth every penny. I would absolutely recommend Liarch Studio
                </div>
                {/* End content */}
              </div>
              {/* End twitter quote */}
            </div>
            {/* End post container */}
          </div>
          {/* End container */}
        </div>
        {/* End post content */}
        {/* Post content */}
        <div className="post__content">
          {/* Container */}
          <div className="container container--type-3">
            {/* Post container */}
            <div className="post__container">
              <h4>Defaulting to Mindfulness</h4>
              <p>Cray post-ironic plaid, Helvetica keffiyeh tousled Carles banjo before they sold out blog photo booth Marfa semiotics Truffaut. Mustache Schlitz next level blog Williamsburg, deep v typewriter tote bag Banksy +1 literally.</p>
              <ul>
                <li>Welsh novelist Sarah Waters sums it up eloquently</li>
                <li>In their classic book, Creativity in Business, based on a popular course they co-taught</li>
                <li>Novelist and screenwriter Steven Pressfield</li>
              </ul>
              <p>That immediately brought to mind one of <span>my fondest</span> memories, involving my daughter when she was just a toddler of one.</p>
            </div>
            {/* End post container */}
          </div>
          {/* End container */}
        </div>
        {/* End post content */}
        {/* Post tags and share */}
        <div className="post__tags-share">
          {/* Container */}
          <div className="container container--type-3">
            {/* Post container */}
            <div className="tags-share__container">
              {/* Tags and share */}
              <div className="tags-share">
                {/* Tags */}
                <ul className="post__tags">
                  <li><a href="#">shopify</a></li>
                  <li><a href="#">theme</a></li>
                  <li><a href="#">live editor</a></li>
                </ul>
                {/* End tags */}
                {/* Share */}
                <div className="post__share">
                  {/* Title */}
                  <div className="share__title">Share on</div>
                  {/* End title */}
                  {/* Options */}
                  <ul className="share__options">
                    <li><a href="https://twitter.com" target="_blank" className="share-option__twitter"><i className="lnir lnir-twitter-original" /></a></li>
                    <li><a href="https://facebook.com" target="_blank" className="share-option__facebook"><i className="lnir lnir-facebook-filled" /></a></li>
                    <li><a href="https://instagram.com" target="_blank" className="share-option__instagram"><i className="lnil lnil-Instagram" /></a></li>
                  </ul>
                  {/* End options */}
                </div>
                {/* End share */}
              </div>
              {/* End Tags and share */}
            </div>
            {/* End post container */}
          </div>
          {/* End container */}
        </div>
        {/* End post tags and share */}
        {/* Post author */}
        <div className="post__author">
          {/* Container */}
          <div className="container container--type-3">
            {/* Post container */}
            <div className="post-author__container">
              {/* Line 1 px */}
              <hr />
              {/* End line 1 px */}
              {/* Author */}
              <div className="post-author">
                {/* Avatar */}
                <div className="post-author__avatar">
                  <img alt="Image" data-sizes="auto" data-srcset="/images/default/post_author.jpg 400w,
                  /images/default/post_author.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </div>
                {/* End avatar */}
                {/* Details */}
                <div className="post-author__details">
                  {/* Name */}
                  <div className="post-author__name">Takumi Minamino</div>
                  {/* Name */}
                  {/* Position */}
                  <div className="post-author__position">Content Editor</div>
                  {/* End position */}
                  {/* Description */}
                  <div className="post-author__description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde.</div>
                  {/* End Description */}
                  {/* Social */}
                  <ul className="post-author__social">
                    <li><a href="https://twitter.com" target="_blank"><i className="lnil lnil-twitter" /></a></li>
                    <li><a href="https://facebook.com" target="_blank"><i className="lnil lnil-facebook" /></a></li>
                    <li><a href="https://instagram.com" target="_blank"><i className="lnil lnil-Instagram" /></a></li>
                  </ul>
                  {/* End social */}
                </div>
                {/* End details */}
              </div>
              {/* End author */}
            </div>
            {/* End post container */}
          </div>
          {/* End container */}
        </div>
        {/* End post author */}
        {/* Related posts */}
        <div className="related-posts">
          {/* Container */}
          <div className="container container--type-3">
            {/* Container */}
            <div className="related-posts__container">
              {/* Line 1 px */}
              <hr />
              {/* End line 1 px */}
              {/* Title */}
              <h4 className="related-posts__title">Related Posts</h4>
              {/* End title */}
              {/* Blog articles */}
              <div className="blog__articles blog__articles--type-2 row">
                {/* Article */}
                <div className="col-lg-6">
                  <div className="blog-article">
                    {/* Image */}
                    <div className="blog-article__image">
                      <a href="post.html">
                        <img alt="Image" data-sizes="auto" data-srcset="/images/default/article_1.jpg 1560w,
                        /images/default/article_1.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                      </a>
                    </div>
                    {/* End image */}
                    {/* Meta */}
                    <ul className="blog-article__meta">
                      <li><a href="#">Inspiration</a></li>
                      <li>Dec 24, 2022</li>
                      <li>By Admin</li>
                    </ul>
                    {/* End meta */}
                    {/* Title */}
                    <h5 className="blog-article__title">
                      <a href="post.html">How to choose a sneakers suit for any your style</a>
                    </h5>
                    {/* End Title */}
                  </div>
                </div>
                {/* End article */}
                {/* Article */}
                <div className="col-lg-6">
                  <div className="blog-article">
                    {/* Image */}
                    <div className="blog-article__image">
                      <a href="post.html">
                        <img alt="Image" data-sizes="auto" data-srcset="/images/default/article_2.jpg 1560w,
                        /images/default/article_2.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                      </a>
                    </div>
                    {/* End image */}
                    {/* Meta */}
                    <ul className="blog-article__meta">
                      <li><a href="#">Tips &amp; Tricks</a></li>
                      <li>Dec 24, 2022</li>
                      <li>By Admin</li>
                    </ul>
                    {/* End meta */}
                    {/* Title */}
                    <h5 className="blog-article__title">
                      <a href="post.html">How to mixed minimalist fashion style with basic items</a>
                    </h5>
                    {/* End Title */}
                  </div>
                </div>
                {/* End article */}
              </div>
              {/* End blog articles */}
            </div>
            {/* End container */}
          </div>
          {/* End Container */}
        </div>  
        {/* End related posts */}
        {/* Post comments */}
        <div className="post__comments">
          {/* Container */}
          <div className="container container--type-3">
            {/* Container */}
            <div className="post-comments__container">
              {/* Line 1 px */}
              <hr />
              {/* End line 1 px */}
              {/* Title */}
              <h4 className="post-comments__title">02 Comments</h4>
              {/* End title */}
              {/* Comment */}
              <div className="post-comment">
                {/* Avatar */}
                <div className="post-comment__avatar">
                  <img alt="Image" data-sizes="auto" data-srcset="/images/default/avatar_1.jpg 1560w,
                  /images/default/avatar_1.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </div>
                {/* End avatar */}
                {/* Details */}
                <div className="post-comment__details">
                  {/* Name and date */}
                  <div className="post-comment__name-and-date">
                    {/* Name */}
                    <div className="post-comment__name">Andy Robertson</div>
                    {/* End name */}
                    {/* Date */}
                    <div className="post-comment__date">on 25 April, 2022</div>
                    {/* End date */}
                  </div>
                  {/* End name and date */}
                  {/* Content */}
                  <div className="post-comment__content">Thanks to the precious advice of the store owner, I choose this wonderful product. I absolutely love it! Additionally, my order was sent very quickly. I'm a happy customer and I'll order again!</div>
                  {/* End content */}
                </div>
                {/* End details */}
              </div>
              {/* End comment */}
              {/* Comment */}
              <div className="post-comment">
                {/* Avatar */}
                <div className="post-comment__avatar">
                  <img alt="Image" data-sizes="auto" data-srcset="/images/default/avatar_2.jpg 1560w,
                  /images/default/avatar_2.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                </div>
                {/* End avatar */}
                {/* Details */}
                <div className="post-comment__details">
                  {/* Name and date */}
                  <div className="post-comment__name-and-date">
                    {/* Name */}
                    <div className="post-comment__name">Alexander Arnold</div>
                    {/* End name */}
                    {/* Date */}
                    <div className="post-comment__date">on 25 April, 2022</div>
                    {/* End date */}
                  </div>
                  {/* End name and date */}
                  {/* Content */}
                  <div className="post-comment__content">I love it &amp; certainly that i’ll buy it once again. Perfection experience!</div>
                  {/* End content */}
                </div>
                {/* End details */}
              </div>
              {/* End comment */}
            </div>
            {/* End container */}
          </div>
          {/* End container */}
        </div>
        {/* End post comments */}
        {/* Post comments */}
        <div className="post__leave-comment">
          {/* Container */}
          <div className="container container--type-3">
            {/* Container */}
            <div className="leave-comment__container">
              {/* Title */}
              <h4 className="leave-comment__title">Leave A Comment</h4>
              {/* End title */}
              {/* Form */}
              <form className="comments__form">
                {/* Required fields */}
                <div className="form__required-fields">Your email address will not be published. Required fields are marked<span>*</span></div>
                {/* End required fields */}
                {/* Form group */}
                <div className="form-group">
                  <textarea placeholder="Write your message here" className="form-group__textarea" rows={5} defaultValue={""} />
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
                  <button type="submit" className="second-button">Post comment</button>
                </div>
                {/* End action */}
              </form>
              {/* End form */}
            </div>
            {/* End container */}
          </div>
          {/* End Container */}
        </div>
        {/* End post comments */}
      </div>  
      {/* End post */}
      <Footer />
    </React.Fragment>
  )
}