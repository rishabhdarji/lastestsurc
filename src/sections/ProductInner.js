import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GrView } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const ProductInner = () => {


    const { id } = useParams();

    console.log(id);
const [data,
    setData]=useState(null)
    useEffect(()=>{
        fetch("http://surc.online/api/products/"+id) .then((result)=>{
            result.json().then((resp)=>{
               console.log("result",resp.data)

                setData(resp.data)
            })
        })
    },[])
    
var colorindex=0;

  return (
   <>
   <div className="container">
   <section className="proRelated mb30">
			<div id="relatedProducts" className="velaProducts"><div className="headingGroup pb20">
						<h3 className="velaTitle velaHomeTitle">
							<span>You might also like</span>
						</h3>
						
							<span className="subTitle">
								Popular products that our customers love
							</span></div>
                            
                            
                            
                            <div className="velaContent">
					<div className="proOwlCarousel owlCarouselPlay">
	                    <div className="owl-carousel owl-loaded owl-drag" data-nav="true" data-autoplay="true" data-margin="30" data-columnone="4" data-columntwo="4" data-columnthree="3" data-columnfour="2" data-columnfive="2">
	                        
								
							
								
									
								
							
								
									
								
							
	                    <div className="owl-stage-outer"><div className="owl-stage" style={{transform:"translate3d(0px, 0px, 0px)", transition:"all 0s ease 0s", width:"610px"}}><div className="owl-item active" style={{width:"275px", marginRight: "30px"}}><div className="item">
										



<div className="velaProBlock grid " data-price="2,500.00">
    <div className="velaProBlockInner">
        <div className="proHImage d-flex flexJustifyCenter">
            <a className="proFeaturedImage" href="/products/everyday-pant">
                <div className="wrap ">
                    
                        

<div className="p-relative">
    <div className="product-card__image" style={{paddingTop:"149.8%"}}>
        <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_180x.jpg?v=1624554556 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_360x.jpg?v=1624554556 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_540x.jpg?v=1624554556 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_720x.jpg?v=1624554556 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_900x.jpg?v=1624554556 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_1080x.jpg?v=1624554556 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_1296x.jpg?v=1624554556 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_1512x.jpg?v=1624554556 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_1728x.jpg?v=1624554556 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_1944x.jpg?v=1624554556 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_2160x.jpg?v=1624554556 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_2376x.jpg?v=1624554556 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_2592x.jpg?v=1624554556 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_2808x.jpg?v=1624554556 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_3024x.jpg?v=1624554556 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_4320x.jpg?v=1624554556 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_180x.jpg?v=1624554556 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_360x.jpg?v=1624554556 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_540x.jpg?v=1624554556 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_720x.jpg?v=1624554556 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_900x.jpg?v=1624554556 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_1080x.jpg?v=1624554556 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_1296x.jpg?v=1624554556 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_1512x.jpg?v=1624554556 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_1728x.jpg?v=1624554556 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_1944x.jpg?v=1624554556 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_2160x.jpg?v=1624554556 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_2376x.jpg?v=1624554556 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_2592x.jpg?v=1624554556 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_2808x.jpg?v=1624554556 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_3024x.jpg?v=1624554556 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_4320x.jpg?v=1624554556 4320w"/>
    </div>
    <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
</div>


                    
                </div><div className="hidden-sm hidden-xs proSwatch proImageSecond">
                        



<div className="p-relative">
    <div className="product-card__image" style={{paddingTop:"149.8%"}}>
        <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_180x.jpg?v=1624554556 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_360x.jpg?v=1624554556 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_540x.jpg?v=1624554556 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_720x.jpg?v=1624554556 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_900x.jpg?v=1624554556 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_1080x.jpg?v=1624554556 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_1296x.jpg?v=1624554556 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_1512x.jpg?v=1624554556 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_1728x.jpg?v=1624554556 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_1944x.jpg?v=1624554556 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_2160x.jpg?v=1624554556 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_2376x.jpg?v=1624554556 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_2592x.jpg?v=1624554556 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_2808x.jpg?v=1624554556 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_3024x.jpg?v=1624554556 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_4320x.jpg?v=1624554556 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_180x.jpg?v=1624554556 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_360x.jpg?v=1624554556 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_540x.jpg?v=1624554556 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_720x.jpg?v=1624554556 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_900x.jpg?v=1624554556 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_1080x.jpg?v=1624554556 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_1296x.jpg?v=1624554556 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_1512x.jpg?v=1624554556 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_1728x.jpg?v=1624554556 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_1944x.jpg?v=1624554556 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_2160x.jpg?v=1624554556 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_2376x.jpg?v=1624554556 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_2592x.jpg?v=1624554556 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_2808x.jpg?v=1624554556 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_3024x.jpg?v=1624554556 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1GYEkP0lFPc_u9vYfNpEmERdOdNGTWPSD_1975bc1f-0029-4a8b-b7e2-d3aa46d8bf20_4320x.jpg?v=1624554556 4320w"/>
    </div>
    <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
</div>


                                
                    </div></a>
            <div className="productLable"></div><div className="proButton clearfix"><form action="/cart/add" method="post" enctype="multipart/form-data" className="formAddToCart">
                    <input type="hidden" name="id" value="40047507636404"/><a className="btn btnProduct btnAddToCart" href="/products/everyday-pant" title="Select options">
                                <span style={{color:"white"}}>+</span>
                                <span style={{color:"white"}}>Select options</span>
                            </a></form>
                
    <div className="productQuickView">
        <a className="btn btnProduct btnProductQuickview" href="#velaQuickView" data-handle="everyday-pant" title="Quick view">
            <span><GrView size={20}/></span>
          	{/* <span className="text">Quick view</span> */}
        </a>
    </div>

            </div>
        </div>
        <div className="proContent text-center"><h5 className="proName">
                <a href="/products/everyday-pant">Everyday Pant</a>
            </h5>
            <div className="proPrice"><div className="priceProduct ">Rs. 2,500.00</div>               
            </div><div className="velaSwatchCus">
                    

<ul className="velaSwatchProduct d-flex flexJustifyCenter">
                                    
<li>
                                                <label style={{backgroundColor:"black"}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Dr8sZ7ygN_He4eZPTr5eVi6_ixHexP-2_f5d3595b-3a95-408e-b960-65de984ec399_large.jpg?v=1624554556"></a>
                                                </div>
                                            </li>



                                </ul>
                </div></div>
    </div>
</div>
									</div></div><div className="owl-item active" style={{width:"275px",marginRight:"30px"}}><div className="item">
										



<div className="velaProBlock grid  lastItem" data-price="2,500.00">
    <div className="velaProBlockInner">
        <div className="proHImage d-flex flexJustifyCenter">
            <a className="proFeaturedImage" href="/products/classNameic-high-waist-pants">
                <div className="wrap ">
                    
                        

<div className="p-relative">
    <div className="product-card__image" style={{paddingTop:"149.8%"}}>
        <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Blue" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_180x.jpg?v=1628679378 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_360x.jpg?v=1628679378 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_540x.jpg?v=1628679378 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_720x.jpg?v=1628679378 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_900x.jpg?v=1628679378 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_1080x.jpg?v=1628679378 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_1296x.jpg?v=1628679378 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_1512x.jpg?v=1628679378 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_1728x.jpg?v=1628679378 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_1944x.jpg?v=1628679378 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_2160x.jpg?v=1628679378 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_2376x.jpg?v=1628679378 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_2592x.jpg?v=1628679378 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_2808x.jpg?v=1628679378 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_3024x.jpg?v=1628679378 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_4320x.jpg?v=1628679378 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_180x.jpg?v=1628679378 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_360x.jpg?v=1628679378 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_540x.jpg?v=1628679378 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_720x.jpg?v=1628679378 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_900x.jpg?v=1628679378 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_1080x.jpg?v=1628679378 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_1296x.jpg?v=1628679378 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_1512x.jpg?v=1628679378 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_1728x.jpg?v=1628679378 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_1944x.jpg?v=1628679378 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_2160x.jpg?v=1628679378 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_2376x.jpg?v=1628679378 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_2592x.jpg?v=1628679378 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_2808x.jpg?v=1628679378 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_3024x.jpg?v=1628679378 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1Fg3mv6TuefTqZ3pUbOz9eXm9rs1e536A_b62fc7d4-c8ce-4ca0-a68e-0a8fe852c446_4320x.jpg?v=1628679378 4320w"/>
    </div>
    <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
</div>


                    
                </div><div className="hidden-sm hidden-xs proSwatch proImageSecond">
                        



<div className="p-relative">
    <div className="product-card__image" style={{paddingTop:"149.8%"}}>
        <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_180x.jpg?v=1628679378 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_360x.jpg?v=1628679378 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_540x.jpg?v=1628679378 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_720x.jpg?v=1628679378 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_900x.jpg?v=1628679378 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_1080x.jpg?v=1628679378 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_1296x.jpg?v=1628679378 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_1512x.jpg?v=1628679378 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_1728x.jpg?v=1628679378 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_1944x.jpg?v=1628679378 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_2160x.jpg?v=1628679378 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_2376x.jpg?v=1628679378 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_2592x.jpg?v=1628679378 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_2808x.jpg?v=1628679378 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_3024x.jpg?v=1628679378 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_4320x.jpg?v=1628679378 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_180x.jpg?v=1628679378 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_360x.jpg?v=1628679378 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_540x.jpg?v=1628679378 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_720x.jpg?v=1628679378 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_900x.jpg?v=1628679378 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_1080x.jpg?v=1628679378 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_1296x.jpg?v=1628679378 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_1512x.jpg?v=1628679378 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_1728x.jpg?v=1628679378 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_1944x.jpg?v=1628679378 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_2160x.jpg?v=1628679378 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_2376x.jpg?v=1628679378 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_2592x.jpg?v=1628679378 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_2808x.jpg?v=1628679378 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_3024x.jpg?v=1628679378 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_4320x.jpg?v=1628679378 4320w"/>
    </div>
    <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
</div>


                                
                    </div></a>
            <div className="productLable"></div><div className="proButton clearfix"><form action="/cart/add" method="post" enctype="multipart/form-data" className="formAddToCart">
                    <input type="hidden" name="id" value="40047451799732"/><a className="btn btnProduct btnAddToCart" href="/products/classNameic-high-waist-pants" title="Select options">
                                <span className="icon">+</span>
                                <span style={{color:"white"}}>Select options</span>
                            </a></form>
                
    <div className="productQuickView">
        <a className="btn btnProduct btnProductQuickview" href="#velaQuickView" data-handle="classNameic-high-waist-pants" title="Quick view">
            <span className="icons icon-eye"></span>
          	<span className="text">Quick view</span>
        </a>
    </div>

            </div>
        </div>
        <div className="proContent text-center"><h5 className="proName">
                <a href="/products/classNameic-high-waist-pants">classNameic High Waist Pants</a>
            </h5>
            <div className="proPrice"><div className="priceProduct ">Rs. 2,500.00</div>               
            </div><div className="velaSwatchCus">
                    

<ul className="velaSwatchProduct d-flex flexJustifyCenter">
                                    
<li>
                                                <label style={{backgroundColor:"black"}}></label>
                                                <div className="hidden">
                                                    <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1aSLQ-PhvG6LNmJpTtr2lzh3xKHMtXfZp_52b92f37-a481-432c-a8cf-c7bcc78195a7_large.jpg?v=1628679378"></a>
                                                </div>
                                            </li>





                                </ul>
                </div></div>
    </div>
</div>
									</div></div></div></div>
                                    <div className="owl-nav disabled"><div className="owl-prev disabled">< IoIosArrowBack size={20}/></div>
                                    <div className="owl-next disabled">< IoIosArrowForward size={20}/></div></div>
                                    <div className="owl-dots disabled"></div></div>
	                </div>
				</div>
			</div>
		</section>
        </div>


   </>
  )
}
