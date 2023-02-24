
import React, { useEffect, useState } from 'react';
import { generatePath, useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
// import { Carousel } from 'react-responsive-carousel'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";
import { GrView } from "react-icons/gr";
import { useRef } from 'react';
import Slider from "react-slick";

const HomeProducts2 = () => {

    const [data,setData]=useState([])

    const history = useHistory();
    useEffect(()=>{
     
        fetch("http://surc.online/api/products") .then((result)=>{
            result.json().then((resp)=>{
               console.log("result",resp.data)

               setData(resp.data)
            })
        })
    },[])

    const handleProceed = (id) => {
        console.log("clicked")
        id && history.push(generatePath("/products/:id", { id }));
    }
    
var colorindex=0;
var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  };
  
  const sliderRef = useRef();
  const next = () => {
    sliderRef.current.slickNext();
  }
  const prev = () => {
    sliderRef.current.slickPrev();
  }

    return (
      
        <div id="shopify-section-16245544809a635f1b" className="shopify-section velaFramework"><div className="productListHome velaProducts" style={{backgroundColor: '#ffffff',padding:'50px 0'}}>
        <div className="container">
            <div className="sectionInner pbBlockGutter"><div className="headingGroup pb20">
                <h3 className="velaHomeTitle text-center">
                    <span>No Fuss Styles</span>
                </h3>
            </div>
            <div className="velaContent">
                <div className="proOwlCarousel owlCarouselPlay">
                    <div className="owl-carousel owl-loaded owl-drag" data-nav="true" data-autoplay="false" data-autoplaytimeout="10000" data-columnone="4" data-columntwo="3" data-columnthree="2" data-columnfour="2" data-columnfive="1">
                      
                    <Slider ref={sliderRef} {...settings}>
                      
                        <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1830px'}}>
                          


                        {data.map((name)=>
                            <div className="owl-item active" style={{width: '275px', marginRight: '30px'}}><div className="velaProBlock grid " data-price="1,600.00"  onClick={()=>handleProceed(name.id)}>
                            <div className="velaProBlockInner">
                                <div className="proHImage d-flex flexJustifyCenter">
                                    <a className="proFeaturedImage">
                                        <div className="wrap ">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_180x.jpg?v=1628248696 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_360x.jpg?v=1628248696 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_540x.jpg?v=1628248696 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_720x.jpg?v=1628248696 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_900x.jpg?v=1628248696 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1080x.jpg?v=1628248696 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1296x.jpg?v=1628248696 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1512x.jpg?v=1628248696 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1728x.jpg?v=1628248696 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1944x.jpg?v=1628248696 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2160x.jpg?v=1628248696 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2376x.jpg?v=1628248696 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2592x.jpg?v=1628248696 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2808x.jpg?v=1628248696 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_3024x.jpg?v=1628248696 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_4320x.jpg?v=1628248696 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_180x.jpg?v=1628248696 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_360x.jpg?v=1628248696 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_540x.jpg?v=1628248696 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_720x.jpg?v=1628248696 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_900x.jpg?v=1628248696 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1080x.jpg?v=1628248696 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1296x.jpg?v=1628248696 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1512x.jpg?v=1628248696 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1728x.jpg?v=1628248696 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1944x.jpg?v=1628248696 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2160x.jpg?v=1628248696 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2376x.jpg?v=1628248696 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2592x.jpg?v=1628248696 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2808x.jpg?v=1628248696 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_3024x.jpg?v=1628248696 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_4320x.jpg?v=1628248696 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                        <div className="hidden-sm hidden-xs proSwatch proImageSecond">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_180x.jpg?v=1628248696 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_360x.jpg?v=1628248696 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_540x.jpg?v=1628248696 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_720x.jpg?v=1628248696 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_900x.jpg?v=1628248696 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1080x.jpg?v=1628248696 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1296x.jpg?v=1628248696 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1512x.jpg?v=1628248696 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1728x.jpg?v=1628248696 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1944x.jpg?v=1628248696 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2160x.jpg?v=1628248696 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2376x.jpg?v=1628248696 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2592x.jpg?v=1628248696 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2808x.jpg?v=1628248696 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_3024x.jpg?v=1628248696 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_4320x.jpg?v=1628248696 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_180x.jpg?v=1628248696 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_360x.jpg?v=1628248696 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_540x.jpg?v=1628248696 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_720x.jpg?v=1628248696 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_900x.jpg?v=1628248696 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1080x.jpg?v=1628248696 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1296x.jpg?v=1628248696 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1512x.jpg?v=1628248696 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1728x.jpg?v=1628248696 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1944x.jpg?v=1628248696 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2160x.jpg?v=1628248696 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2376x.jpg?v=1628248696 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2592x.jpg?v=1628248696 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2808x.jpg?v=1628248696 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_3024x.jpg?v=1628248696 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_4320x.jpg?v=1628248696 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="productLable"></div><div className="proButton clearfix"><form action="/cart/add" method="post" enctype="multipart/form-data" className="formAddToCart">
                                        <input type="hidden" name="id" value="40047432368308" /><a className="btn btnProduct btnAddToCart" href="/products/apple-shorts" title="Select options">
                                            <span style={{ color :"white"}}><GrFormAdd/></span>
                                            <span style={{ color:"white"}}>Select options</span>
                                        </a></form>

                                        <div className="productQuickView">
                                            <a className="btn btnProduct btnProductQuickview" href="#velaQuickView" data-handle="apple-shorts" title="Quick view">
                                                <span><GrView size={20}/></span>
                                                
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="proContent text-center">
                                    <h5 className="proName">
                                      
                                    <a href="/products/apple-shorts">{name.name}</a>
                                    </h5>
                                    <div className="proPrice"><div className="priceProduct ">{name.price}</div>
                                    </div><div className="velaSwatchCus">

                                    { colorindex = name.super_attributes.findIndex(x => x.name ==="Color")}
                                        <ul className="velaSwatchProduct d-flex flexJustifyCenter">
                                        {name.super_attributes[colorindex].options.map((pcolor)=>
                                       

                                            <li>
                                                
                                                <label style={{ backgroundColor:pcolor.swatch_value  }}></label>
                                                  
                                               
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_large.jpg?v=1628248696"></a>
                                                </div>
                                            </li>
                                        )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div></div>

                        )}


                        {/* <div className="owl-item active" style={{width: '275px', marginRight: '30px'}}><div className="velaProBlock grid " data-price="1,200.00">
                            <div className="velaProBlockInner">
                                <div className="proHImage d-flex flexJustifyCenter">
                                    <a className="proFeaturedImage" href="/products/soho-crop">
                                        <div className="wrap ">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Grey" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_180x.jpg?v=1628676889 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_360x.jpg?v=1628676889 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_540x.jpg?v=1628676889 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_720x.jpg?v=1628676889 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_900x.jpg?v=1628676889 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_1080x.jpg?v=1628676889 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_1296x.jpg?v=1628676889 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_1512x.jpg?v=1628676889 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_1728x.jpg?v=1628676889 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_1944x.jpg?v=1628676889 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_2160x.jpg?v=1628676889 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_2376x.jpg?v=1628676889 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_2592x.jpg?v=1628676889 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_2808x.jpg?v=1628676889 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_3024x.jpg?v=1628676889 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_4320x.jpg?v=1628676889 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_180x.jpg?v=1628676889 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_360x.jpg?v=1628676889 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_540x.jpg?v=1628676889 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_720x.jpg?v=1628676889 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_900x.jpg?v=1628676889 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_1080x.jpg?v=1628676889 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_1296x.jpg?v=1628676889 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_1512x.jpg?v=1628676889 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_1728x.jpg?v=1628676889 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_1944x.jpg?v=1628676889 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_2160x.jpg?v=1628676889 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_2376x.jpg?v=1628676889 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_2592x.jpg?v=1628676889 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_2808x.jpg?v=1628676889 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_3024x.jpg?v=1628676889 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1iFKPkBCqzPEnRpJsrvy9Adon4wNUBWs1_23226589-178f-4eec-bf19-57a11a86c237_4320x.jpg?v=1628676889 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                        <div className="hidden-sm hidden-xs proSwatch proImageSecond">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_180x.jpg?v=1628676889 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_360x.jpg?v=1628676889 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_540x.jpg?v=1628676889 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_720x.jpg?v=1628676889 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_900x.jpg?v=1628676889 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_1080x.jpg?v=1628676889 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_1296x.jpg?v=1628676889 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_1512x.jpg?v=1628676889 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_1728x.jpg?v=1628676889 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_1944x.jpg?v=1628676889 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_2160x.jpg?v=1628676889 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_2376x.jpg?v=1628676889 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_2592x.jpg?v=1628676889 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_2808x.jpg?v=1628676889 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_3024x.jpg?v=1628676889 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_4320x.jpg?v=1628676889 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_180x.jpg?v=1628676889 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_360x.jpg?v=1628676889 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_540x.jpg?v=1628676889 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_720x.jpg?v=1628676889 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_900x.jpg?v=1628676889 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_1080x.jpg?v=1628676889 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_1296x.jpg?v=1628676889 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_1512x.jpg?v=1628676889 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_1728x.jpg?v=1628676889 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_1944x.jpg?v=1628676889 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_2160x.jpg?v=1628676889 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_2376x.jpg?v=1628676889 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_2592x.jpg?v=1628676889 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_2808x.jpg?v=1628676889 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_3024x.jpg?v=1628676889 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCHSgsiGwHG8FysGvgXjmmF7bFhHYEHm_7dbc98d5-1a96-4e7e-84d6-063bf04d9ba3_4320x.jpg?v=1628676889 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="productLable"></div><div className="proButton clearfix"><form action="/cart/add" method="post" enctype="multipart/form-data" className="formAddToCart">
                                        <input type="hidden" name="id" value="40047580086452" /><a className="btn btnProduct btnAddToCart" href="/products/soho-crop" title="Select options" >
                                            <span className="icon">+</span>
                                            <span className="select_options text">Select options</span>
                                        </a></form>

                                        <div className="productQuickView">
                                            <a className="btn btnProduct btnProductQuickview" href="#velaQuickView" data-handle="soho-crop" title="Quick view">
                                                <span className="icons icon-eye"></span>
                                                
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="proContent text-center"><h5 className="proName">
                                    <a href="/products/soho-crop">SOHO Crop</a>
                                </h5>
                                    <div className="proPrice"><div className="priceProduct ">Rs. 1,200.00</div>
                                    </div><div className="velaSwatchCus">


                                        <ul className="velaSwatchProduct d-flex flexJustifyCenter">

                                            <li>
                                                <label style={{backgroundColor: 'black', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/black.png?v=10736152548701150891)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/16Fk8O8jFEz2GUtnBf5j_cpIep4I-5AYX_e95cba67-d20d-4659-805d-579843d371f3_large.jpg?v=1628676889"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'blue', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/blue.png?v=4370264528961748208)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/16PnSwCINd7j48VnTMp8w_sc05A5PJoZW_c404f986-85cc-4b3e-a585-8aaadf143ff1_large.jpg?v=1628676877"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'orange', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/orange.png?v=5800035975846015292)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1wF52oJCbqiGPntbeUiiqauCKRu70Hdj9_19648d47-2fdb-466c-8a1f-ecff85a3a453_large.jpg?v=1628676877"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'grey', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/grey.png?v=15096911896772309806)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1vKvV-HKFGFH06NzvFm2SfGUE56vOxkJA_f28c6614-4423-429c-a6b7-c0ce91386f66_large.jpg?v=1628676877"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'olive', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/olive.png?v=5577226969490646114)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1GQpBxrPad2QQJzpVI3-cbPs9wlWl0M0F_a93f1c16-354a-4a01-88e8-e55df747702f_large.jpg?v=1624554175"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'pink', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/pink.png?v=333203006688677360)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1I8DPASDGESrSr7126BP2LBNvAeFwR9qT_f1e93532-a244-4963-9ed7-b9813c646506_large.jpg?v=1624554176"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: "teal",backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/teal.png?v=16261582877550399555)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Z5ijGzYtXZE7-zuOPq578o0T-tuEtp3b_2ccd2305-78b6-4bd6-b6c9-a181d53d0e03_large.jpg?v=1625745523"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'red', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/red.png?v=12203767675055985335)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/13YjzPDxgLo7bunW4DhY7-CNr4PTdf2Mp_3d347f60-bdc3-4418-9e78-4ab3d6120b29_large.jpg?v=1625745523"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'green', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/green.png?v=4662176204617959698)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1SZzt7q3Xs49vpZlPXSB9MlfT5zMqcdwt_51db8c3d-9732-4650-8945-21d225b63c6a_large.jpg?v=1625745523"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'white', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/white.png?v=3901641526066447585)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1xLAkt8jouep_fed9ckbKXfQQW-RvMKsL_02303607-bce0-456a-8195-50d933e0ad43_large.jpg?v=1624554176"></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div></div>
                            </div>
                        </div></div>
                        <div className="owl-item active" style={{width: '275px', marginRight: '30px'}}><div className="velaProBlock grid " data-price="1,600.00">
                            <div className="velaProBlockInner">
                                <div className="proHImage d-flex flexJustifyCenter">
                                    <a className="proFeaturedImage" href="/products/the-utility-crop-top">
                                        <div className="wrap ">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Blue" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_180x.jpg?v=1628676954 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_360x.jpg?v=1628676954 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_540x.jpg?v=1628676954 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_720x.jpg?v=1628676954 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_900x.jpg?v=1628676954 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_1080x.jpg?v=1628676954 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_1296x.jpg?v=1628676954 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_1512x.jpg?v=1628676954 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_1728x.jpg?v=1628676954 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_1944x.jpg?v=1628676954 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_2160x.jpg?v=1628676954 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_2376x.jpg?v=1628676954 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_2592x.jpg?v=1628676954 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_2808x.jpg?v=1628676954 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_3024x.jpg?v=1628676954 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_4320x.jpg?v=1628676954 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_180x.jpg?v=1628676954 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_360x.jpg?v=1628676954 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_540x.jpg?v=1628676954 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_720x.jpg?v=1628676954 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_900x.jpg?v=1628676954 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_1080x.jpg?v=1628676954 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_1296x.jpg?v=1628676954 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_1512x.jpg?v=1628676954 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_1728x.jpg?v=1628676954 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_1944x.jpg?v=1628676954 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_2160x.jpg?v=1628676954 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_2376x.jpg?v=1628676954 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_2592x.jpg?v=1628676954 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_2808x.jpg?v=1628676954 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_3024x.jpg?v=1628676954 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Jx69iV-2gumGluPp6tQaS6UAPQwF6T9a_25ec6585-bf5b-49e4-9ced-4f9ad3a24c7f_4320x.jpg?v=1628676954 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                        <div className="hidden-sm hidden-xs proSwatch proImageSecond">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_180x.jpg?v=1628676954 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_360x.jpg?v=1628676954 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_540x.jpg?v=1628676954 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_720x.jpg?v=1628676954 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_900x.jpg?v=1628676954 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_1080x.jpg?v=1628676954 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_1296x.jpg?v=1628676954 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_1512x.jpg?v=1628676954 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_1728x.jpg?v=1628676954 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_1944x.jpg?v=1628676954 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_2160x.jpg?v=1628676954 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_2376x.jpg?v=1628676954 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_2592x.jpg?v=1628676954 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_2808x.jpg?v=1628676954 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_3024x.jpg?v=1628676954 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_4320x.jpg?v=1628676954 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_180x.jpg?v=1628676954 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_360x.jpg?v=1628676954 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_540x.jpg?v=1628676954 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_720x.jpg?v=1628676954 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_900x.jpg?v=1628676954 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_1080x.jpg?v=1628676954 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_1296x.jpg?v=1628676954 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_1512x.jpg?v=1628676954 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_1728x.jpg?v=1628676954 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_1944x.jpg?v=1628676954 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_2160x.jpg?v=1628676954 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_2376x.jpg?v=1628676954 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_2592x.jpg?v=1628676954 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_2808x.jpg?v=1628676954 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_3024x.jpg?v=1628676954 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_4320x.jpg?v=1628676954 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="productLable"></div><div className="proButton clearfix"><form action="/cart/add" method="post" enctype="multipart/form-data" className="formAddToCart">
                                        <input type="hidden" name="id" value="40047500034228" /><a className="btn btnProduct btnAddToCart" href="/products/the-utility-crop-top" title="Select options">
                                            <span className="icon">+</span>
                                            <span className="select_options text">Select options</span>
                                        </a></form>

                                        <div className="productQuickView">
                                            <a className="btn btnProduct btnProductQuickview" href="#velaQuickView" data-handle="the-utility-crop-top" title="Quick view">
                                                <span className="icons icon-eye"></span>
                                                
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="proContent text-center"><h5 className="proName">
                                    <a href="/products/the-utility-crop-top">The Utility Crop Top</a>
                                </h5>
                                    <div className="proPrice">
                                        <div className="priceProduct ">Rs. 1,600.00</div>
                                    </div>
                                    <div className="velaSwatchCus">
                                        <ul className="velaSwatchProduct d-flex flexJustifyCenter">
                                            <li>
                                                <label style={{backgroundColor: 'black', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/black.png?v=10736152548701150891)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_large.jpg?v=1628676954"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'blue', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/blue.png?v=4370264528961748208)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1LO1yyCRMBj00vFzDvRi6eUCCY7L9E1NV_0c187126-1810-4604-b80d-7ba3c5c0a37f_large.jpg?v=1628676945"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'orange', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/orange.png?v=5800035975846015292)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Nbe9wSuzTC0cCyVmLKYGLXPPd5cFKrQH_8ee0af90-55e4-493b-86fd-314777ec6495_large.jpg?v=1624554497"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'grey', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/grey.png?v=15096911896772309806)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1sm3J2zjfGBRyGm1YTR3qYhHC4xyqm--4_d9835472-9c9c-4c74-89ee-7bf4786329ff_large.jpg?v=1624554497"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'olive', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/olive.png?v=5577226969490646114)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1l2hrEvh4Y_JV_YqwikUATzZnc7BvAn1P_1b7cf9ac-e05d-479a-bfff-7629bd83ef40_large.jpg?v=1624554497"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'pink', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/pink.png?v=333203006688677360)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_9a2Mg7-O-TfLHjIsVunoS-7gQr41NPp_46810ea9-d1cd-4104-b9b5-c37759fa9fff_large.jpg?v=1624554497"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: "teal",backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/teal.png?v=16261582877550399555)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1b0JyGJ0fdYefmNf-HgGsRNfSRhf6Q6wG_4c919217-2200-4c69-920d-7963ccc9c2ba_large.jpg?v=1625745908"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'red', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/red.png?v=12203767675055985335)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1um-j2yTeTxQsqsjA-On0SKyDP4Zubd8p_146c6145-cf6e-4776-8014-29171f2b3d1d_large.jpg?v=1625745908"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'green', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/green.png?v=4662176204617959698)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1pJ2y7X0ovE0BM5H3IjDfFv8SbiT2owan_a55db1b5-7faf-439e-9521-65dd4834f104_large.jpg?v=1625745908"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'white', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/white.png?v=3901641526066447585)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1q2cfjFCmc0Ee3zKmAqlT1orsbd0rsWJ9_faf2c873-4013-420a-bca2-107624ecf01f_large.jpg?v=1624554498"></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                        <div className="owl-item active" style={{width: '275px', marginRight: '30px'}}><div className="velaProBlock grid " data-price="1,200.00">
                            <div className="velaProBlockInner">
                                <div className="proHImage d-flex flexJustifyCenter">
                                    <a className="proFeaturedImage" href="/products/the-everyday-top">
                                        <div className="wrap ">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_180x.jpg?v=1624554379 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_360x.jpg?v=1624554379 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_540x.jpg?v=1624554379 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_720x.jpg?v=1624554379 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_900x.jpg?v=1624554379 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_1080x.jpg?v=1624554379 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_1296x.jpg?v=1624554379 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_1512x.jpg?v=1624554379 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_1728x.jpg?v=1624554379 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_1944x.jpg?v=1624554379 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_2160x.jpg?v=1624554379 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_2376x.jpg?v=1624554379 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_2592x.jpg?v=1624554379 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_2808x.jpg?v=1624554379 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_3024x.jpg?v=1624554379 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_4320x.jpg?v=1624554379 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_180x.jpg?v=1624554379 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_360x.jpg?v=1624554379 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_540x.jpg?v=1624554379 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_720x.jpg?v=1624554379 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_900x.jpg?v=1624554379 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_1080x.jpg?v=1624554379 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_1296x.jpg?v=1624554379 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_1512x.jpg?v=1624554379 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_1728x.jpg?v=1624554379 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_1944x.jpg?v=1624554379 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_2160x.jpg?v=1624554379 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_2376x.jpg?v=1624554379 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_2592x.jpg?v=1624554379 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_2808x.jpg?v=1624554379 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_3024x.jpg?v=1624554379 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_4320x.jpg?v=1624554379 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                        <div className="hidden-sm hidden-xs proSwatch proImageSecond">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_180x.jpg?v=1624554379 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_360x.jpg?v=1624554379 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_540x.jpg?v=1624554379 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_720x.jpg?v=1624554379 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_900x.jpg?v=1624554379 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_1080x.jpg?v=1624554379 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_1296x.jpg?v=1624554379 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_1512x.jpg?v=1624554379 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_1728x.jpg?v=1624554379 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_1944x.jpg?v=1624554379 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_2160x.jpg?v=1624554379 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_2376x.jpg?v=1624554379 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_2592x.jpg?v=1624554379 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_2808x.jpg?v=1624554379 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_3024x.jpg?v=1624554379 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_4320x.jpg?v=1624554379 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_180x.jpg?v=1624554379 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_360x.jpg?v=1624554379 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_540x.jpg?v=1624554379 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_720x.jpg?v=1624554379 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_900x.jpg?v=1624554379 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_1080x.jpg?v=1624554379 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_1296x.jpg?v=1624554379 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_1512x.jpg?v=1624554379 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_1728x.jpg?v=1624554379 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_1944x.jpg?v=1624554379 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_2160x.jpg?v=1624554379 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_2376x.jpg?v=1624554379 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_2592x.jpg?v=1624554379 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_2808x.jpg?v=1624554379 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_3024x.jpg?v=1624554379 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1jzF2c49TvDVMWI0EaueSHIYLMhC6wPDp_28ba249c-f5d0-4d29-93c6-a32e2600f5fb_4320x.jpg?v=1624554379 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="productLable"></div><div className="proButton clearfix"><form action="/cart/add" method="post" enctype="multipart/form-data" className="formAddToCart">
                                        <input type="hidden" name="id" value="40047485452468" /><a className="btn btnProduct btnAddToCart" href="/products/the-everyday-top" title="Select options">
                                            <span className="icon">+</span>
                                            <span className="select_options text">Select options</span>
                                        </a></form>

                                        <div className="productQuickView">
                                            <a className="btn btnProduct btnProductQuickview" href="#velaQuickView" data-handle="the-everyday-top" title="Quick view">
                                                <span className="icons icon-eye"></span>
                                                
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="proContent text-center"><h5 className="proName">
                                    <a href="/products/the-everyday-top">The Everyday Top</a>
                                </h5>
                                    <div className="proPrice"><div className="priceProduct ">Rs. 1,200.00</div>
                                    </div><div className="velaSwatchCus">


                                        <ul className="velaSwatchProduct d-flex flexJustifyCenter">

                                            <li>
                                                <label style={{backgroundColor: 'black', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/black.png?v=10736152548701150891)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/11LPePnThh7KwzNC65DtXvQya2qmkB19i_4acc5178-ed27-4f55-9113-c13a1df267a0_large.jpg?v=1624554379"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'blue', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/blue.png?v=4370264528961748208)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/19XMUtUYkKjBkF5jJY6y7jTZKeneo8suQ_173e5453-550b-4ac1-bddd-1f7de0d727b4_large.jpg?v=1624554379"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'orange', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/orange.png?v=5800035975846015292)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1D8iO-aLrB7QtUPhkE1AxojWcClOi9E6L_db56fbf1-e5b9-413c-ab63-a005bd4993d8_large.jpg?v=1624554379"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'grey', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/grey.png?v=15096911896772309806)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Zhj-xBxs_fHMXYPrlby_pzxyBsFZID1Q_cab36e42-e38d-4337-87ba-0a8258f55b46_large.jpg?v=1624554379"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'olive', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/olive.png?v=5577226969490646114)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Q8a0hEMj13ISZMG9sXOWnk_I3-JZBt6O_55072801-0a6b-4adb-a194-5d98036c45da_large.jpg?v=1624554380"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'pink', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/pink.png?v=333203006688677360)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1fgmm5KuP6v7IrNG4AW29jpQmsg4zN5pz_57af3d13-6ed6-4479-8cc0-ec568bec6384_large.jpg?v=1624554380"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: "teal",backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/teal.png?v=16261582877550399555)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/14fpk0FxiBAZK9lL8A3Ao1GF-3pwTVhx_2f519e88-ffba-4269-9872-5f2940583910_large.jpg?v=1625745735"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'red', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/red.png?v=12203767675055985335)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1cT0VvdRzSobp3XUC_OHidGgXjU2unbCe_8a59fe4b-3a8b-40f1-8662-15bb5e6e253d_large.jpg?v=1625745735"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'green', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/green.png?v=4662176204617959698)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/10kIrN1lAFlrHMDJEy0qK0pFEh1F5EbDu_630f78f7-01f9-40ec-939e-6ae1168918ab_large.jpg?v=1625745735"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'white', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/white.png?v=3901641526066447585)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1xx6qSEdUrBOt2IXghSl1JjZI_bEV80RX_be17295c-346c-485b-b16e-c73fa22159a3_large.jpg?v=1624554380"></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                        <div className="owl-item" style={{width: '275px', marginRight: '30px'}}><div className="velaProBlock grid " data-price="950.00">
                            <div className="velaProBlockInner">
                                <div className="proHImage d-flex flexJustifyCenter">
                                    <a className="proFeaturedImage" href="/products/going-out-top">
                                        <div className="wrap ">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_180x.jpg?v=1624556039 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_360x.jpg?v=1624556039 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_540x.jpg?v=1624556039 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_720x.jpg?v=1624556039 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_900x.jpg?v=1624556039 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_1080x.jpg?v=1624556039 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_1296x.jpg?v=1624556039 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_1512x.jpg?v=1624556039 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_1728x.jpg?v=1624556039 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_1944x.jpg?v=1624556039 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_2160x.jpg?v=1624556039 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_2376x.jpg?v=1624556039 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_2592x.jpg?v=1624556039 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_2808x.jpg?v=1624556039 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_3024x.jpg?v=1624556039 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_4320x.jpg?v=1624556039 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_180x.jpg?v=1624556039 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_360x.jpg?v=1624556039 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_540x.jpg?v=1624556039 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_720x.jpg?v=1624556039 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_900x.jpg?v=1624556039 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_1080x.jpg?v=1624556039 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_1296x.jpg?v=1624556039 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_1512x.jpg?v=1624556039 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_1728x.jpg?v=1624556039 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_1944x.jpg?v=1624556039 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_2160x.jpg?v=1624556039 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_2376x.jpg?v=1624556039 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_2592x.jpg?v=1624556039 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_2808x.jpg?v=1624556039 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_3024x.jpg?v=1624556039 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_4320x.jpg?v=1624556039 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                        <div className="hidden-sm hidden-xs proSwatch proImageSecond">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_180x.jpg?v=1624556039 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_360x.jpg?v=1624556039 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_540x.jpg?v=1624556039 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_720x.jpg?v=1624556039 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_900x.jpg?v=1624556039 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_1080x.jpg?v=1624556039 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_1296x.jpg?v=1624556039 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_1512x.jpg?v=1624556039 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_1728x.jpg?v=1624556039 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_1944x.jpg?v=1624556039 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_2160x.jpg?v=1624556039 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_2376x.jpg?v=1624556039 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_2592x.jpg?v=1624556039 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_2808x.jpg?v=1624556039 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_3024x.jpg?v=1624556039 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_4320x.jpg?v=1624556039 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_180x.jpg?v=1624556039 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_360x.jpg?v=1624556039 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_540x.jpg?v=1624556039 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_720x.jpg?v=1624556039 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_900x.jpg?v=1624556039 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_1080x.jpg?v=1624556039 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_1296x.jpg?v=1624556039 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_1512x.jpg?v=1624556039 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_1728x.jpg?v=1624556039 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_1944x.jpg?v=1624556039 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_2160x.jpg?v=1624556039 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_2376x.jpg?v=1624556039 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_2592x.jpg?v=1624556039 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_2808x.jpg?v=1624556039 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_3024x.jpg?v=1624556039 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1lLavo4zwTYOHG1-UCn7R-fKehb11RwN7_a8f33bf7-c61e-4af2-9a16-6b5666716da1_4320x.jpg?v=1624556039 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="productLable"></div><div className="proButton clearfix"><form action="/cart/add" method="post" enctype="multipart/form-data" className="formAddToCart">
                                        <input type="hidden" name="id" value="40047552430260"/><a className="btn btnProduct btnAddToCart" href="/products/going-out-top" title="Select options">
                                            <span className="icon">+</span>
                                            <span className="select_options text">Select options</span>
                                        </a></form>

                                        <div className="productQuickView">
                                            <a className="btn btnProduct btnProductQuickview" href="#velaQuickView" data-handle="going-out-top" title="Quick view">
                                                <span className="icons icon-eye"></span>
                                                
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="proContent text-center"><h5 className="proName">
                                    <a href="/products/going-out-top">Going out Top</a>
                                </h5>
                                    <div className="proPrice"><div className="priceProduct ">Rs. 950.00</div>
                                    </div>
                                    <div className="velaSwatchCus">
                                        <ul className="velaSwatchProduct d-flex flexJustifyCenter">

                                            <li>
                                                <label style={{backgroundColor: 'black', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/black.png?v=10736152548701150891)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/16UO2ff6pWY7Lg62PCHxweybRV1TlzNjs_0614ee48-4f88-41ff-bf67-396e12e8c16f_large.jpg?v=1624556039"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'blue', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/blue.png?v=4370264528961748208)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1WCF6vPH3D3aiPHs-hdk6aufUzdMNH5d_d6355ac8-9cf9-4f4a-b5c1-d6f843c4a9c3_large.jpg?v=1624556039"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'orange', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/orange.png?v=5800035975846015292)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/13xF0WcXyGaKgEeJGqovrhFJhD3ihU6Ed_9baf7821-f905-46eb-b1c0-aa019d8e294b_large.jpg?v=1624556039"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'grey', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/grey.png?v=15096911896772309806)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Vmfl4WJfmF3YfVRFX43hmFQ3w60A3kDd_de04a372-d2da-439a-894f-7b2afd0699d2_large.jpg?v=1624556039"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'olive', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/olive.png?v=5577226969490646114)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1OtltR5dTu_1sCPvoFpxt4yMA0ocODhnH_3bc1ef51-9709-4777-8216-d285f415fef4_large.jpg?v=1624556039"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'pink', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/pink.png?v=333203006688677360)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1bPRQJcP6N1M9bMif9WHeBrnTAQfbLYNM_7a5a5f5e-7d07-4a9a-8706-cbad5081c06b_large.jpg?v=1624556040"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: "teal",backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/teal.png?v=16261582877550399555)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1lsbuiDjv5FP4K3hoa1HFQIt1s76jYIGL_ebc3135c-a2b1-4de4-9c76-a0ae436cd952_large.jpg?v=1625745320"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'red', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/red.png?v=12203767675055985335)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1w0eCEPTxKD3MQ04X8Uv9U3tH2mtACP_1_6447b019-edda-487f-8764-6d2e28aa7b4e_large.jpg?v=1625745320"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'green', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/green.png?v=4662176204617959698)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1SqiIiveyKCwcJDJBsQsZUG_wp7KRY-Lz_5cb20e25-3aac-4f82-a831-4313e6fd0030_large.jpg?v=1625745320"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'white', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/white.png?v=3901641526066447585)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1osndi68QWM_wwGKHl4WGPfc_xVrKVcv_047ae994-4d72-4959-816f-91c42c11f396_large.jpg?v=1624556040"></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                        <div className="owl-item" style={{width: '275px', marginRight: '30px'}}><div className="velaProBlock grid  lastItem" data-price="2,500.00">
                            <div className="velaProBlockInner">
                                <div className="proHImage d-flex flexJustifyCenter">
                                    <a className="proFeaturedImage" href="/products/breezy-dress">
                                        <div className="wrap ">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Orange" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_180x.jpg?v=1628677075 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_360x.jpg?v=1628677075 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_540x.jpg?v=1628677075 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_720x.jpg?v=1628677075 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_900x.jpg?v=1628677075 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_1080x.jpg?v=1628677075 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_1296x.jpg?v=1628677075 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_1512x.jpg?v=1628677075 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_1728x.jpg?v=1628677075 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_1944x.jpg?v=1628677075 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_2160x.jpg?v=1628677075 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_2376x.jpg?v=1628677075 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_2592x.jpg?v=1628677075 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_2808x.jpg?v=1628677075 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_3024x.jpg?v=1628677075 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_4320x.jpg?v=1628677075 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_180x.jpg?v=1628677075 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_360x.jpg?v=1628677075 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_540x.jpg?v=1628677075 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_720x.jpg?v=1628677075 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_900x.jpg?v=1628677075 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_1080x.jpg?v=1628677075 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_1296x.jpg?v=1628677075 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_1512x.jpg?v=1628677075 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_1728x.jpg?v=1628677075 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_1944x.jpg?v=1628677075 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_2160x.jpg?v=1628677075 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_2376x.jpg?v=1628677075 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_2592x.jpg?v=1628677075 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_2808x.jpg?v=1628677075 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_3024x.jpg?v=1628677075 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_4320x.jpg?v=1628677075 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                        <div className="hidden-sm hidden-xs proSwatch proImageSecond">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_180x.jpg?v=1628677075 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_360x.jpg?v=1628677075 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_540x.jpg?v=1628677075 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_720x.jpg?v=1628677075 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_900x.jpg?v=1628677075 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_1080x.jpg?v=1628677075 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_1296x.jpg?v=1628677075 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_1512x.jpg?v=1628677075 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_1728x.jpg?v=1628677075 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_1944x.jpg?v=1628677075 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_2160x.jpg?v=1628677075 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_2376x.jpg?v=1628677075 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_2592x.jpg?v=1628677075 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_2808x.jpg?v=1628677075 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_3024x.jpg?v=1628677075 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_4320x.jpg?v=1628677075 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_180x.jpg?v=1628677075 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_360x.jpg?v=1628677075 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_540x.jpg?v=1628677075 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_720x.jpg?v=1628677075 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_900x.jpg?v=1628677075 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_1080x.jpg?v=1628677075 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_1296x.jpg?v=1628677075 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_1512x.jpg?v=1628677075 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_1728x.jpg?v=1628677075 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_1944x.jpg?v=1628677075 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_2160x.jpg?v=1628677075 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_2376x.jpg?v=1628677075 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_2592x.jpg?v=1628677075 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_2808x.jpg?v=1628677075 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_3024x.jpg?v=1628677075 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_4320x.jpg?v=1628677075 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="productLable"></div><div className="proButton clearfix"><form action="/cart/add" method="post" enctype="multipart/form-data" className="formAddToCart">
                                        <input type="hidden" name="id" value="40047437447348" /><a className="btn btnProduct btnAddToCart" href="/products/breezy-dress" title="Select options">
                                            <span className="icon">+</span>
                                            <span className="select_options text">Select options</span>
                                        </a></form>

                                        <div className="productQuickView">
                                            <a className="btn btnProduct btnProductQuickview" href="#velaQuickView" data-handle="breezy-dress" title="Quick view">
                                                <span className="icons icon-eye"></span>
                                                
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="proContent text-center"><h5 className="proName">
                                    <a href="/products/breezy-dress">Breezy Dress</a>
                                </h5>
                                    <div className="proPrice"><div className="priceProduct ">Rs. 2,500.00</div>
                                    </div><div className="velaSwatchCus">


                                        <ul className="velaSwatchProduct d-flex flexJustifyCenter">

                                            <li>
                                                <label style={{backgroundColor: 'black', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/black.png?v=10736152548701150891)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac_large.jpg?v=1628677075"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'blue', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/blue.png?v=4370264528961748208)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/180MkoJL3p2Ph4u2vEg1JIEykzKQTd7qM_84d9f04e-8e9e-45b9-9d84-2e16e869e290_large.jpg?v=1628677058"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'orange', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/orange.png?v=5800035975846015292)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Mz5IXr4Hili-GIrOr3puB4oUs99wjCpf_e30e1088-8021-4d24-bd20-c0bb9a780732_large.jpg?v=1628677075"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'grey', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/grey.png?v=15096911896772309806)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1taTVm0F-y6ziPmM-VqpfgLG2Xq7dbX-X_45d2d2e2-79bd-4009-a88f-40493a6094f4_large.jpg?v=1624602164"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'olive', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/olive.png?v=5577226969490646114)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1b4-v9oflghCk1XQ-fJ9m-QC5wBdIuyiY_f84cc168-fa11-40fa-83e2-1e738ffd9c89_large.jpg?v=1624602164"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'pink', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/pink.png?v=333203006688677360)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1UiIi3x3qvbkDtkLmRE8EIGB_GiZFUE7u_328921e4-a25c-4312-b570-ee7d966ed052_large.jpg?v=1624602164"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label  style={{backgroundColor: "teal",backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/teal.png?v=16261582877550399555)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1qhQ-Iy5WrIXrYkgGdtg2Hl_MRSYzg9VM_fbaa0a56-2b21-4bc3-8327-6acbea40c568_large.jpg?v=1625744843"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'red', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/red.png?v=12203767675055985335)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1VaqZOAwrwD5e01pJbOgsUMARYTILebPp_22bed071-d87e-40ec-8d38-e63259c91399_large.jpg?v=1625744843"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'green', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/green.png?v=4662176204617959698)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1yCFp2D0bCubrPV3J_W5yHeBJ3cRZcWrg_b89ed214-f519-4813-840e-3b672868f800_large.jpg?v=1625744843"></a>
                                                </div>
                                            </li>
                                            <li>
                                                <label style={{backgroundColor: 'white', backgroundImage: 'url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/white.png?v=3901641526066447585)'}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_rvNHTRDQJo0fz-ooDmxyKPCNPVv10dt_8a2ce143-b4ad-41de-818f-386e9ab9d013_large.jpg?v=1624602164"></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div></div> */}
                        
                        
                        
                        </div>
                       
                        
                        </div>

                        </Slider>
                        <div className="owl-nav">
                            <div className="owl-prev disabled"></div>
                            <div className="owl-next"></div>
                        </div>
                        
                        <div className="owl-dots disabled"></div></div>
                </div></div>
            </div>
        </div>
    </div>
    </div>
       
    )
}

export default HomeProducts2
