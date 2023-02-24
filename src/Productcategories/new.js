import React from 'react';
import { useEffect, useState ,CSSProperties } from 'react';
import { generatePath, useHistory } from 'react-router-dom';
import { ShimmerSocialPost } from 'react-shimmer-effects';
import Footer from '../sections/Footer';
import { Inner } from '../sections/InnerHeader';
import { GrView } from "react-icons/gr";
import BounceLoader from "react-spinners/BounceLoader";
import './Product.css';

export const Productcategoryy = () => {
     
    var colorindex = 0;

    const [data, setData] = useState(null)

    const [showtab, setShowtab] = useState(1);
    const style = { color:"white" ,  fontSize: "1.5em" };

    const handletab = (e) => {
        setShowtab(e);

    }

    const history = useHistory();
    useEffect(() => {

        fetch("http://surc.online/api/products?limit=10&page=1").then((result) => {
            result.json().then((resp) => {
               
                setData(resp.data)
            })
        })
    }, [])

    const handleProceed = (id) => {
        console.log("clicked")
        id && history.push(generatePath("/products/:id", { id }));


    }

    const override: CSSProperties = {
        display: "block",
        // margin: "180px",
         marginLeft:"850px",
        marginTop:"450px",
        
    
        
      };
         return (

        <>
        <div className="absolute-header">
     {data!=null? 
    <div className="absolute-header">

                <Inner />
                <br>
                </br>
                <br>
                </br>

               
                    <section id="pageContent">
                        <div className="container">
                            <div className="pageCollectionInner mb20 pb-md-30">
                                <div className="row"><aside id="velaSidebar" className="filterTagFullwidthContent sidebarLeft velaSidebar">
                                    <div className="filterTagFullwidthClose hidden-xl hidden-lg hidden-md hidden-xl"></div>
                                    <div className="velaSidebarInner">
                                        <div id="shopify-section-sidebartop" className="shopify-section"><div id="velaCategories" className="velaCategoriesSidebar velaBlock">
                                            <h3 className="titleSidebar">Products</h3><div className="velaContent">
                                                <ul className="sidebarListCategories list-unstyled">

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/apple-shorts">Apple Bottom Shorts</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/breezy-dress">Breezy Dress</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/classNameic-high-waist-pants">classNameic High Waist Pants</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/cut-off-tee-top">Cut Off Boyfriend Crop Top</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/easy-dress">Easy Dress</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/everyday-pant">Everyday Pant</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/going-out-dress">Going Out Dress</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/going-out-top">Going Out Top</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/modest-top">Modest Top</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/my-boyfriends-tshirt">My Boyfriend's Tshirt</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/second-skin-top">Second Skin Top</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/soho-crop">SOHO Crop</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/the-body-crop-top">The Body Crop Top</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/classNameic-cami">The classNameic Cami</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/crop-top">The Day to Night Top</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/henley-top">The Henley Top</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/classNameic-full-top">The classNameic Full Top</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/the-everyday-top">The Everyday Top</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/the-hook">The Hook</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/the-utility-crop-top">The Utility Crop Top</a></li>

                                                    <li className="sidebarCateItem">
                                                        <a href="/products/versatile-crop-top">Versatile Top</a></li>

                                                </ul>
                                            </div></div></div>
                                        <div id="shopify-section-sidebarfilter" className="shopify-section"></div>
                                        <div id="shopify-section-sidebarprice" className="shopify-section">
                                        </div>
                                        <div id="shopify-section-sidebarbottom" className="shopify-section"><div className="velaProductsSidebar mb30 pb-md-20"><h3 className="titleSidebar">Best sellers</h3><div className="velaContent">
                                            <div className="productSidebar">
                                                <div className="productSidebarImage">
                                                    <a className="d-block" href="/products/my-boyfriends-tshirt">





                                                        <div className="p-relative">
                                                            <div className="product-card__image" style={{ paddingTop: "149.8%" }}>
                                                                <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Grey"
                                                                    data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_180x.jpg?v=1628679423 180w,
         //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_360x.jpg?v=1628679423 360w, 
         //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_540x.jpg?v=1628679423 540w, 
         //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_720x.jpg?v=1628679423 720w,
          //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_900x.jpg?v=1628679423 900w, 
          //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_1080x.jpg?v=1628679423 1080w, 
          //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_1296x.jpg?v=1628679423 1296w, 
          //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_1512x.jpg?v=1628679423 1512w,
           //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_1728x.jpg?v=1628679423 1728w, 
           //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_1944x.jpg?v=1628679423 1944w, 
           //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_2160x.jpg?v=1628679423 2160w,
            //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_2376x.jpg?v=1628679423 2376w, 
            //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_2592x.jpg?v=1628679423 2592w, 
            //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_2808x.jpg?v=1628679423 2808w,
             //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_3024x.jpg?v=1628679423 3024w, 
             //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_4320x.jpg?v=1628679423 4320w"
                                                                    sizes="64.75300400534046px"
                                                                    srcSet="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_180x.jpg?v=1628679423 180w, 
             //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_360x.jpg?v=1628679423 360w,
              //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_540x.jpg?v=1628679423 540w, 
              //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_720x.jpg?v=1628679423 720w, 
              //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_900x.jpg?v=1628679423 900w, 
              //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_1080x.jpg?v=1628679423 1080w,
               //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_1296x.jpg?v=1628679423 1296w,
                //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_1512x.jpg?v=1628679423 1512w,
                 //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_1728x.jpg?v=1628679423 1728w,
                  //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_1944x.jpg?v=1628679423 1944w,
                   //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_2160x.jpg?v=1628679423 2160w, 
                   //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_2376x.jpg?v=1628679423 2376w,
                    //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_2592x.jpg?v=1628679423 2592w,
                     //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_2808x.jpg?v=1628679423 2808w,
                      //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_3024x.jpg?v=1628679423 3024w, 
                      //cdn.shopify.com/s/files/1/0535/4812/2292/products/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_ef3198e9-9183-414d-b5a9-6e74e4210f0c_4320x.jpg?v=1628679423 4320w"/>
                                                            </div>
                                                            <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                        </div>



                                                    </a>
                                                </div>
                                                <div className="productSidebarContent"><h4 className="productSidebarName">
                                                    <a href="/products/my-boyfriends-tshirt">My Boyfriend's Tshirt</a>
                                                </h4>
                                                    <div className="productSidebarPrice"><div className="priceProduct ">Rs. 1,200.00</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="productSidebar">
                                                <div className="productSidebarImage">
                                                    <a className="d-block" href="/products/the-go-to-sweatshirt">



                                                        <div className="p-relative">
                                                            <div className="product-card__image" style={{ paddingTop: "149.8%" }}>
                                                                <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black"
                                                                    data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_180x.jpg?v=1624554250 180w, 
        //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_360x.jpg?v=1624554250 360w, 
        //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_540x.jpg?v=1624554250 540w,
         //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_720x.jpg?v=1624554250 720w, 
         //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_900x.jpg?v=1624554250 900w,
          //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_1080x.jpg?v=1624554250 1080w, 
          //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_1296x.jpg?v=1624554250 1296w, 
          //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_1512x.jpg?v=1624554250 1512w,
           //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_1728x.jpg?v=1624554250 1728w, 
           //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_1944x.jpg?v=1624554250 1944w,
            //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_2160x.jpg?v=1624554250 2160w, 
            //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_2376x.jpg?v=1624554250 2376w, 
            //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_2592x.jpg?v=1624554250 2592w,
             //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_2808x.jpg?v=1624554250 2808w, 
             //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_3024x.jpg?v=1624554250 3024w,
              //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_4320x.jpg?v=1624554250 4320w"
                                                                    sizes="64.75300400534046px"
                                                                    srcSet="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_180x.jpg?v=1624554250 180w, 
              //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_360x.jpg?v=1624554250 360w, 
              //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_540x.jpg?v=1624554250 540w, 
              //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_720x.jpg?v=1624554250 720w,
               //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_900x.jpg?v=1624554250 900w,
                //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_1080x.jpg?v=1624554250 1080w, 
                //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_1296x.jpg?v=1624554250 1296w,
                 //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_1512x.jpg?v=1624554250 1512w,
                  //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_1728x.jpg?v=1624554250 1728w, 
                  //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_1944x.jpg?v=1624554250 1944w, 
                  //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_2160x.jpg?v=1624554250 2160w, 
                  //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_2376x.jpg?v=1624554250 2376w, 
                  //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_2592x.jpg?v=1624554250 2592w,
                   //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_2808x.jpg?v=1624554250 2808w,
                    //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_3024x.jpg?v=1624554250 3024w,
                     //cdn.shopify.com/s/files/1/0535/4812/2292/products/1xwJF0lnQgsYzthU2xEEVTTKsG1Ow_Hq8_22014345-0323-4280-ad11-c6f7782aa85c_4320x.jpg?v=1624554250 4320w"/>
                                                            </div>
                                                            <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                        </div>
                                                        </a>
                                                </div>
                                                <div className="productSidebarContent"><h4 className="productSidebarName">
                                                    <a href="/products/the-go-to-sweatshirt">The Go-to Sweatshirt</a>
                                                </h4>
                                                    <div className="productSidebarPrice"><div className="priceProduct ">Rs. 1,600.00</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="productSidebar">
                                                <div className="productSidebarImage">
                                                    <a className="d-block" href="/products/henley-top">



                                                        <div className="p-relative">
                                                            <div className="product-card__image" style={{ paddingTop: "149.8%" }}>
                                                                <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_180x.jpg?v=1624553855 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_360x.jpg?v=1624553855 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_540x.jpg?v=1624553855 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_720x.jpg?v=1624553855 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_900x.jpg?v=1624553855 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_1080x.jpg?v=1624553855 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_1296x.jpg?v=1624553855 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_1512x.jpg?v=1624553855 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_1728x.jpg?v=1624553855 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_1944x.jpg?v=1624553855 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_2160x.jpg?v=1624553855 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_2376x.jpg?v=1624553855 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_2592x.jpg?v=1624553855 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_2808x.jpg?v=1624553855 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_3024x.jpg?v=1624553855 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_4320x.jpg?v=1624553855 4320w" sizes="64.75300400534046px" srcSet="//cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_180x.jpg?v=1624553855 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_360x.jpg?v=1624553855 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_540x.jpg?v=1624553855 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_720x.jpg?v=1624553855 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_900x.jpg?v=1624553855 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_1080x.jpg?v=1624553855 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_1296x.jpg?v=1624553855 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_1512x.jpg?v=1624553855 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_1728x.jpg?v=1624553855 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_1944x.jpg?v=1624553855 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_2160x.jpg?v=1624553855 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_2376x.jpg?v=1624553855 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_2592x.jpg?v=1624553855 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_2808x.jpg?v=1624553855 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_3024x.jpg?v=1624553855 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/19rfWeJ0buPIR4iMLffmO4GRSEnSfPhHp_bd01f2f0-101b-4d28-bea0-536619a496b3_4320x.jpg?v=1624553855 4320w" />
                                                            </div>
                                                            <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                        </div>



                                                    </a>
                                                </div>
                                                <div className="productSidebarContent"><h4 className="productSidebarName">
                                                    <a href="/products/henley-top">The Henley Top</a>
                                                </h4>
                                                    <div className="productSidebarPrice"><div className="priceProduct ">Rs. 1,600.00</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="productSidebar">
                                                <div className="productSidebarImage">
                                                    <a className="d-block" href="/products/modest-top">



                                                        <div className="p-relative">
                                                            <div className="product-card__image" style={{ paddingTop: "149.8%" }}>
                                                                <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_180x.jpg?v=1624553931 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_360x.jpg?v=1624553931 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_540x.jpg?v=1624553931 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_720x.jpg?v=1624553931 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_900x.jpg?v=1624553931 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_1080x.jpg?v=1624553931 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_1296x.jpg?v=1624553931 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_1512x.jpg?v=1624553931 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_1728x.jpg?v=1624553931 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_1944x.jpg?v=1624553931 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_2160x.jpg?v=1624553931 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_2376x.jpg?v=1624553931 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_2592x.jpg?v=1624553931 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_2808x.jpg?v=1624553931 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_3024x.jpg?v=1624553931 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_4320x.jpg?v=1624553931 4320w" sizes="64.75300400534046px" srcSet="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_180x.jpg?v=1624553931 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_360x.jpg?v=1624553931 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_540x.jpg?v=1624553931 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_720x.jpg?v=1624553931 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_900x.jpg?v=1624553931 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_1080x.jpg?v=1624553931 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_1296x.jpg?v=1624553931 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_1512x.jpg?v=1624553931 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_1728x.jpg?v=1624553931 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_1944x.jpg?v=1624553931 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_2160x.jpg?v=1624553931 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_2376x.jpg?v=1624553931 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_2592x.jpg?v=1624553931 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_2808x.jpg?v=1624553931 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_3024x.jpg?v=1624553931 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1in1ubwAFhStBSZeGluij2GGvsbFD0P1c_28fb0155-f2a0-4bc4-8d5d-99604affd0c2_4320x.jpg?v=1624553931 4320w" />
                                                            </div>
                                                            <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                        </div>



                                                    </a>
                                                </div>
                                                <div className="productSidebarContent"><h4 className="productSidebarName">
                                                    <a href="/products/modest-top">Modest Top</a>
                                                </h4>
                                                    <div className="productSidebarPrice"><div className="priceProduct ">Rs. 1,600.00</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        </div></div>
                                    </div>
                                </aside>
                                    <div id="proListCollection" className="velaCenterColumn col-xs-12 col-sm-12 velaCenterColumnFix">
                                        <div id="shopify-section-vela-template-collection" className="shopify-section">
                                            <div className="filterCollectionFullwidth">
                                                <div className="filterTagFullwidth hidden-xl hidden-md hidden-lg">
                                                    <div className="filterTagFullwidthButton">
                                                        <i className="fa fa-sliders"></i>
                                                        <span>Filter</span>
                                                    </div>
                                                </div>
                                                <div className="collBoxSort">
                                                    <div className="collView">
                                                        <button className={showtab === 1 ? "changeView changeViewGrid changeViewActive " : "changeView changeViewList"} onClick={() => handletab(1)} type="button" >
                                                            <span className="iconChangeView">
                                                                <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="14" width="14" viewBox="0 0 16 16" title="Grid" style={{ verticalAlign: "middle" }}><title>Grid</title><g><path d="M1,3.80447821 L1,1 L3.80447821,1 L3.80447821,3.80447821 L1,3.80447821 Z M6.5977609,3.80447821 L6.5977609,1 L9.4022391,1 L9.4022391,3.80447821 L6.5977609,3.80447821 Z M12.1955218,3.80447821 L12.1955218,1 L15,1 L15,3.80447821 L12.1955218,3.80447821 Z M1,9.4022391 L1,6.59706118 L3.80447821,6.59706118 L3.80447821,9.4022391 L1,9.4022391 Z M6.5977609,9.4022391 L6.5977609,6.5977609 L9.4022391,6.5977609 L9.4022391,9.4022391 L6.5977609,9.4022391 Z M12.1955218,9.4022391 L12.1955218,6.59706118 L15,6.59706118 L15,9.4022391 L12.1955218,9.4022391 Z M1,14.9993003 L1,12.1948221 L3.80447821,12.1948221 L3.80447821,14.9993003 L1,14.9993003 Z M6.5977609,14.9993003 L6.5977609,12.1948221 L9.4022391,12.1948221 L9.4022391,14.9993003 L6.5977609,14.9993003 Z M12.1955218,14.9993003 L12.1955218,12.1948221 L15,12.1948221 L15,14.9993003 L12.1955218,14.9993003 Z"></path></g></svg>
                                                                <span className="hidden">Grid view</span>
                                                            </span>
                                                        </button>
                                                        &nbsp;
                                                        <button className={showtab === 2 ? "changeView changeViewGrid changeViewActive " : "changeView changeViewList"} onClick={() => handletab(2)} type="button" >
                                                            <span className="iconChangeView">
                                                                <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="14" width="14" viewBox="0 0 16 16" title="List" style={{ verticalAlign: "middle" }}><title>List</title><g><path d="M0,3 L0,1 L2,1 L2,3 L0,3 Z M0,7 L0,5 L2,5 L2,7 L0,7 Z M0,11 L0,9 L2,9 L2,11 L0,11 Z M0,15 L0,13 L2,13 L2,15 L0,15 Z M4,3 L4,1 L16,1 L16,3 L4,3 Z M4,7 L4,5 L16,5 L16,7 L4,7 Z M4,11 L4,9 L16,9 L16,11 L4,11 Z M4,15 L4,13 L16,13 L16,15 L4,15 Z"></path></g></svg>
                                                                <span className="hidden">List view</span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="collSortBy  pull-right">
                                                       
                                                        <select name="SortBy" id="SortBy" className="form-control">
                                                            <option value="">Default sorting</option>
                                                            <option value="manual">Featured</option>
                                                            <option value="best-selling">Best Selling</option>
                                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                                            <option value="title-descending">Alphabetically, Z-A</option>
                                                            <option value="price-ascending">Price, low to high</option>
                                                            <option value="price-descending">Price, high to low</option>
                                                            <option value="created-descending">Date, new to old</option>
                                                            <option value="created-ascending">Date, old to new</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="collBoxProducts">

                                                <div id="velaProList" className="proList grid">


                                                    <div className="rowFlex rowFlexMargin">



                                                        <div >

                                                            <div>
                                                                {showtab == 1 ?
                                                                    <div>
                                                                        {data.map((item) =>
                                                                            <div className="velaProBlock grid col-xs-6 col-md-4 col-lg-6" data-price="2,500.00">
                                                                                <div className="velaProBlockInner">
                                                                                    <div className="proHImage d-flex flexJustifyCenter">
                                                                                        <div className="proFeaturedImage" onClick={() => handleProceed(item.id)}>
                                                                                            <div className="wrap ">



                                                                                                <div className="p-relative">
                                                                                                    <div className="product-card__image" style={{ paddingTop: "149.8%" }}>
                                                                                                        <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Blue"
                                                                                                            data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_180x.jpg?v=1628677183 180w, 
            //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_360x.jpg?v=1628677183 360w,
             //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_540x.jpg?v=1628677183 540w,
              //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_720x.jpg?v=1628677183 720w, 
              //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_900x.jpg?v=1628677183 900w, 
              //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_1080x.jpg?v=1628677183 1080w,
               //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_1296x.jpg?v=1628677183 1296w,
                //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_1512x.jpg?v=1628677183 1512w,
                 //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_1728x.jpg?v=1628677183 1728w,
                  //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_1944x.jpg?v=1628677183 1944w, 
                  //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_2160x.jpg?v=1628677183 2160w, 
                  //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_2376x.jpg?v=1628677183 2376w, 
                  //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_2592x.jpg?v=1628677183 2592w,
                   //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_2808x.jpg?v=1628677183 2808w,
                    //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_3024x.jpg?v=1628677183 3024w, 
                    //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_4320x.jpg?v=1628677183 4320w"
                                                                                                            sizes="213px" srcSet="//cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_180x.jpg?v=1628677183 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_360x.jpg?v=1628677183 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_540x.jpg?v=1628677183 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_720x.jpg?v=1628677183 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_900x.jpg?v=1628677183 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_1080x.jpg?v=1628677183 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_1296x.jpg?v=1628677183 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_1512x.jpg?v=1628677183 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_1728x.jpg?v=1628677183 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_1944x.jpg?v=1628677183 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_2160x.jpg?v=1628677183 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_2376x.jpg?v=1628677183 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_2592x.jpg?v=1628677183 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_2808x.jpg?v=1628677183 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_3024x.jpg?v=1628677183 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/13PlMJhtd2keWw1YW8iV2M_umXVCZN9Yj_cd0c9c7a-123d-4513-a3f7-ef76b230aef6_4320x.jpg?v=1628677183 4320w" />
                                                                                                    </div>
                                                                                                    <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                                                                </div>



                                                                                            </div>
                                                                                            <div className="hidden-sm hidden-xs proSwatch proImageSecond">




                                                                                                <div className="p-relative">
                                                                                                    <div className="product-card__image" style={{ paddingTop: "149.8%" }}>
                                                                                                        <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_180x.jpg?v=1628677183 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_360x.jpg?v=1628677183 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_540x.jpg?v=1628677183 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_720x.jpg?v=1628677183 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_900x.jpg?v=1628677183 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_1080x.jpg?v=1628677183 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_1296x.jpg?v=1628677183 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_1512x.jpg?v=1628677183 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_1728x.jpg?v=1628677183 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_1944x.jpg?v=1628677183 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_2160x.jpg?v=1628677183 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_2376x.jpg?v=1628677183 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_2592x.jpg?v=1628677183 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_2808x.jpg?v=1628677183 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_3024x.jpg?v=1628677183 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_4320x.jpg?v=1628677183 4320w" sizes="213px" srcSet="//cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_180x.jpg?v=1628677183 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_360x.jpg?v=1628677183 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_540x.jpg?v=1628677183 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_720x.jpg?v=1628677183 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_900x.jpg?v=1628677183 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_1080x.jpg?v=1628677183 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_1296x.jpg?v=1628677183 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_1512x.jpg?v=1628677183 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_1728x.jpg?v=1628677183 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_1944x.jpg?v=1628677183 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_2160x.jpg?v=1628677183 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_2376x.jpg?v=1628677183 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_2592x.jpg?v=1628677183 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_2808x.jpg?v=1628677183 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_3024x.jpg?v=1628677183 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/14BrgYFbCY2u4FAs9DD-9ZaknE0XtWfML_51906785-1eb7-4487-b4c8-6274b67d20f0_4320x.jpg?v=1628677183 4320w" />
                                                                                                    </div>
                                                                                                    <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                                                                </div>



                                                                                            </div></div>

                                                                                        <div className="productLable"></div><div className="proButton clearfix"><form action="/cart/add" method="post" encType="multipart/form-data" className="formAddToCart">
                                                                                            <input type="hidden" name="id" value="40048100343988" /><a className="btn btnProduct btnAddToCart" title="Select options">
                                                                                                <span className="icon">+</span>
                                                                                                <span className="select_options text">Select options</span>
                                                                                            </a></form>

                                                                                            <div className="productQuickView">
                                                                                                <a className="btn btnProduct btnProductQuickview" data-handle="going-out-dress" title="Quick view">
                                                                                                    <span><GrView style={style}/></span>
                                                                                                    {/* <span className="text">Quick view</span> */}
                                                                                                </a>
                                                                                            </div>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="proContent text-center"><h5 className="proName">
                                                                                        <a href="/products/going-out-dress">{item.name}</a>
                                                                                    </h5>
                                                                                        <div className="proPrice"><div className="priceProduct ">{item.price}</div>
                                                                                        </div>
                                                                                        <div className="velaSwatchCus">
                                                                                            {colorindex = item.super_attributes.findIndex(x => x.name === "Color")}
                                                                                            <ul className="velaSwatchProduct d-flex flexJustifyCenter">
                                                                                                {item.super_attributes[colorindex].options.map((pcolor) =>



                                                                                                    <li>

                                                                                                        <label style={{ backgroundColor: pcolor.swatch_value }}></label>
                                                                                                        <div className="hidden">
                                                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/p…eb7-4487-b4c8-6274b67d20f0_large.jpg?v=1628677183"></a>
                                                                                                        </div>
                                                                                                    </li>

                                                                                                )}

                                                                                            </ul>




                                                                                        </div></div>
                                                                                </div>
                                                                            </div>


                                                                        )}
                                                                    </div>
                                                                    :
                                                                    <div>
                                                                        {data.map((dataa) =>
                                                                            <div className="rowFlex rowFlexMargin">
                                                                                <div className="col-xs-12 col-sm-4 col-md-3">
                                                                                    <div className="proHImage">
                                                                                        <a className="proFeaturedImage" href="/products/apple-shorts">
                                                                                            <div className="wrap ">



                                                                                                <div className="p-relative">
                                                                                                    <div className="product-card__image" style={{ paddingTop: "149.8%" }}>
                                                                                                        <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_180x.jpg?v=1628248696 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_360x.jpg?v=1628248696 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_540x.jpg?v=1628248696 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_720x.jpg?v=1628248696 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_900x.jpg?v=1628248696 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1080x.jpg?v=1628248696 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1296x.jpg?v=1628248696 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1512x.jpg?v=1628248696 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1728x.jpg?v=1628248696 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1944x.jpg?v=1628248696 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2160x.jpg?v=1628248696 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2376x.jpg?v=1628248696 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2592x.jpg?v=1628248696 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2808x.jpg?v=1628248696 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_3024x.jpg?v=1628248696 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_4320x.jpg?v=1628248696 4320w" sizes="194.92656875834447px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_180x.jpg?v=1628248696 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_360x.jpg?v=1628248696 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_540x.jpg?v=1628248696 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_720x.jpg?v=1628248696 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_900x.jpg?v=1628248696 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1080x.jpg?v=1628248696 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1296x.jpg?v=1628248696 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1512x.jpg?v=1628248696 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1728x.jpg?v=1628248696 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1944x.jpg?v=1628248696 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2160x.jpg?v=1628248696 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2376x.jpg?v=1628248696 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2592x.jpg?v=1628248696 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2808x.jpg?v=1628248696 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_3024x.jpg?v=1628248696 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_4320x.jpg?v=1628248696 4320w" />
                                                                                                    </div>
                                                                                                    <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                                                                </div>



                                                                                            </div>
                                                                                            <div className="hidden-sm hidden-xs proSwatch proImageSecond">
                                



                                <div className="p-relative">
                                    <div className="product-card__image" style={{paddingTop:"149.8%"}}>
                                        <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_180x.jpg?v=1628248696 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_360x.jpg?v=1628248696 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_540x.jpg?v=1628248696 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_720x.jpg?v=1628248696 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_900x.jpg?v=1628248696 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1080x.jpg?v=1628248696 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1296x.jpg?v=1628248696 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1512x.jpg?v=1628248696 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1728x.jpg?v=1628248696 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1944x.jpg?v=1628248696 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2160x.jpg?v=1628248696 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2376x.jpg?v=1628248696 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2592x.jpg?v=1628248696 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2808x.jpg?v=1628248696 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_3024x.jpg?v=1628248696 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_4320x.jpg?v=1628248696 4320w" sizes="194.92656875834447px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_180x.jpg?v=1628248696 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_360x.jpg?v=1628248696 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_540x.jpg?v=1628248696 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_720x.jpg?v=1628248696 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_900x.jpg?v=1628248696 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1080x.jpg?v=1628248696 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1296x.jpg?v=1628248696 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1512x.jpg?v=1628248696 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1728x.jpg?v=1628248696 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1944x.jpg?v=1628248696 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2160x.jpg?v=1628248696 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2376x.jpg?v=1628248696 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2592x.jpg?v=1628248696 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2808x.jpg?v=1628248696 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_3024x.jpg?v=1628248696 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_4320x.jpg?v=1628248696 4320w"/>
                                    </div>
                                    <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                </div>
                                
                                
                                                                        
                                                            </div>
                                                                                        </a>


                                                                                        <div className="productLable"></div></div>
                                                                                </div>
                                                                                <div className="col-xs-12 col-sm-8 col-md-6 col-lg-7">
                                                                                    <div className="proContent">
                                                                                        <h4 className="proName" style={{ fontSize: "22px" }}>
                                                                                            <a href="/products/apple-shorts">{dataa.name}</a>
                                                                                        </h4>
                                                                                        <div className="proPrice"><div className="priceProduct" style={{ fontSize: "18px" }}>{parseFloat(dataa.price).toFixed(2)}</div>

                                                                                        </div>

                                                                                        <div className="velaSwatchCus mt10">



                                                                                            <ul className="velaSwatchProduct d-flex ">
                                                                                                {dataa.super_attributes[colorindex].options.map((pcolor) =>



                                                                                                    <li>

                                                                                                        <label style={{ backgroundColor: pcolor.swatch_value, margin: "2px" }}></label>
                                                                                                        <div className="hidden">
                                                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/p…eb7-4487-b4c8-6274b67d20f0_large.jpg?v=1628677183"></a>
                                                                                                        </div>
                                                                                                    </li>

                                                                                                )}

                                                                                            </ul>




                                                                                        </div><div className="proDescription">Comfort wear with pockets!Whether you are planning a trip to your favorite destination or kitchen to grab a snack, you...</div></div>
                                                                                </div>
                                                                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2 rowFlex flexAlignCenter">
                                                                                    <div className="proButton text-center"><form action="/cart/add" method="post" enctype="multipart/form-data" className="formAddToCart">
                                                                                        <input type="hidden" name="id" value="40047432368308" />
                                                                                        <a className="btn btnProduct btnAddToCart" href="/products/apple-shorts" style={{ padding: "8px", paddingTop: "5px", margin: "7px" }} title="Select options">
                                                                                            <span></span>
                                                                                            <span className="text select_options">Select options</span>
                                                                                        </a></form>

                                                                                        <div className="productQuickView">
                                                                                            <a className="btn btnProduct btnProductQuickview" href="#velaQuickView" style={{ paddingTop: "5px", padding: "8px", margin: "7px" }} data-handle="apple-shorts" title="Quick view">
                                                                                                <span className="icons icon-eye"></span>
                                                                                                <span className="text">Quick view</span>
                                                                                            </a>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                }
                                                            </div>



                                                        </div>
                                                    </div>
                                                </div>

                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                

                <Footer />

            </div>
            :<BounceLoader
color="#36d7b7"
size={101}
 cssOverride={override} />}
</div>
        </>
    )
}