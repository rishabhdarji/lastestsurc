import React, { useEffect, useState } from "react"
import Header from "../sections/Header"
import Footer from "../sections/Footer"
import { useShopify } from "../hooks"
import ProductCard from "../snippets/ProductCard";
import ProductList from "../snippets/ProductList";
import Filter from "../snippets/Filter";
import { Link } from 'react-router-dom';

export default (props) => {
  const { collections, fetchCollectionProducts, closeCart, closeSearch, closeCanvasMenu, closeFilter, openFilter, filterStatus } = useShopify()
  const id = props.match.params.collectionId
  
  const [collectionProducts, setCollectionProducts] = useState(false)
  const [loader, setLoader] = useState(false)
  const [productsView, setProductsView] = useState('grid');

  function handleView(view) {
    localStorage.setItem("productsView", view);
    setProductsView(view);
  }

  function handleFilter() {
    if(filterStatus == true) {
      closeFilter();
    } else {
      openFilter();
    }
  } 

  useEffect(() => {
    setCollectionProducts(false);

    if(localStorage.getItem('productsView') === 'list') {
      setProductsView('list')
    } else {
      setProductsView('grid')
    }
    
    if(loader == false) {
      window.scrollTo(0, 0);
    }

    closeCart();
    closeSearch();
    closeCanvasMenu();

    setLoader(false)
    fetchCollectionProducts(id).then((res) => {
      setLoader(true);
      setCollectionProducts(res);
    })
  }, [id])

  return (
    <div>
      <Header />
        {/* Shop breadcrumb */}
        <div className="shop-breadcrumb">
          {/* Container */}
          <div className="container container--type-3">
            {/* Breadcrumb */}
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb__item"><Link to="/" title="Home">Home</Link></li>
              <li className="breadcrumb__item active" aria-current="page">Shop</li>
            </ol>
            {/* End breadcrumb */}
            {/* Title */}
            {id == 'all' ? (
              <h1 className="shop-breadcrumb__title">Shop</h1>
            ) : (
              <React.Fragment>
                {collections.map((collection, i) => {
                  if(collection.handle == id) {
                    return (
                      <h1 key={i} className="shop-breadcrumb__title">{collection.title.replace('Home page', 'Shop')}</h1>
                    )
                  }
                })}
              </React.Fragment>
            )}
            {/* End Title */}
          </div>
          {/* End container */}
        </div>
        {/* End shop breadcrumb */}
        {/* Collection */}
        <div className="collection">
          {/* Container */}
          <div className="container container--type-3">
            {/* Top filter */}
            <div className="collection__top-filter clearfix">
              {/* Open Filter Button */}
              <div className="top-filter__button" onClick={() => handleFilter() }><i className="lnil lnil-control-panel" /> Filter</div>
              {/* End Open Filter Button */}
              {/* Current tags */}
              <ul className="top-filter__current-tags">
                <li><a href="#">Brown</a></li>
                <li><a href="#">XXL</a></li>
                <li><a href="#">From 100$</a></li>
              </ul>
              {/* End Current tags */}
              {/* Sort and view */}
              <div className="collection__sort-and-view d-flex align-items-center">
                {/* Sort by */}  
                <div className="products-sort-by d-flex align-items-center">
                  <label htmlFor="sort-by">Sort by</label>
                  <div className="products-sort-by__select">
                    <i className="lnil lnil-chevron-down" />
                    <select id="sort-by">
                      <option>Popularity</option>
                      <option>Featured</option>
                      <option>Price</option>
                      <option>Default</option>
                    </select>
                  </div>
                </div>
                {/* End sort by */}
                {/* View */}
                <ul className="products-view d-flex align-items-center">
                  <li><a href="#" className={productsView == 'list' ? 'open-tooltip' : 'active open-tooltip'} onClick={() => handleView('grid')}><span className="custom-tooltip">Grid large</span><i className="lnil lnil-grid-alt" /></a></li>
                  <li><a href="#" className={productsView == 'grid' ? 'open-tooltip' : 'active open-tooltip'} onClick={() => handleView('list')}><span className="custom-tooltip">List default</span><i className="lnil lnil-list-alt-1" /></a></li>
                </ul>
                {/* End view */}
              </div>
              {/* End sort and view */}
              {/* Founded products */}
              <div className="collection__founded-products">
                <span>{collectionProducts.length}</span> Products found
              </div>
              {/* End founded products */}
            </div>
            {/* End top filter */}
            <Filter />
            {/* Products row */}
            <div className="row products-row">
              {collectionProducts && collectionProducts.length > 0 ? (
                <React.Fragment>
                  {productsView == 'list' ? (
                    <React.Fragment>
                      {collectionProducts.map((product, i) => {
                        return (
                          <ProductList
                            key={product.id}
                            {...product}
                          />
                        )
                      })}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {collectionProducts.map((product, i) => {
                        return (
                          <div className="col-6 col-lg-4" key={product.id}>
                            <ProductCard
                              key={product.id}
                              {...product}
                            />
                          </div>
                        )
                      })}
                    </React.Fragment>
                  )}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {loader ? (
                    <div className="col-12">No products</div>
                  ) : (
                    <div className="col-12"><div className="loading-spin text-center"><div className="loader"></div></div></div>
                  )}
                </React.Fragment>
              )}
            </div>
            {/* End Products row */}
          </div>  
          {/* End container */}
        </div>
        {/* End collection */}
      <Footer />
    </div>
  )
}