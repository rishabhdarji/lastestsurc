import React, { useEffect, useState } from 'react';
// import Mycard from './Mycard.js'
import { generatePath, useHistory } from 'react-router-dom';
import './Imagecarousel3.css'
import HomeProducts2 from '../HomeProducts/HomeProducts2.js';
import HomeProducts3 from '../HomeProducts/HomeProducts3.js';
import HomeProducts1 from '../HomeProducts/HomeProducts1.js';
import { GrFormAdd } from "react-icons/gr";
import { GrView } from "react-icons/gr";
const Imagecarouse3 = () => {
    let box3 = document.querySelector('.product-container3');

    const btnpressprev3 = () => {
        let width3 = box3.clientWidth;
        box3.scrollLeft = box3.scrollLeft - width3;
        console.log(width3)
    }

    const btnpressnext3 = () => {
        let width3 = box3.clientWidth;
        box3.scrollLeft = box3.scrollLeft + width3;
        console.log(width3)
    }


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
        <div className="product-carousel3">
            <button className="pre-btn3" style={{marginLeft:"290px"}}  onClick={btnpressprev3}><p>&lt;</p></button>
            <button className="next-btn" style={{marginRight:"320px"}} onClick={btnpressnext3}><p>&gt;</p></button>

        <div style={{marginLeft:"370px"}}>
            <div className="product-container3" style={{width:"1100px"}}>
            {data.map((name)=>
                            <div  style={{width: '575px', marginRight: '30px',float:"left"}}><div className="velaProBlock grid " data-price="1,600.00"  onClick={()=>handleProceed(name.id)}>
                            <div className="velaProBlockInner">
                                <div className="proHImage d-flex flexJustifyCenter">
                                    <a className="proFeaturedImage">
                                        <div >
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{paddingTop : "149.8%", width:"250px"}}>
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
                                            <span style={{ color :"white"}}>+</span>
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
                                    <div className="proPrice"><div className="priceProduct ">{parseFloat(name.price).toFixed(2)}</div>
                                    </div><div className="velaSwatchCus">

                                    {/* { colorindex = name.super_attributes.findIndex(x => x.name ==="Color")} */}
                                        <ul className="velaSwatchProduct d-flex flexJustifyCenter">
                                        {name.super_attributes[colorindex].options.map((pcolor)=>
                                       

                                            <li style={{margin:"3px"}}>
                                                
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
                        
            </div>
        </div>
        </div>
    )
}

export default Imagecarouse3