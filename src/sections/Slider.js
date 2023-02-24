import React, { useEffect, useRef } from "react"
import { Link } from 'react-router-dom';
import 'lazysizes';
import Slider from "react-slick";

import slider1 from '../styles/header/slider1.webp'
import slider2 from '../styles/header/slider2.webp'
export default (props) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  };
  //var sliderimage=[""];
  const sliderRef = useRef();
  const next = () => {
    sliderRef.current.slickNext();
  }
  const prev = () => {
    sliderRef.current.slickPrev();
  }
  return (
    <div>
      {/* Slider */}
      <div className="full-width-slider">
        {/* Slider js */}
        <Slider ref={sliderRef} {...settings}>
          {/* Slider item */}
          <div className="full-width-slider__item js-slider-item" data-id={1}>
            {/* Image */}
            <div>
              <img alt="Image" data-sizes="auto" data-srcset={slider1} src={slider1} className="lazyload js-slider-item-image active" />
            </div>
            {/* End image */}
            {/* Current slider number */}
            <div >
              {/* <span className="current-slider">1</span> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="37.438" height="34.624" viewBox="0 0 37.438 34.624">
                <path id="Shape_2_copy" data-name="Shape 2 copy" className="cls-1" d="M109.534,903.679l0.678,0.734L73.466,938.322l-0.678-.735Z" transform="translate(-72.781 -903.688)" />
              </svg>
              {/* <span>2</span> */}
            </div>
            {/* End current slider number */}
            {/* Feature */}
            {/* <div className="full-width-slider__feature">best seller<br />items</div> */}
            {/* End feature */}
            {/* Slider content */}
            <div className="velassSlide velassSlide1598521054696-0 slick-slide centert" style={{height:'225px'}}>
              <div className="container captionWrap">
                <div className="velassCaptionContent text-center align-middle">
                  <div className="velassCaptionInner text-center ">
                    <h4 className="velassSubheading leftright-1" style={{color:'#ffffff'}}>
                      This is Surc
                    </h4>
                    <h3 className="velassHeadingSmall leftright-3" style={{color:'#ffffff'}}>
                      Good on you.<br></br> And for the Earth.<br></br>
                      <a className="btn btnVelaSlider leftright-5" href="/AllCollection" style={{borderColor:'#ffffff', backgroundColor:'#ffffff', color: '#e09878',padding: '10px'}}>
                        shop now
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
             </div>
            {/* End slider content */}
          </div>
          {/* End slider item */}
          {/* Slider item */}
          <div className="full-width-slider__item js-slider-item" data-id={2}>
            {/* Image */}
            <div>
              <img data-id={1} alt="Image" data-sizes="auto" data-srcset={slider2} src={slider2} className="lazyload js-slider-item-image active" />
            </div>
            {/* End image */}
            {/* Current slider number */}
            <div className="full-width-slider__current-slider">
              {/* <span className="current-slider">2</span> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="37.438" height="34.624" viewBox="0 0 37.438 34.624">
                <path id="Shape_2_copy" data-name="Shape 2 copy" className="cls-1" d="M109.534,903.679l0.678,0.734L73.466,938.322l-0.678-.735Z" transform="translate(-72.781 -903.688)" />
              </svg>
              {/* <span>2</span> */}
            </div>
            {/* End current slider number */}
            
            {/* Slider content */}
            <div className="velassSlide velassSlide1598521054696-0 slick-slide centert" style={{height:'225px'}}>
              <div className="container captionWrap">
                <div className="velassCaptionContent text-center align-middle">
                  <div className="velassCaptionInner text-center ">
                    <h4 className="velassSubheading leftright-1" style={{color:'#ffffff'}}>
                      This is Surc
                    </h4>
                    <h3 className="velassHeadingSmall leftright-3" style={{color:'#ffffff'}}>
                      Good on you. <br></br>And for the Earth.<br></br>
                      <a className="btn btnVelaSlider leftright-5" href="/AllCollection" style={{borderColor:'#ffffff', backgroundColor: '#ffffff', color: '#e09878',padding: '15px 35px'}}>
                        shop now
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* End slider content */}
          </div>
          {/* End slider item */}
         
        </Slider>
        {/* End slider js */}
      </div>
      {/* End slider */}
    </div>
  )
}