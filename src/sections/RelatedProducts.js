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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  return (
    <React.Fragment>
      {/* Our products */}
      <div className="related-products">
        {/* Container */}
        <div className="container container--type-3">
          {/* Title */}
          <h4 className="related-products__title">Related Products</h4>
          {/* End title */}
          <Slider {...settings}>
            {sectionProducts.slice(0, 8).map((product, i) => {
              return (
                <div key={product.id}>
                  <ProductCard
                    key={product.id}
                    {...product}
                  />
                </div>
              )
            })}
          </Slider>
        </div>
        {/* End container */}
      </div>
      {/* End our products */}
    </React.Fragment>
  )
}