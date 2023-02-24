import React from "react"
import { Link } from 'react-router-dom';
import { useShopify } from "../hooks"

export default (props) => {
  const { canvasMenuStatus, closeCanvasMenu } = useShopify()
  function hideCanvasMenu() {
    closeCanvasMenu();
  }
  return (
    <React.Fragment>
      {/* Canvas menu */}
      <div className={canvasMenuStatus == true ? 'canvas-menu active': 'canvas-menu' }>
        <div className="canvas-menu__overlay" onClick={(e) => hideCanvasMenu()} />
        {/* Content */}
        <div className="canvas-menu__content">
          {/* Close */}
          <div className="canvas-menu__close"><a onClick={(e) => hideCanvasMenu()}><i className="lnil lnil-close" /><span>Close</span></a></div>
          {/* End close */}
          {/* Switchers */}
          <div className="canvas-menu__switchers">
            {/* Switcher */}
            <div className="canvas-menu__switcher">
              <i className="lnil lnil-chevron-down" />
              <select>
                <option>$ USD</option>
                <option>EUR</option>
                <option>CAD</option>
              </select>
            </div>
            {/* End switcher */}
            {/* Switcher */}
            <div className="canvas-menu__switcher">
              <i className="lnil lnil-chevron-down" />
              <select>
                <option>ENG</option>
                <option>POL</option>
              </select>
            </div>
            {/* End switcher */}
          </div>
          {/* End switchers */}
          {/* Navigation */}
          <ul className="canvas-menu__nav">
            <li>
              <Link to="/home" className="canvas-nav__item">Home</Link>
              {/* MegaMenu */}
              <div className="nav__mega-menu">
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Styles</div>
                  {/* End column title */}
                  {/* Column nav */}
                  <ul className="standard-column__nav">
                    <li><Link to="/home">Default</Link></li>
                    <li><Link to="/home">Full Width</Link></li>
                    <li><Link to="/home">Modern</Link></li>
                    <li><Link to="/home">Collections <span className="canvas-nav__item-tag canvas-nav__item-tag--hot">hot</span></Link></li>
                    <li><Link to="/home">Dark Skin</Link></li>
                    <li><Link to="/home">Classic <span className="canvas-nav__item-tag canvas-nav__item-tag--hot">hot</span></Link></li>
                    <li><Link to="/home">Best Selling <span className="canvas-nav__item-tag canvas-nav__item-tag--hot">hot</span></Link></li>
                    <li><Link to="/home">Sidebar</Link></li>
                    <li><Link to="/home">Minimal</Link></li>
                    <li><Link to="/home">Shoppable</Link></li>
                  </ul>
                  {/* End column nav */}
                </div>
                {/* End column */}
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Topic</div>
                  {/* End column title */}
                  {/* Column nav */}
                  <ul className="standard-column__nav">
                    <li><Link to="/home">Furniture 1</Link></li>
                    <li><Link to="/home">Furniture 2 </Link></li>
                    <li><Link to="/home">Decoration <span className="canvas-nav__item-tag canvas-nav__item-tag--new">new</span></Link></li>
                    <li><Link to="/home">Cosmetic <span className="canvas-nav__item-tag canvas-nav__item-tag--new">new</span></Link></li>
                    <li><Link to="/home">Jewellry <span className="canvas-nav__item-tag canvas-nav__item-tag--new">new</span></Link></li>
                    <li><Link to="/home">Bags</Link></li>
                    <li><Link to="/home">Shoes</Link></li>
                    <li><Link to="/home">Gadgets</Link></li>
                    <li><Link to="/home">Plants</Link></li>
                    <li><Link to="/home">Perfume</Link></li>
                    <li><Link to="/home">Single Product</Link></li>
                    <li><Link to="/home">Wine</Link></li>
                    <li><Link to="/home">Bakery</Link></li>     
                  </ul>
                  {/* End column nav */}
                </div>
                {/* End column */}
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Brands</div>
                  {/* End column title */}
                  {/* Brands */}
                  <div className="menu-brands__items">
                    {/* Item */}
                    <div className="menu-brand-item">
                      <Link to="/collections/frontpage">
                        <img alt="Image" src="/images/default/menu_brand_1.png" />
                      </Link>
                    </div>
                    {/* End item */}
                    {/* Item */}
                    <div className="menu-brand-item">
                      <Link to="/collections/frontpage">
                        <img alt="Image" src="/images/default/menu_brand_2.png" />
                      </Link>
                    </div>
                    {/* End item */}
                    {/* Item */}
                    <div className="menu-brand-item">
                      <Link to="/collections/frontpage">
                        <img alt="Image" src="/images/default/menu_brand_3.png" />
                      </Link>
                    </div>
                    {/* End item */}
                    {/* Item */}
                    <div className="menu-brand-item">
                      <Link to="/collections/frontpage">
                        <img alt="Image" src="/images/default/menu_brand_4.png" />
                      </Link>
                    </div>
                    {/* End item */}
                  </div>
                  {/* End brands */}
                </div>
                {/* End column */}
              </div>
              {/* End MegaMenu */}
            </li>
            <li>
              <Link to="/collections/frontpage" className="canvas-nav__item">Shop</Link>
              {/* MegaMenu */}
              <div className="nav__mega-menu">
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Shop</div>
                  {/* End column title */}
                  {/* Column nav */}
                  <ul className="standard-column__nav">
                    <li><Link to="/collections/frontpage">Grid 3 Column</Link></li>
                    <li><Link to="/collections/frontpage">Grid 4 Column <span className="canvas-nav__item-tag canvas-nav__item-tag--default">default</span></Link></li>
                    <li><Link to="/collections/frontpage">Listing</Link></li>
                    <li><Link to="/collections/frontpage">Collection</Link></li>
                    <li><Link to="/collections/frontpage">Metro</Link></li>
                    <li><Link to="/collections/frontpage">Categories <span className="canvas-nav__item-tag canvas-nav__item-tag--hot">hot</span></Link></li>
                    <li><Link to="/collections/frontpage">With Sidebar 1</Link></li>
                    <li><Link to="/collections/frontpage">With Sidebar 2</Link></li>
                    <li><Link to="/collections/frontpage">Instagram</Link></li>
                    <li><Link to="/collections/frontpage">Vertical Menu</Link></li>
                  </ul>
                  {/* End column nav */}
                </div>
                {/* End column */}
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Product layouts</div>
                  {/* End column title */}
                  {/* Column nav */}
                  <ul className="standard-column__nav">
                    <li><Link to="/product/simple-text-for-name-product">Default</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Sticky Info <span className="canvas-nav__item-tag canvas-nav__item-tag--hot">hot</span></Link></li>
                    <li><Link to="/product/simple-text-for-name-product">With Sidebar</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Color Background</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Vertical Menu</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Width 1170</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Sticky Info 2 <span className="canvas-nav__item-tag canvas-nav__item-tag--new">new</span></Link></li>         
                    <li><Link to="/product/simple-text-for-name-product">Sticky Info 3 <span className="canvas-nav__item-tag canvas-nav__item-tag--new">new</span></Link></li>         
                    <li><Link to="/product/simple-text-for-name-product">Grid Gallery (4 images) <span className="canvas-nav__item-tag canvas-nav__item-tag--new">new</span></Link></li>         
                    <li><Link to="/product/simple-text-for-name-product">Grid Gallery (5 images) <span className="canvas-nav__item-tag canvas-nav__item-tag--new">new</span></Link></li>         
                    <li><Link to="/product/simple-text-for-name-product">Sticky Tabs Accordion <span className="canvas-nav__item-tag canvas-nav__item-tag--new">new</span></Link></li>         
                  </ul>
                  {/* End column nav */}
                </div>
                {/* End column */}
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Product types</div>
                  {/* End column title */}
                  {/* Column nav */}
                  <ul className="standard-column__nav">
                    <li><Link to="/product/simple-text-for-name-product">Simple</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Various</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Colors Swatches</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Images Swatches</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Groupped</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Affiliate</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Featured Video</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Guarantee Safe Checkout</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Countdown Timer</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Pre-orders <span className="canvas-nav__item-tag canvas-nav__item-tag--hot">hot</span></Link></li>
                    <li><Link to="/product/simple-text-for-name-product">On Sale</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Out of Stock</Link></li>
                    <li><Link to="/product/simple-text-for-name-product">With Button Paypal <span className="canvas-nav__item-tag canvas-nav__item-tag--hot">hot</span></Link></li>
                    <li><Link to="/product/simple-text-for-name-product">Bundle</Link></li>
                  </ul>
                  {/* End column nav */}
                </div>
                {/* End column */}
              </div>
              {/* End MegaMenu */}
            </li>
            <li>
              <Link to="/product/simple-text-for-name-product" className="canvas-nav__item">Product</Link>
              {/* Dropdown menu */}
              <ul className="nav__dropdown-menu">
                <li><Link to="/product/simple-text-for-name-product">Product Layout 1 <span className="canvas-nav__item-tag canvas-nav__item-tag--default">default</span></Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Layout 2</Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Layout 3</Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Layout 4</Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Type 1</Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Type 2</Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Type 3</Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Type 4</Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Type 5</Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Type 6</Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Type 7</Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Type 8</Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Type 9 <span className="canvas-nav__item-tag canvas-nav__item-tag--hot">hot</span></Link></li>
                <li><Link to="/product/simple-text-for-name-product">Product Type 10 <span className="canvas-nav__item-tag canvas-nav__item-tag--new">new</span></Link></li>
              </ul>
              {/* End dropdown menu */}
            </li>
            <li>
              <Link to="/blogs/news" className="canvas-nav__item">Blog</Link>
              {/* Dropdown menu */}
              <ul className="nav__dropdown-menu">
                <li><Link to="/blogs/news">Blog full width</Link></li>
                <li><Link to="/blogs/news/article">Blog post</Link></li>
              </ul>
              {/* End dropdown menu */}
            </li>
            <li>
              <a href="#" className="canvas-nav__item">Pages</a>
              {/* Dropdown menu */}
              <ul className="nav__dropdown-menu">
                <li><Link to="/404">404 Page </Link></li>
                <li><Link to="/pages/about-us">About</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
                <li><Link to="/order-complete">Order complete</Link></li>
                <li><Link to="/pages/contact-us">Contact</Link></li>
                <li><Link to="/pages/wishlist">Wishlist</Link></li>
              </ul>
              {/* End dropdown menu */}
            </li>
          </ul>
          {/* End navigation */}
          {/* About and social */}
          <div className="canvas-menu__about-and-social">
            <span className="canvas-menu-about__heading">About</span>
            <div className="canvas-menu-about__description">The inspiration got from natural, color pastel &amp; activities the daily. </div>
            <ul className="canvas-menu__social">
              <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg></a></li>
              <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></a></li>
              <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a></li>
              <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg></a></li>
            </ul>
          </div>
          {/* End about and social */}
        </div>  
        {/* End content */}
      </div>
      {/* End canvas menu */}
    </React.Fragment>
  )
}