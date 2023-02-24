import React from 'react'
import Footer from './Footer'
import { Inner } from './InnerHeader'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'

import { FaAngleDoubleLeft } from 'react-icons/fa'
import ScrollButton from './GoToTop/GoToTop';

export const Blog = () => {

    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);

    }
    return (
        <>



            <div className="absolute-header">

                <Inner />
                <div>
                    <br></br>
                    <br></br>
                </div>
                {showtab == 1 ?
                    <section id="pageContent" className="pageBlogContent mb30">
                        <div className="container">
                            <div className="velaBlogWrap">
                                <div id="shopify-section-vela-template-blog" className="shopify-section"><div className="row"><div className="col-xs-12">
                                    <div className="blogContainer"><h1 className="velaBlogTitle">Blog</h1><div className="blogListArticle blogGridTemplate">

                                        <div className="rowFlexMargin rowFlex">

                                            <div className="col-sp-12 col-xs-6 col-md-4">
                                                <div className="blogArticle mb20 pb-md-30">

                                                    <div className="articleImage">
                                                        <a href="/blogs/news">


                                                            <div className="p-relative">
                                                                <div className="product-card__image" style={{ paddingTop: "75.0%" }}>
                                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="1.3333333333333333" data-ratio="1.3333333333333333" data-sizes="auto" alt="Who is a minimalist traveler?" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_180x.png?v=1631703204 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_360x.png?v=1631703204 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_540x.png?v=1631703204 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_720x.png?v=1631703204 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_900x.png?v=1631703204 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1080x.png?v=1631703204 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1296x.png?v=1631703204 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1512x.png?v=1631703204 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1728x.png?v=1631703204 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1944x.png?v=1631703204 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2160x.png?v=1631703204 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2376x.png?v=1631703204 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2592x.png?v=1631703204 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2808x.png?v=1631703204 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_3024x.png?v=1631703204 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_4320x.png?v=1631703204 4320w" sizes="375.99999999999994px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_180x.png?v=1631703204 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_360x.png?v=1631703204 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_540x.png?v=1631703204 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_720x.png?v=1631703204 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_900x.png?v=1631703204 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1080x.png?v=1631703204 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1296x.png?v=1631703204 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1512x.png?v=1631703204 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1728x.png?v=1631703204 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1944x.png?v=1631703204 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2160x.png?v=1631703204 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2376x.png?v=1631703204 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2592x.png?v=1631703204 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2808x.png?v=1631703204 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_3024x.png?v=1631703204 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_4320x.png?v=1631703204 4320w" />
                                                                </div>
                                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                            </div>


                                                        </a>
                                                        <a className="btn" href="/blogs/news/are-you-a-minimalist-traveler-here-are-a-few-tips">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>

                                                    <div className="articleContent">
                                                        <div className="blogTitle">
                                                            <a href="/blogs/news" title="Blog">Blog</a>
                                                        </div>
                                                        <h3 className="articleTitle">
                                                            <a href="/blogs/news/are-you-a-minimalist-traveler-here-are-a-few-tips">Are you a Minimalist Traveler? Here are a few tips!</a>
                                                        </h3>
                                                        <div className="articleMeta d-flex mb20">

                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>September 15, 2021</span>
                                                        </div>
                                                        <div className="articleDesc">

                                                            Imagine the plight of a traveler who has to unload a few of his favourite things at the airport because of luggage restrictions. Haven’t we all been...

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sp-12 col-xs-6 col-md-4">
                                                <div className="blogArticle mb20 pb-md-30">

                                                    <div className="articleImage">
                                                        <a href="/blogs/news/sustainable-dresses-you-need-in-your-closet">


                                                            <div className="p-relative">
                                                                <div className="product-card__image" style={{ paddingTop: "149.83333333333334%" }}>
                                                                    <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6674082313681868" data-ratio="0.6674082313681868" data-sizes="auto" alt="What are the best ways to build an ethical &amp; eco-conscious mini closet" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_180x.jpg?v=1630505977 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_360x.jpg?v=1630505977 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_540x.jpg?v=1630505977 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_720x.jpg?v=1630505977 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_900x.jpg?v=1630505977 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1080x.jpg?v=1630505977 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1296x.jpg?v=1630505977 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1512x.jpg?v=1630505977 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1728x.jpg?v=1630505977 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1944x.jpg?v=1630505977 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2160x.jpg?v=1630505977 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2376x.jpg?v=1630505977 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2592x.jpg?v=1630505977 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2808x.jpg?v=1630505977 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_3024x.jpg?v=1630505977 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_4320x.jpg?v=1630505977 4320w" sizes="376.4182424916574px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_180x.jpg?v=1630505977 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_360x.jpg?v=1630505977 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_540x.jpg?v=1630505977 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_720x.jpg?v=1630505977 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_900x.jpg?v=1630505977 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1080x.jpg?v=1630505977 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1296x.jpg?v=1630505977 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1512x.jpg?v=1630505977 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1728x.jpg?v=1630505977 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1944x.jpg?v=1630505977 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2160x.jpg?v=1630505977 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2376x.jpg?v=1630505977 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2592x.jpg?v=1630505977 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2808x.jpg?v=1630505977 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_3024x.jpg?v=1630505977 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_4320x.jpg?v=1630505977 4320w" />
                                                                </div>
                                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                            </div>


                                                        </a>
                                                        <a className="btn" href="/blogs/news/sustainable-dresses-you-need-in-your-closet">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>

                                                    <div className="articleContent">
                                                        <div className="blogTitle">
                                                            <a href="/blogs/news" title="Blog">Blog</a>
                                                        </div>
                                                        <h3 className="articleTitle">
                                                            <a href="/blogs/news/sustainable-dresses-you-need-in-your-closet">Sustainable dresses you need in your closet</a>
                                                        </h3>
                                                        <div className="articleMeta d-flex mb20">


                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>September 01, 2021</span>
                                                        </div>
                                                        <div className="articleDesc">

                                                            We often worry that while trying to buy sustainable fashion &amp; cutting down on our closet’s carbon footprint, we’d have to give up on clothes that are...

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sp-12 col-xs-6 col-md-4">
                                                <div className="blogArticle mb20 pb-md-30">

                                                    <div className="articleImage">
                                                        <a href="/blogs/news/5-sustainable-gifts-to-options-for-this-festive-season">


                                                            <div className="p-relative">
                                                                <div className="product-card__image" style={{ paddingTop: "74.94481236203092%" }}>
                                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="1.3343151693667157" data-ratio="1.3343151693667157" data-sizes="auto" alt="Sustainable gifting options for festivals" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_180x.png?v=1630405478 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_360x.png?v=1630405478 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_540x.png?v=1630405478 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_720x.png?v=1630405478 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_900x.png?v=1630405478 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1080x.png?v=1630405478 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1296x.png?v=1630405478 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1512x.png?v=1630405478 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1728x.png?v=1630405478 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1944x.png?v=1630405478 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2160x.png?v=1630405478 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2376x.png?v=1630405478 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2592x.png?v=1630405478 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2808x.png?v=1630405478 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_3024x.png?v=1630405478 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_4320x.png?v=1630405478 4320w" sizes="376.2768777614138px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_180x.png?v=1630405478 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_360x.png?v=1630405478 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_540x.png?v=1630405478 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_720x.png?v=1630405478 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_900x.png?v=1630405478 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1080x.png?v=1630405478 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1296x.png?v=1630405478 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1512x.png?v=1630405478 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1728x.png?v=1630405478 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1944x.png?v=1630405478 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2160x.png?v=1630405478 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2376x.png?v=1630405478 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2592x.png?v=1630405478 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2808x.png?v=1630405478 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_3024x.png?v=1630405478 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_4320x.png?v=1630405478 4320w" />
                                                                </div>
                                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                            </div>


                                                        </a>
                                                        <a className="btn" href="/blogs/news/5-sustainable-gifts-to-options-for-this-festive-season">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>

                                                    <div className="articleContent">
                                                        <div className="blogTitle">
                                                            <a href="/blogs/news" title="Blog">Blog</a>
                                                        </div>
                                                        <h3 className="articleTitle">
                                                            <a href="/blogs/news/5-sustainable-gifts-to-options-for-this-festive-season">5 Sustainable gifts to options for this festive season</a>
                                                        </h3>
                                                        <div className="articleMeta d-flex mb20">


                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>August 31, 2021</span>
                                                        </div>
                                                        <div className="articleDesc">

                                                            Festive season is always special, filled with lots of laughter with your family and friends coupled with tasty food and fun customs. But what makes it even...

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sp-12 col-xs-6 col-md-4">
                                                <div className="blogArticle mb20 pb-md-30">

                                                    <div className="articleImage">
                                                        <a href="/blogs/news/now-trending-my-boyfriend-s-t-shirt">


                                                            <div className="p-relative">
                                                                <div className="product-card__image" style={{ paddingTop: "149.83333333333334%" }}>
                                                                    <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6674082313681868" data-ratio="0.6674082313681868" data-sizes="auto" alt="My boyfriend's t-shirt by SuRC" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_180x.jpg?v=1629891747 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_360x.jpg?v=1629891747 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_540x.jpg?v=1629891747 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_720x.jpg?v=1629891747 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_900x.jpg?v=1629891747 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1080x.jpg?v=1629891747 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1296x.jpg?v=1629891747 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1512x.jpg?v=1629891747 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1728x.jpg?v=1629891747 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1944x.jpg?v=1629891747 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2160x.jpg?v=1629891747 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2376x.jpg?v=1629891747 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2592x.jpg?v=1629891747 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2808x.jpg?v=1629891747 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_3024x.jpg?v=1629891747 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_4320x.jpg?v=1629891747 4320w" sizes="376.4182424916574px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_180x.jpg?v=1629891747 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_360x.jpg?v=1629891747 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_540x.jpg?v=1629891747 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_720x.jpg?v=1629891747 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_900x.jpg?v=1629891747 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1080x.jpg?v=1629891747 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1296x.jpg?v=1629891747 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1512x.jpg?v=1629891747 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1728x.jpg?v=1629891747 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1944x.jpg?v=1629891747 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2160x.jpg?v=1629891747 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2376x.jpg?v=1629891747 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2592x.jpg?v=1629891747 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2808x.jpg?v=1629891747 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_3024x.jpg?v=1629891747 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_4320x.jpg?v=1629891747 4320w" />
                                                                </div>
                                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                            </div>


                                                        </a>
                                                        <a className="btn" href="/blogs/news/now-trending-my-boyfriend-s-t-shirt">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>

                                                    <div className="articleContent">
                                                        <div className="blogTitle">
                                                            <a href="/blogs/news" title="Blog">Blog</a>
                                                        </div>
                                                        <h3 className="articleTitle">
                                                            <a href="/blogs/news/now-trending-my-boyfriend-s-t-shirt">Now trending | My boyfriend’s t-shirt</a>
                                                        </h3>
                                                        <div className="articleMeta d-flex mb20">


                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>August 27, 2021</span>
                                                        </div>
                                                        <div className="articleDesc">

                                                            What is the first thought you have when you hear “My boyfriend’s t-shirt”? Is it - Casual, loose, and super comfortable t-shirt? We come across so many...

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sp-12 col-xs-6 col-md-4">
                                                <div className="blogArticle mb20 pb-md-30">

                                                    <div className="articleImage">
                                                        <a href="/blogs/news/5-sustainable-top-wear-one-must-have-in-their-wardrobe">


                                                            <div className="p-relative">
                                                                <div className="product-card__image" style={{ paddingTop: "149.83333333333334%" }}>
                                                                    <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6674082313681868" data-ratio="0.6674082313681868" data-sizes="auto" alt="sustainable top-wear" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_180x.jpg?v=1629888239 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_360x.jpg?v=1629888239 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_540x.jpg?v=1629888239 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_720x.jpg?v=1629888239 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_900x.jpg?v=1629888239 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1080x.jpg?v=1629888239 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1296x.jpg?v=1629888239 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1512x.jpg?v=1629888239 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1728x.jpg?v=1629888239 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1944x.jpg?v=1629888239 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2160x.jpg?v=1629888239 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2376x.jpg?v=1629888239 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2592x.jpg?v=1629888239 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2808x.jpg?v=1629888239 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_3024x.jpg?v=1629888239 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_4320x.jpg?v=1629888239 4320w" sizes="376.4182424916574px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_180x.jpg?v=1629888239 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_360x.jpg?v=1629888239 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_540x.jpg?v=1629888239 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_720x.jpg?v=1629888239 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_900x.jpg?v=1629888239 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1080x.jpg?v=1629888239 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1296x.jpg?v=1629888239 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1512x.jpg?v=1629888239 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1728x.jpg?v=1629888239 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1944x.jpg?v=1629888239 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2160x.jpg?v=1629888239 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2376x.jpg?v=1629888239 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2592x.jpg?v=1629888239 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2808x.jpg?v=1629888239 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_3024x.jpg?v=1629888239 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_4320x.jpg?v=1629888239 4320w" />
                                                                </div>
                                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                            </div>


                                                        </a>
                                                        <a className="btn" href="/blogs/news/5-sustainable-top-wear-one-must-have-in-their-wardrobe">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>

                                                    <div className="articleContent">
                                                        <div className="blogTitle">
                                                            <a href="/blogs/news" title="Blog">Blog</a>
                                                        </div>
                                                        <h3 className="articleTitle">
                                                            <a href="/blogs/news/5-sustainable-top-wear-one-must-have-in-their-wardrobe">5 sustainable top-wear one must have in their wardrobe</a>
                                                        </h3>
                                                        <div className="articleMeta d-flex mb20">


                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>August 25, 2021</span>
                                                        </div>
                                                        <div className="articleDesc">

                                                            A sustainable lifestyle implies making every choice keeping in mind the wellness of people and other elements of the planet. Fashion comprises clothes and accessories. Sustainable fashion...

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sp-12 col-xs-6 col-md-4">
                                                <div className="blogArticle mb20 pb-md-30">

                                                    <div className="articleImage">
                                                        <a href="/blogs/news/key-things-to-know-before-going-zero-waste">


                                                            <div className="p-relative">
                                                                <div className="product-card__image" style={{ paddingTop: "75.0%" }}>
                                                                    <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="1.3333333333333333" data-ratio="1.3333333333333333" data-sizes="auto" alt="Zero waste lifestyle for beginners - tips &amp; tricks" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_180x.png?v=1628834553 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_360x.png?v=1628834553 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_540x.png?v=1628834553 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_720x.png?v=1628834553 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_900x.png?v=1628834553 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1080x.png?v=1628834553 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1296x.png?v=1628834553 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1512x.png?v=1628834553 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1728x.png?v=1628834553 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1944x.png?v=1628834553 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2160x.png?v=1628834553 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2376x.png?v=1628834553 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2592x.png?v=1628834553 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2808x.png?v=1628834553 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_3024x.png?v=1628834553 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_4320x.png?v=1628834553 4320w" sizes="375.99999999999994px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_180x.png?v=1628834553 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_360x.png?v=1628834553 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_540x.png?v=1628834553 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_720x.png?v=1628834553 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_900x.png?v=1628834553 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1080x.png?v=1628834553 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1296x.png?v=1628834553 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1512x.png?v=1628834553 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1728x.png?v=1628834553 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1944x.png?v=1628834553 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2160x.png?v=1628834553 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2376x.png?v=1628834553 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2592x.png?v=1628834553 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2808x.png?v=1628834553 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_3024x.png?v=1628834553 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_4320x.png?v=1628834553 4320w" />
                                                                </div>
                                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                            </div>


                                                        </a>
                                                        <a className="btn" href="/blogs/news/key-things-to-know-before-going-zero-waste">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>

                                                    <div className="articleContent">
                                                        <div className="blogTitle">
                                                            <a href="/blogs/news" title="Blog">Blog</a>
                                                        </div>
                                                        <h3 className="articleTitle">
                                                            <a href="/blogs/news/key-things-to-know-before-going-zero-waste">Key things to know before going zero waste</a>
                                                        </h3>
                                                        <div className="articleMeta d-flex mb20">


                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>August 16, 2021</span>
                                                        </div>
                                                        <div className="articleDesc">

                                                            After the Swachh Bharat campaign launched nationwide, India has become more aware of cleanliness and hygiene. We have finally started to learn how to segregate dry and...

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="velaPaginationWrap clearfix">
                                            <nav className="velaPagination  pull-left">
                                                <ul className="pagination">






                                                    <li className="active" onClick={() => handletab(1)}><span>1</span></li>
                                                    <li className="active" onClick={() => handletab(2)}><span>2</span></li>
                                                    <li className="pagiNext" onClick={() => handletab(2)}>
                                                        <a>
                                                            <FaAngleDoubleRight color='white' />
                                                        </a>


                                                    </li>
                                                    {/* <button className={showtab === 1 ? "changeView changeViewGrid changeViewActive " : "changeView changeViewList"} onClick={() => handletab(1)} type="button" >
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
                            </button> */}

                                                </ul>
                                                {/* <ul className='pagination'>
                            <Stack spacing={2}>

                                <Pagination count={2} variant="outlined" color="primary" />

                            </Stack>
                        </ul> */}
                                            </nav>




                                            <div className="itemPaginate pull-right"><span>Showing 1-6</span> of 12 Results</div>
                                        </div>
                                    </div></div>
                                </div></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    :

                    <section id="pageContent" className="pageBlogContent mb30">

                        <div className="container">
                            <div className="velaBlogWrap">
                                <div id="shopify-section-vela-template-blog" className="shopify-section"><div className="row"><div className="col-xs-12">
                                    <div className="blogContainer"><h1 className="velaBlogTitle">Blog</h1><div className="blogListArticle blogGridTemplate">

                                        <div className="rowFlexMargin rowFlex">

                                            <div className="col-sp-12 col-xs-6 col-md-4">
                                                <div className="blogArticle mb20 pb-md-30">

                                                    <div className="articleImage">
                                                        <a href="/blogs/news">


                                                            <div className="p-relative">
                                                                <div className="product-card__image" style={{ paddingTop: "75.0%" }}>
                                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="1.3333333333333333" data-ratio="1.3333333333333333" data-sizes="auto" alt="Who is a minimalist traveler?" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_180x.png?v=1631703204 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_360x.png?v=1631703204 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_540x.png?v=1631703204 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_720x.png?v=1631703204 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_900x.png?v=1631703204 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1080x.png?v=1631703204 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1296x.png?v=1631703204 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1512x.png?v=1631703204 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1728x.png?v=1631703204 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1944x.png?v=1631703204 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2160x.png?v=1631703204 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2376x.png?v=1631703204 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2592x.png?v=1631703204 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2808x.png?v=1631703204 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_3024x.png?v=1631703204 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_4320x.png?v=1631703204 4320w" sizes="375.99999999999994px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_180x.png?v=1631703204 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_360x.png?v=1631703204 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_540x.png?v=1631703204 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_720x.png?v=1631703204 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_900x.png?v=1631703204 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1080x.png?v=1631703204 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1296x.png?v=1631703204 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1512x.png?v=1631703204 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1728x.png?v=1631703204 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1944x.png?v=1631703204 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2160x.png?v=1631703204 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2376x.png?v=1631703204 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2592x.png?v=1631703204 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2808x.png?v=1631703204 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_3024x.png?v=1631703204 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_4320x.png?v=1631703204 4320w" />
                                                                </div>
                                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                            </div>


                                                        </a>
                                                        <a className="btn" href="/blogs/news/are-you-a-minimalist-traveler-here-are-a-few-tips">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>

                                                    <div className="articleContent">
                                                        <div className="blogTitle">
                                                            <a href="/blogs/news" title="Blog">Blog</a>
                                                        </div>
                                                        <h3 className="articleTitle">
                                                            <a href="/blogs/news/are-you-a-minimalist-traveler-here-are-a-few-tips">Are you a Minimalist Traveler? Here are a few tips!</a>
                                                        </h3>
                                                        <div className="articleMeta d-flex mb20">

                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>September 15, 2021</span>
                                                        </div>
                                                        <div className="articleDesc">

                                                            Imagine the plight of a traveler who has to unload a few of his favourite things at the airport because of luggage restrictions. Haven’t we all been...

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sp-12 col-xs-6 col-md-4">
                                                <div className="blogArticle mb20 pb-md-30">

                                                    <div className="articleImage">
                                                        <a href="/blogs/news/sustainable-dresses-you-need-in-your-closet">


                                                            <div className="p-relative">
                                                                <div className="product-card__image" style={{ paddingTop: "149.83333333333334%" }}>
                                                                    <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6674082313681868" data-ratio="0.6674082313681868" data-sizes="auto" alt="What are the best ways to build an ethical &amp; eco-conscious mini closet" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_180x.jpg?v=1630505977 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_360x.jpg?v=1630505977 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_540x.jpg?v=1630505977 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_720x.jpg?v=1630505977 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_900x.jpg?v=1630505977 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1080x.jpg?v=1630505977 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1296x.jpg?v=1630505977 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1512x.jpg?v=1630505977 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1728x.jpg?v=1630505977 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1944x.jpg?v=1630505977 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2160x.jpg?v=1630505977 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2376x.jpg?v=1630505977 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2592x.jpg?v=1630505977 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2808x.jpg?v=1630505977 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_3024x.jpg?v=1630505977 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_4320x.jpg?v=1630505977 4320w" sizes="376.4182424916574px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_180x.jpg?v=1630505977 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_360x.jpg?v=1630505977 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_540x.jpg?v=1630505977 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_720x.jpg?v=1630505977 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_900x.jpg?v=1630505977 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1080x.jpg?v=1630505977 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1296x.jpg?v=1630505977 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1512x.jpg?v=1630505977 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1728x.jpg?v=1630505977 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1944x.jpg?v=1630505977 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2160x.jpg?v=1630505977 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2376x.jpg?v=1630505977 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2592x.jpg?v=1630505977 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2808x.jpg?v=1630505977 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_3024x.jpg?v=1630505977 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_4320x.jpg?v=1630505977 4320w" />
                                                                </div>
                                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                            </div>


                                                        </a>
                                                        <a className="btn" href="/blogs/news/sustainable-dresses-you-need-in-your-closet">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>

                                                    <div className="articleContent">
                                                        <div className="blogTitle">
                                                            <a href="/blogs/news" title="Blog">Blog</a>
                                                        </div>
                                                        <h3 className="articleTitle">
                                                            <a href="/blogs/news/sustainable-dresses-you-need-in-your-closet">Sustainable dresses you need in your closet</a>
                                                        </h3>
                                                        <div className="articleMeta d-flex mb20">


                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>September 01, 2021</span>
                                                        </div>
                                                        <div className="articleDesc">

                                                            We often worry that while trying to buy sustainable fashion &amp; cutting down on our closet’s carbon footprint, we’d have to give up on clothes that are...

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sp-12 col-xs-6 col-md-4">
                                                <div className="blogArticle mb20 pb-md-30">

                                                    <div className="articleImage">
                                                        <a href="/blogs/news/5-sustainable-gifts-to-options-for-this-festive-season">


                                                            <div className="p-relative">
                                                                <div className="product-card__image" style={{ paddingTop: "74.94481236203092%" }}>
                                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="1.3343151693667157" data-ratio="1.3343151693667157" data-sizes="auto" alt="Sustainable gifting options for festivals" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_180x.png?v=1630405478 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_360x.png?v=1630405478 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_540x.png?v=1630405478 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_720x.png?v=1630405478 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_900x.png?v=1630405478 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1080x.png?v=1630405478 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1296x.png?v=1630405478 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1512x.png?v=1630405478 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1728x.png?v=1630405478 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1944x.png?v=1630405478 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2160x.png?v=1630405478 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2376x.png?v=1630405478 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2592x.png?v=1630405478 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2808x.png?v=1630405478 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_3024x.png?v=1630405478 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_4320x.png?v=1630405478 4320w" sizes="376.2768777614138px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_180x.png?v=1630405478 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_360x.png?v=1630405478 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_540x.png?v=1630405478 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_720x.png?v=1630405478 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_900x.png?v=1630405478 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1080x.png?v=1630405478 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1296x.png?v=1630405478 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1512x.png?v=1630405478 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1728x.png?v=1630405478 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_1944x.png?v=1630405478 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2160x.png?v=1630405478 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2376x.png?v=1630405478 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2592x.png?v=1630405478 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_2808x.png?v=1630405478 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_3024x.png?v=1630405478 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/surc_4320x.png?v=1630405478 4320w" />
                                                                </div>
                                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                            </div>


                                                        </a>
                                                        <a className="btn" href="/blogs/news/5-sustainable-gifts-to-options-for-this-festive-season">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>

                                                    <div className="articleContent">
                                                        <div className="blogTitle">
                                                            <a href="/blogs/news" title="Blog">Blog</a>
                                                        </div>
                                                        <h3 className="articleTitle">
                                                            <a href="/blogs/news/5-sustainable-gifts-to-options-for-this-festive-season">5 Sustainable gifts to options for this festive season</a>
                                                        </h3>
                                                        <div className="articleMeta d-flex mb20">


                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>August 31, 2021</span>
                                                        </div>
                                                        <div className="articleDesc">

                                                            Festive season is always special, filled with lots of laughter with your family and friends coupled with tasty food and fun customs. But what makes it even...

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sp-12 col-xs-6 col-md-4">
                                                <div className="blogArticle mb20 pb-md-30">

                                                    <div className="articleImage">
                                                        <a href="/blogs/news/now-trending-my-boyfriend-s-t-shirt">


                                                            <div className="p-relative">
                                                                <div className="product-card__image" style={{ paddingTop: "149.83333333333334%" }}>
                                                                    <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6674082313681868" data-ratio="0.6674082313681868" data-sizes="auto" alt="My boyfriend's t-shirt by SuRC" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_180x.jpg?v=1629891747 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_360x.jpg?v=1629891747 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_540x.jpg?v=1629891747 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_720x.jpg?v=1629891747 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_900x.jpg?v=1629891747 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1080x.jpg?v=1629891747 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1296x.jpg?v=1629891747 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1512x.jpg?v=1629891747 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1728x.jpg?v=1629891747 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1944x.jpg?v=1629891747 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2160x.jpg?v=1629891747 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2376x.jpg?v=1629891747 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2592x.jpg?v=1629891747 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2808x.jpg?v=1629891747 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_3024x.jpg?v=1629891747 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_4320x.jpg?v=1629891747 4320w" sizes="376.4182424916574px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_180x.jpg?v=1629891747 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_360x.jpg?v=1629891747 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_540x.jpg?v=1629891747 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_720x.jpg?v=1629891747 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_900x.jpg?v=1629891747 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1080x.jpg?v=1629891747 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1296x.jpg?v=1629891747 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1512x.jpg?v=1629891747 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1728x.jpg?v=1629891747 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_1944x.jpg?v=1629891747 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2160x.jpg?v=1629891747 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2376x.jpg?v=1629891747 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2592x.jpg?v=1629891747 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_2808x.jpg?v=1629891747 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_3024x.jpg?v=1629891747 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1Tb5aIOHFLa9JpSGESxbWoEtfAdKyszH9_3ab22af3-192f-4cbd-8a64-9755329163a4_4320x.jpg?v=1629891747 4320w" />
                                                                </div>
                                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                            </div>


                                                        </a>
                                                        <a className="btn" href="/blogs/news/now-trending-my-boyfriend-s-t-shirt">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>

                                                    <div className="articleContent">
                                                        <div className="blogTitle">
                                                            <a href="/blogs/news" title="Blog">Blog</a>
                                                        </div>
                                                        <h3 className="articleTitle">
                                                            <a href="/blogs/news/now-trending-my-boyfriend-s-t-shirt">Now trending | My boyfriend’s t-shirt</a>
                                                        </h3>
                                                        <div className="articleMeta d-flex mb20">


                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>August 27, 2021</span>
                                                        </div>
                                                        <div className="articleDesc">

                                                            What is the first thought you have when you hear “My boyfriend’s t-shirt”? Is it - Casual, loose, and super comfortable t-shirt? We come across so many...

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sp-12 col-xs-6 col-md-4">
                                                <div className="blogArticle mb20 pb-md-30">

                                                    <div className="articleImage">
                                                        <a href="/blogs/news/5-sustainable-top-wear-one-must-have-in-their-wardrobe">


                                                            <div className="p-relative">
                                                                <div className="product-card__image" style={{ paddingTop: "149.83333333333334%" }}>
                                                                    <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6674082313681868" data-ratio="0.6674082313681868" data-sizes="auto" alt="sustainable top-wear" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_180x.jpg?v=1629888239 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_360x.jpg?v=1629888239 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_540x.jpg?v=1629888239 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_720x.jpg?v=1629888239 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_900x.jpg?v=1629888239 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1080x.jpg?v=1629888239 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1296x.jpg?v=1629888239 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1512x.jpg?v=1629888239 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1728x.jpg?v=1629888239 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1944x.jpg?v=1629888239 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2160x.jpg?v=1629888239 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2376x.jpg?v=1629888239 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2592x.jpg?v=1629888239 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2808x.jpg?v=1629888239 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_3024x.jpg?v=1629888239 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_4320x.jpg?v=1629888239 4320w" sizes="376.4182424916574px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_180x.jpg?v=1629888239 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_360x.jpg?v=1629888239 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_540x.jpg?v=1629888239 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_720x.jpg?v=1629888239 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_900x.jpg?v=1629888239 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1080x.jpg?v=1629888239 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1296x.jpg?v=1629888239 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1512x.jpg?v=1629888239 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1728x.jpg?v=1629888239 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_1944x.jpg?v=1629888239 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2160x.jpg?v=1629888239 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2376x.jpg?v=1629888239 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2592x.jpg?v=1629888239 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_2808x.jpg?v=1629888239 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_3024x.jpg?v=1629888239 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/WhatsApp_Image_2021-07-08_at_5.53.33_PM_4320x.jpg?v=1629888239 4320w" />
                                                                </div>
                                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                            </div>


                                                        </a>
                                                        <a className="btn" href="/blogs/news/5-sustainable-top-wear-one-must-have-in-their-wardrobe">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>

                                                    <div className="articleContent">
                                                        <div className="blogTitle">
                                                            <a href="/blogs/news" title="Blog">Blog</a>
                                                        </div>
                                                        <h3 className="articleTitle">
                                                            <a href="/blogs/news/5-sustainable-top-wear-one-must-have-in-their-wardrobe">5 sustainable top-wear one must have in their wardrobe</a>
                                                        </h3>
                                                        <div className="articleMeta d-flex mb20">


                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>August 25, 2021</span>
                                                        </div>
                                                        <div className="articleDesc">

                                                            A sustainable lifestyle implies making every choice keeping in mind the wellness of people and other elements of the planet. Fashion comprises clothes and accessories. Sustainable fashion...

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sp-12 col-xs-6 col-md-4">
                                                <div className="blogArticle mb20 pb-md-30">

                                                    <div className="articleImage">
                                                        <a href="/blogs/news/key-things-to-know-before-going-zero-waste">


                                                            <div className="p-relative">
                                                                <div className="product-card__image" style={{ paddingTop: "75.0%" }}>
                                                                    <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="1.3333333333333333" data-ratio="1.3333333333333333" data-sizes="auto" alt="Zero waste lifestyle for beginners - tips &amp; tricks" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_180x.png?v=1628834553 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_360x.png?v=1628834553 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_540x.png?v=1628834553 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_720x.png?v=1628834553 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_900x.png?v=1628834553 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1080x.png?v=1628834553 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1296x.png?v=1628834553 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1512x.png?v=1628834553 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1728x.png?v=1628834553 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1944x.png?v=1628834553 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2160x.png?v=1628834553 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2376x.png?v=1628834553 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2592x.png?v=1628834553 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2808x.png?v=1628834553 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_3024x.png?v=1628834553 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_4320x.png?v=1628834553 4320w" sizes="375.99999999999994px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_180x.png?v=1628834553 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_360x.png?v=1628834553 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_540x.png?v=1628834553 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_720x.png?v=1628834553 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_900x.png?v=1628834553 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1080x.png?v=1628834553 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1296x.png?v=1628834553 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1512x.png?v=1628834553 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1728x.png?v=1628834553 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_1944x.png?v=1628834553 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2160x.png?v=1628834553 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2376x.png?v=1628834553 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2592x.png?v=1628834553 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_2808x.png?v=1628834553 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_3024x.png?v=1628834553 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_64cbeb87-71bf-4a03-a18f-257799ac552c_4320x.png?v=1628834553 4320w" />
                                                                </div>
                                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                            </div>


                                                        </a>
                                                        <a className="btn" href="/blogs/news/key-things-to-know-before-going-zero-waste">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>

                                                    <div className="articleContent">
                                                        <div className="blogTitle">
                                                            <a href="/blogs/news" title="Blog">Blog</a>
                                                        </div>
                                                        <h3 className="articleTitle">
                                                            <a href="/blogs/news/key-things-to-know-before-going-zero-waste">Key things to know before going zero waste</a>
                                                        </h3>
                                                        <div className="articleMeta d-flex mb20">


                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>August 16, 2021</span>
                                                        </div>
                                                        <div className="articleDesc">

                                                            After the Swachh Bharat campaign launched nationwide, India has become more aware of cleanliness and hygiene. We have finally started to learn how to segregate dry and...

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="velaPaginationWrap clearfix">
                                            <nav className="velaPagination  pull-left">
                                                <ul className="pagination">

                                                    <li className="disabled">
                                                        <span><i className="fa fa-angle-double-left"></i>

                                                        </span>
                                                    </li>


                                                    <li className="pagiNext" onClick={() => handletab(1)}>
                                                        <a >
                                                            <FaAngleDoubleLeft color='white' />
                                                        </a>
                                                    </li>

                                                    <li className="active" onClick={() => handletab(1)}><span>1</span></li>
                                                    <li className="active" onClick={() => handletab(2)}><span>2</span></li>
                                                </ul>

                                            </nav>




                                            <div className="itemPaginate pull-right"><span>Showing 6-12</span> of 12 Results</div>
                                        </div>

                                    </div></div>
                                </div></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                }


                <Footer />
                <ScrollButton/>

            </div>




        </>
    )
}