
import React, { useEffect, useState } from 'react';
import { generatePath, useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
// import { Carousel } from 'react-responsive-carousel'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";
import { GrView } from "react-icons/gr";
const HomeProducts3 = () => {

    const [data,setData]=useState([])

    const history = useHistory();
    useEffect(()=>{
     
        fetch("http://surc.online/api/products?category_id=22,13,27,8,12,25") .then((result)=>{
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
    return (
      
        // <div id="shopify-section-16245544809a635f1b" className="shopify-section velaFramework"><div className="productListHome velaProducts" style={{backgroundColor: '#ffffff',padding:'50px 0'}}>
        // <div className="container">
        //     <div className="sectionInner pbBlockGutter"><div className="headingGroup pb20">
        //         <h3 className="velaHomeTitle text-center">
        //             <span>No Fuss Styles</span>
        //         </h3>
        //     </div>
        //     <div className="velaContent">
        //         <div className="proOwlCarousel owlCarouselPlay">
        //             <div className="owl-carousel owl-loaded owl-drag" data-nav="true" data-autoplay="false" data-autoplaytimeout="10000" data-columnone="4" data-columntwo="3" data-columnthree="2" data-columnfour="2" data-columnfive="1">
        //                 <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1830px'}}>
                          
<div style={{float:"left"}}>

                        {data.map((name)=>
                            <div  style={{width: '275px', marginRight: '30px',float:"left"}}><div className="velaProBlock grid " data-price="1,600.00"  onClick={()=>handleProceed(name.id)}>
                            <div className="velaProBlockInner">
                                <div className="proHImage d-flex flexJustifyCenter">
                                    <a className="proFeaturedImage">
                                        <div >
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
   
                        {/* </div></div>
                        <div className="owl-nav">
                            <div className="owl-prev disabled"></div>
                            <div className="owl-next"></div>
                        </div>
                        
                        <div className="owl-dots disabled"></div></div>
                </div></div>
            </div>
        </div>
    </div>
    </div> */}
      </div> 
    )
}

export default HomeProducts3
