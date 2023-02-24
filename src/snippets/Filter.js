import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { useShopify } from "../hooks"

export default (props) => {
  const { filterStatus, closeFilter, openFilter } = useShopify()
  function hideFilter() {
    closeFilter();
  }
  function showFilter() {
    openFilter();
  }
  return (
    <React.Fragment>
      {/* Open mobile filter */}
      <div className="open-mobile-top-filter" onClick={(e) => showFilter()}>
        <i className="lnil lnil-control-panel" />
        <span>Show filters</span>
      </div>
      {/* End open mobile filter */}
      {/* Filter */}
      <div className={filterStatus == true ? 'top-filter is-active show': 'top-filter' }> 
        {/* Close background */}
        <div className="top-filter__close-background" onClick={(e) => hideFilter()} />
        {/* End close background */}
        {/* Background */}
        <div className="top-filter__background">
          {/* Close */}
          <div className="top-filter__close">
            <a onClick={(e) => hideFilter()}><i className="lnil lnil-close" /></a>
          </div>
          {/* End close -*/}
          {/* Row */}
          <div className="row">
            {/* Widget */}
            <div className="col-12 col-md-6 col-lg-25">
              <div className="top-filter__widget">
                {/* Title */}
                <h2 className="widget__title">Category</h2>
                {/* End title */}
                {/* Collections */}
                <ul className="widget__collections">
                  <li><a href="#">Coats</a></li>
                  <li><a href="#">Jackets</a></li>
                  <li><a href="#">Cardigans &amp; Sweaters</a></li>
                  <li><a href="#">Blazers</a></li>
                  <li><a href="#">Swearshirts</a></li>
                  <li><a href="#">Shirts</a></li>
                  <li><a href="#">T-Shirts</a></li>
                  <li><a href="#">Polos</a></li>
                  <li><a href="#">Jeans</a></li>
                  <li><a href="#">Underwear</a></li>
                </ul>
                {/* End collections */}
              </div>
            </div>
            {/* End widget */}
            {/* Widget */}
            <div className="col-12 col-md-6 col-lg-25">
              <div className="top-filter__widget">
                {/* Title */}
                <h2 className="widget__title">Materials</h2>
                {/* End title */}
                {/* Options */}
                <ul className="widget__checkbox-options">
                  {/* Material option */}
                  <li>
                    <label>
                      <input type="checkbox" name="materials" defaultChecked />
                      <span>Cotton</span>
                    </label>
                  </li>
                  {/* End material option */}
                  {/* Material option */}
                  <li>
                    <label>
                      <input type="checkbox" name="materials" />
                      <span>Down</span>
                    </label>
                  </li>
                  {/* End material option */}
                  {/* Material option */}
                  <li>
                    <label>
                      <input type="checkbox" name="materials" />
                      <span>Houndstooth</span>
                    </label>
                  </li>
                  {/* End material option */}
                  {/* Material option */}
                  <li>
                    <label>
                      <input type="checkbox" name="materials" />
                      <span>Leather</span>
                    </label>
                  </li>
                  {/* End material option */}
                  {/* Material option */}
                  <li>
                    <label>
                      <input type="checkbox" name="materials" />
                      <span>Nappa Leather</span>
                    </label>
                  </li>
                  {/* End material option */}
                  {/* Material option */}
                  <li>
                    <label>
                      <input type="checkbox" name="materials" />
                      <span>Suede</span>
                    </label>
                  </li>
                  {/* End material option */}
                  {/* Material option */}
                  <li>
                    <label>
                      <input type="checkbox" name="materials" />
                      <span>Wool</span>
                    </label>
                  </li>
                  {/* End material option */}
                </ul>
                {/* End options */}
              </div>
            </div>
            {/* End Widget */}
            {/* Widget */}
            <div className="col-12 col-md-6 col-lg-25">
              <div className="top-filter__widget">
                {/* Title */}
                <h2 className="widget__title">Colors</h2>
                {/* End title */}
                {/* Options */}
                <ul className="widget__checkbox-options">
                  {/* Color option */}
                  <li>
                    <label>
                      <input type="checkbox" name="colors" defaultChecked />
                      <span>Black</span>
                    </label>
                  </li>
                  {/* End color option */}
                  {/* Color option */}
                  <li>
                    <label>
                      <input type="checkbox" name="colors" />
                      <span>White</span>
                    </label>
                  </li>
                  {/* End color option */}
                  {/* Color option */}
                  <li>
                    <label>
                      <input type="checkbox" name="colors" />
                      <span>Red</span>
                    </label>
                  </li>
                  {/* End color option */}
                  {/* Color option */}
                  <li>
                    <label>
                      <input type="checkbox" name="colors" />
                      <span>Orange</span>
                    </label>
                  </li>
                  {/* End color option */}
                  {/* Color option */}
                  <li>
                    <label>
                      <input type="checkbox" name="colors" />
                      <span>Green</span>
                    </label>
                  </li>
                  {/* End color option */}
                  {/* Color option */}
                  <li>
                    <label>
                      <input type="checkbox" name="colors" />
                      <span>Pink</span>
                    </label>
                  </li>
                  {/* End color option */}
                  {/* Color option */}
                  <li>
                    <label>
                      <input type="checkbox" name="colors" />
                      <span>Brown</span>
                    </label>
                  </li>
                  {/* End color option */}
                  {/* Color option */}
                  <li>
                    <label>
                      <input type="checkbox" name="colors" />
                      <span>Grey</span>
                    </label>
                  </li>
                  {/* End color option */}
                  {/* Color option */}
                  <li>
                    <label>
                      <input type="checkbox" name="colors" />
                      <span>Beige</span>
                    </label>
                  </li>
                  {/* End color option */}
                </ul>
                {/* End options */}
              </div>
            </div>
            {/* End widget */}
            {/* Widget */}
            <div className="col-12 col-md-6 col-lg-25">
              <div className="top-filter__widget">
                {/* Title */}
                <h2 className="widget__title">Size</h2>
                {/* End title */}
                {/* Options */}
                <ul className="widget__checkbox-options">
                  {/* Size option */}
                  <li>
                    <label>
                      <input type="checkbox" name="size" defaultChecked />
                      <span>XS</span>
                    </label>
                  </li>
                  {/* End size option */}
                  {/* Size option */}
                  <li>
                    <label>
                      <input type="checkbox" name="size" />
                      <span>S</span>
                    </label>
                  </li>
                  {/* End size option */}
                  {/* Size option */}
                  <li>
                    <label>
                      <input type="checkbox" name="size" />
                      <span>M</span>
                    </label>
                  </li>
                  {/* End size option */}
                  {/* Size option */}
                  <li>
                    <label>
                      <input type="checkbox" name="size" />
                      <span>L</span>
                    </label>
                  </li>
                  {/* End size option */}
                  {/* Size option */}
                  <li>
                    <label>
                      <input type="checkbox" name="size" />
                      <span>XL</span>
                    </label>
                  </li>
                  {/* End size option */}
                  {/* Size option */}
                  <li>
                    <label>
                      <input type="checkbox" name="size" />
                      <span>XXL</span>
                    </label>
                  </li>
                  {/* End size option */}
                </ul>
                {/* End options */}
              </div>
            </div>
            {/* End widget */}
            {/* Price */}
            <div className="col-12 col-md-6 col-lg-25">
              {/* Widget */}
              <div className="top-filter__widget">
                {/* Widget title */}
                <h2 className="widget__title">Price</h2>
                {/* End widget title */}
                {/* Options */}
                <ul className="widget__checkbox-options">
                  {/* Size option */}
                  <li>
                    <label>
                      <input type="checkbox" name="price" defaultChecked />
                      <span>$0 - $99</span>
                    </label>
                  </li>
                  {/* End size option */}
                  {/* Size option */}
                  <li>
                    <label>
                      <input type="checkbox" name="price" />
                      <span>$100 - $199</span>
                    </label>
                  </li>
                  {/* End size option */}
                  {/* Size option */}
                  <li>
                    <label>
                      <input type="checkbox" name="price" />
                      <span>$200 - $299</span>
                    </label>
                  </li>
                  {/* End size option */}
                </ul>
                {/* End options */}
              </div>
              {/* End widget */}
            </div>
            {/* End price */}
          </div>
          {/* End row */}
        </div>
        {/* End background */}
      </div>
      {/* End filter */}
    </React.Fragment>
  )
}