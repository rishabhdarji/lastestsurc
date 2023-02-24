import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { useShopify } from "../hooks"
import 'lazysizes';
import ProductCard from "../snippets/ProductCard";
import Slider from "react-slick";

export default (props) => {
  const [sectionProducts, setSectionProducts] = useState([])
  const { fetchCollectionProducts } = useShopify()
  const id = props.collection_id
  useEffect(() => {
    fetchCollectionProducts(id).then((res) => {
      setSectionProducts(res)
    })
  }, [id])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 3
        }
      },
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
      {/* Product tabs */}
      <div className="product-tabs">
        {/* Container */}
        <div className="container container--type-3">
          {/* Tabs and action */}
          <div  style={{
              padding: '0 0 10px',
    margin: 0,
    position: 'relative',
    fontSize: '26px',
    lineHeight: '32px',
    fontWeight: 700,
    color: '#222',
    fontFamily: "Raleway",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
            }}>
            {/* Tabs */}
            {/* <ul className="product-tabs__tabs">
              <li><Link to="/collections/frontpage" className="active">Editor’s Pick</Link></li>
              <li><Link to="/collections/frontpage">New In</Link></li>
              <li><Link to="/collections/frontpage">Trending</Link></li>
            </ul>
        
            <div className="product-tabs__action">
              <Link to="/collections/frontpage">See all product <i className="lnil lnil-chevron-right" /></Link>
            </div> */}
            <p
          
            >NO FUSS STYLES</p>
            {/* End action */}
          </div>
          {/* End Tabs and action */}
          {/* Products row */}
          <div className="row products-row products-row--type-2">
            {sectionProducts.slice(0, 10).map((product, i) => {
              return (
                <div className="col-6 col-md-4 col-xl-3 col-xxl-25" key={product.id}>
                  <ProductCard
                    key={product.id}
                    {...product}
                  />
                </div>
              )
            })}
          </div>
          {/* End Products row */}
        </div>
        {/* End container */}
      </div>
      {/* End product tabs */}
      {/* Line 1 px */}
      <div className="container container--type-3">
        <hr />
      </div>
      {/* End line 1 px */}
    </React.Fragment>
  )
}