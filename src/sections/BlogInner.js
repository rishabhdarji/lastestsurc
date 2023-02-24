import React from 'react'
import Footer from './Footer';
import ScrollButton from './GoToTop/GoToTop';
import { Inner } from './InnerHeader';

const BlogInner = () => {
    return (
   <>
    <div className="absolute-header">
       
       <Inner/>
   <br></br>
   <br></br>
            <section id="pageContent">
                <div className="container">
                    <div className="velaArticleWrap mb30">
                        <div id="shopify-section-vela-template-article" className="shopify-section"><div className="row">


                            <div className="col-xs-12 col-sm-8 col-md-9 mb30">
                                <article className="articleItem" itemScope="" itemType="http://schema.org/Article">
                                    <meta itemScope="" itemProp="mainEntityOfPage" itemType="https://schema.org/WebPage" itemID="https://google.com/article"/>
                                        <meta itemProp="headline" content="Are you a Minimalist Traveler? Here are a few tips!"/>
                                            <meta itemProp="author" content="SuRC ."/>
                                                <meta itemProp="datePublished" content="15 Sep, 2021"/>
                                                    <meta itemProp="dateModified" content="15 Sep, 2021"/>
                                                        <div className="hidden" itemProp="image" itemScope="" itemType="https://schema.org/ImageObject">
                                                            <meta itemProp="url" content="http://cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656.png?v=1631703204"/>
                                                                <meta itemProp="width" content="1170"/>
                                                                    <meta itemProp="height" content="800"/>
                                                                    
                                                                    
                                                                    </div>
                                                                    
                                                                    
                                                                    <div className="hidden" itemProp="publisher" itemScope="" itemType="https://schema.org/Organization">
                                                                        <div itemProp="logo" itemScope="" itemType="https://schema.org/ImageObject">
                                                                            <meta itemProp="url" content="http://cdn.shopify.com/s/files/1/0535/4812/2292/files/logo.png?1450" />
                                                                         
                                                                         
                                                                          </div>
                                                                         
                                                                         <meta itemProp="name" content="SuRC ."/>
                                                                    </div>
                                                                    <header className="articleHeader"><div className="articleFeaturedImage">


                                                                        <div className="p-relative">
                                                                            <div className="product-card__image" style={{paddingTop:"75.0%"}}>
                                                                                <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="1.3333333333333333" data-ratio="1.3333333333333333" data-sizes="auto" alt="Who is a minimalist traveler?" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_180x.png?v=1631703204 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_360x.png?v=1631703204 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_540x.png?v=1631703204 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_720x.png?v=1631703204 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_900x.png?v=1631703204 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1080x.png?v=1631703204 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1296x.png?v=1631703204 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1512x.png?v=1631703204 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1728x.png?v=1631703204 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1944x.png?v=1631703204 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2160x.png?v=1631703204 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2376x.png?v=1631703204 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2592x.png?v=1631703204 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2808x.png?v=1631703204 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_3024x.png?v=1631703204 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_4320x.png?v=1631703204 4320w" sizes="885px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_180x.png?v=1631703204 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_360x.png?v=1631703204 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_540x.png?v=1631703204 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_720x.png?v=1631703204 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_900x.png?v=1631703204 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1080x.png?v=1631703204 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1296x.png?v=1631703204 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1512x.png?v=1631703204 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1728x.png?v=1631703204 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_1944x.png?v=1631703204 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2160x.png?v=1631703204 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2376x.png?v=1631703204 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2592x.png?v=1631703204 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_2808x.png?v=1631703204 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_3024x.png?v=1631703204 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/1_35f19558-fd6c-4b57-ab1a-af7d77d61656_4320x.png?v=1631703204 4320w" />
                                                                            </div>
                                                                            <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                                        </div>


                                                                    </div><h1 className="velaArticleTitle">Are you a Minimalist Traveler? Here are a few tips!</h1>
                                                                        <div className="articleMeta d-flex mb20">

                                                                            {/* <span className="articleAuthor"><span>By</span> SuRC .</span> */}
                                                                            {/* <span>/</span> */}
                                                                            <span className="articlePublish pull-left"><i className="fa fa-calendar-o" aria-hidden="true"></i>September 15, 2021</span>
                                                                        </div>
                                                                    </header>
                                                                    <div className="articleDetailContent">
                                                                        <div className="rte" itemProp="description">
                                                                            <p><span style={{ fontWeight: "400"}}>Imagine the plight of a traveler who has to unload a few of his favourite things at the airport because of luggage restrictions. Haven’t we all been into this situation? On that very day we promise ourselves to never be over indulgent, and stuff less next time to ensure that we do not have to relive this torture. How long did that promise last?</span></p>
                                                                            <p><span style={{ fontWeight: "400"}}>It’s time to make a switch and stop worrying about the things you have to carry and instead concentrate on packing minimalistically and carry sustainable products to enjoy a stress free, fun enhanced trip. Wondering how? Here is a list of hows’ and whys’ of&nbsp; less is more while you are traveling.&nbsp;&nbsp;</span></p>
                                                                            <p><b>Benefits of minimal packing</b></p>
                                                                            <span style={{fontWeight: "bold"}}>1. Few clothes, one pair of shoes- good to go</span><b><br></br></b>
                                                                        <p><span style={{ fontWeight: "400"}}>This may seem absurd but trust us, going minimalist with your clothes and footwear will help you skip a number of nuisances while you are on travel. Firstly, no digging for perfectly matched socks or shoes because you’ve packed things that look well with everything. Secondly, every dress spells comfort so there is no time lost in deciding what to wear. Thirdly, no extra outfits mean a lighter bag to carry wherever you go.&nbsp;</span></p>
                                                                        <span style={{fontWeight: "bold"}}>2. One backpack or a suitcase</span><br></br>
                                                                    <p><span style={{ fontWeight:" 400"}}>Don't be horrified at our suggestion but consider how easy it would be to surpass the long queue at check-in and directly move on to the security line. It is also easier to carry one bag, be it a bus or a train.</span></p>
                                                                    <div style={{textAlign: "start"}}><img src="https://cdn.shopify.com/s/files/1/0535/4812/2292/files/2_c5ba5123-6f4a-49a8-a8d6-2016129ecf45_480x480.png?v=1631702959" alt="Why should you carry one bag while traveling?" style={{float: "none" }}/></div>
                                                                    <p><span style={{ fontWeight: "400"}}>This will save you time and energy both. Traveling light also means no paying extra for bags and avoiding the unnecessary fuss at the baggage claim. Walkout with your suitcase in tow towards the exit as fast as you can.&nbsp;&nbsp;</span></p>
                                                                    <p><b>How do you do minimal packing?</b></p>
                                                                    <p><span style={{ fontWeight: "400"}}>Here a few pointers to help you pack minimally:</span></p>
                                                                    <ul>
                                                                        <li style={{ fontWeight: "400"}}>
                                                                            <b>Decide what to pack:</b><span style={{ fontWeight: "400"}}> Start with getting yourself a small suitcase and making a list of must haves for your trip. Be practical and it would serve you well in packing items you don’t need.</span>
                                                                        </li>
                                                                        <li style={{ fontWeight: "400"}}>
                                                                            <b>Pack for the weather:</b><span style={{ fontWeight: "400"}}> Do keep a tab of the weather forecast of the place you are visiting and pack accordingly.&nbsp;</span>
                                                                        </li>
                                                                        <li style={{ fontWeight: "400"}}>
                                                                            <b>Eliminate the maybes:</b><span style={{ fontWeight: "400"}}> The ‘what if’ situation often ends up making the bag heavy with stuff that is not necessarily needed. We often tend to buy clothes we like but end up never wearing them. Avoiding such and unnecessary hoarding saves you the trouble of making a decision while packing your clothes. So eliminate all the maybes and be sure of what you will need on your trip.</span>
                                                                        </li>
                                                                        <li style={{ fontWeight: "400"}}>
                                                                            <b>Versatile clothing:</b><span style={{ fontWeight: "400"}}> Invest in clothes that are wrinkle free, do not need much wash and serve well on multiple occasions.</span><a><span style={{ fontWeight: "400"}}> Sustainable fashion </span></a><span style={{ fontWeight: "400"}}>in this regard offers a wide range of outfits that serve well for multiple purposes.</span>
                                                                        </li>
                                                                        <li style={{ fontWeight: "400"}}>
                                                                            <b>Plan your outfits:</b><span style={{ fontWeight: "400"}}> Plan outfits as per the activities in your itinerary to ensure you have all the essentials and are not loaded with unnecessary items. Planning outfits also helps you to find the perfect footwear that goes with every dress you have packed.</span>
                                                                        </li>
                                                                    </ul>
                                                                    <p><span style={{ fontWeight: "400"}}>Top sustainable picks for the minimalist travel wardrobe</span></p>
                                                                    <p><b>&gt; Dress</b><span style={{ fontWeight: "400"}}> - A timeless, classNameic dress that is perfect for a dinner date as well as the early morning treks is a must have. We love </span><a><span style={{ fontWeight: "400"}}>Easy Dress</span></a><span style={{ fontWeight: "400"}}>, effortlessly chic that pairs up well with everything.</span></p>
                                                                    <div style={{textAlign: "start"}}><a target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0535/4812/2292/files/SuRC_Blog_Sep_21_2_480x480.jpg?v=1631702984" alt="Where can I get a sustainable little black dress?" style={{float: "none"}} /></a></div>
                                                                    <p><b>&gt; Crop Top</b><span>- A crop top is an essential you cannot miss out. The laid back comfort, the chic look that our </span><a><span>Utility Crop Top</span></a><span> offers is the perfect amalgamation that every minimalist swears by.</span><span><br></br></span><b></b></p>
                                                                <p><b>&gt; Pant</b><span>- There are infinite ways to team up the cozy pants and their easy styling ensures you can wear the same piece wherever you go all round the year. Try </span><a><span>Everyday Pants</span></a><span> and you will thank us for sure.</span><span><br></br></span></p>
                                                            <p><span style={{ fontWeight: "400"}}><b>&gt; Henley Top- </b>This cuddly soft basic<a> Henley top</a> is a winter staple you must own for snuggling your way into all those winter countries you are planning to visit.</span></p>
                                                            <div style={{textAlign: "start"}}><a target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0535/4812/2292/files/SuRC_Blog_Sep_21_1_480x480.jpg?v=1631702996" alt="Shop for the perfect sustainable top" style={{float: "none;"}} /></a></div>
                                                            <p><b>Sustainable products to carry on travel</b></p>
                                                            <p><span style={{ fontWeight: "400"}}>Be a responsible tourist and care for the local environment and culture of the place you are visiting. Minimize plastic waste and try to carry products that are reusable and recycled well.</span></p>
                                                            <div style={{textAlign: "start"}}><img src="https://cdn.shopify.com/s/files/1/0535/4812/2292/files/3_3e4456a5-3e2e-489e-ac12-79ed81096083_480x480.png?v=1631703016" alt="How are sustainable products useful?" style={{float: "none"}}/></div>
                                                            <p><span style={{ fontWeight: "400"}}>Some sustainable products to keep in mind while travelling are:</span></p>
                                                            <ul>
                                                                <li style={{ fontWeight: "400"}}>
                                                                    <b>Reusable bottles:</b><span style={{ fontWeight: "400"}}> Ditch the plastic bottles and opt for light weight, non-bulky insulated bottles that work well in any weather.</span>
                                                                </li>
                                                                <li style={{ fontWeight: "400"}}>
                                                                    <b>Bamboo Toothbrushes:</b><span style={{ fontWeight: "400"}}> They are easily recyclable and good for the environment as well as your teeth.</span>
                                                                </li>
                                                                <li style={{ fontWeight: "400"}}>
                                                                    <b>A microfibre towel</b><span style={{ fontWeight: "400"}}> that’s fast drying and is less likely to go in laundry every now and then.</span>
                                                                </li>
                                                                <li style={{ fontWeight: "400"}}>
                                                                    <b>Eco-friendly sanitary products</b><span style={{ fontWeight: "400"}}> that help you feel free as well as the environment from the clutches of plastic that ends up in landfills.&nbsp;</span>
                                                                </li>
                                                            </ul>
                                                            <p><span style={{ fontWeight: "400"}}>Minimalist packing is a habit that you will have to cultivate. So, do not get frustrated and keep trying till you get it right.</span></p>
                                                        </div>
                                                        <div className="articlePostBottom clearfix">


                                                            <div className="articleSocialSharing pull-left">
                                                                <span>Share:</span>
                                                                <div className="articleFacebookShare">
                                                                    <div className="fb-share-button fb_iframe_widget" data-href="https://www.surc.in/blogs/news/are-you-a-minimalist-traveler-here-are-a-few-tips" data-mobile_iframe="true" data-layout="button_count" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&amp;container_width=0&amp;href=https%3A%2F%2Fwww.surc.in%2Fblogs%2Fnews%2Fare-you-a-minimalist-traveler-here-are-a-few-tips&amp;layout=button_count&amp;locale=en_US&amp;mobile_iframe=true&amp;sdk=joey"><span style={{verticalAlign:"bottom", width: "77px", height: "20px"}}><iframe name="f38abca21f83fc" width="1000px" height="1000px" data-testid="fb:share_button Facebook Social Plugin" title="fb:share_button Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.12/plugins/share_button.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfb91e171dcfe24%26domain%3Dwww.surc.in%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.surc.in%252Ff23c62099bad90c%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fwww.surc.in%2Fblogs%2Fnews%2Fare-you-a-minimalist-traveler-here-are-a-few-tips&amp;layout=button_count&amp;locale=en_US&amp;mobile_iframe=true&amp;sdk=joey" style={{border: "none", visibility: "visible" ,width: "77px", height: "20px"}} className=""></iframe></span></div>
                                                                </div>
                                                                <div className="articleTwitterShare">
                                                                    <a className="twitter-share-button" target="_blank">
                                                                        <i className="fa fa-twitter"></i> Tweet
                                                                    </a>
                                                                </div>
                                                            </div></div><div className="articleBoxExtend clearfix"><div className="articleExtend articleExtendLeft"><div className="articleExtendImage">
                                                                <a>


                                                                    <div className="p-relative">
                                                                        <div className="product-card__image" style={{paddingTop:"149.83333333333334%"}}>
                                                                            <img className="product-card__img lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6674082313681868" data-ratio="0.6674082313681868" data-sizes="auto" alt="What are the best ways to build an ethical &amp; eco-conscious mini closet" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_180x.jpg?v=1630505977 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_360x.jpg?v=1630505977 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_540x.jpg?v=1630505977 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_720x.jpg?v=1630505977 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_900x.jpg?v=1630505977 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1080x.jpg?v=1630505977 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1296x.jpg?v=1630505977 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1512x.jpg?v=1630505977 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1728x.jpg?v=1630505977 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1944x.jpg?v=1630505977 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2160x.jpg?v=1630505977 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2376x.jpg?v=1630505977 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2592x.jpg?v=1630505977 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2808x.jpg?v=1630505977 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_3024x.jpg?v=1630505977 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_4320x.jpg?v=1630505977 4320w" sizes="419.79977753058955px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_180x.jpg?v=1630505977 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_360x.jpg?v=1630505977 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_540x.jpg?v=1630505977 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_720x.jpg?v=1630505977 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_900x.jpg?v=1630505977 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1080x.jpg?v=1630505977 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1296x.jpg?v=1630505977 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1512x.jpg?v=1630505977 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1728x.jpg?v=1630505977 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_1944x.jpg?v=1630505977 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2160x.jpg?v=1630505977 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2376x.jpg?v=1630505977 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2592x.jpg?v=1630505977 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_2808x.jpg?v=1630505977 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_3024x.jpg?v=1630505977 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/articles/DSC_1286_4320x.jpg?v=1630505977 4320w" />
                                                                        </div>
                                                                        <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                                                    </div>


                                                                </a>
                                                            </div><div className="articleExtendTitle">
                                                                    <a href="/blogs/news/sustainable-dresses-you-need-in-your-closet">
                                                                        Sustainable dresses you need in your closet
                                                                    </a>
                                                                </div>
                                                                <div className="articleExtendNavText">
                                                                    <a title="">← Older Post</a>
                                                                </div>
                                                            </div></div></div>
                                                </article>

                                            </div>

                                            <aside className="velaSidebar velaBlogSidebar col-xs-12 col-sm-4 col-md-3">
                                                <div className="blogSidebar velaSearchSidebar"><div className="velaContent">
                                                    <form className="formSearchPage formSearchBlogPage" action="/search" method="get">
                                                        <input type="hidden" name="view" value="blog"/>
                                                            <input type="hidden" name="type" value="article"/>
                                                                <div className="input-group">
                                                                    <input type="search" name="q" value="" placeholder="Search our blogs" className="formSearchPageInput form-control"/>
                                                                        <button type="submit" className="formSearchPageButton">
                                                                            <i className="icons icon-magnifier"></i>
                                                                        </button>
                                                                </div>
                                                                <ul className="velaAjaxSearch" style={{display: "none"}}></ul></form>
                                                        </div>
                                                </div><div className="blogSidebar">
                                                        <h4 className="titleSidebar">Recent Articles</h4>
                                                        <div className="velaContent">
                                                            <ul className="listSidebarBlog list-unstyled">

                                                                <li>
                                                                    <a className="titleBlogsidebar" title="Are you a Minimalist Traveler? Here are a few tips!">
                                                                        Are you a Minimalist Traveler? Here are a few tips!
                                                                    </a>
                                                                    <time datetime="2021-09-15">September 15, 2021</time>
                                                                </li>

                                                                <li>
                                                                    <a className="titleBlogsidebar" title="Sustainable dresses you need in your closet">
                                                                        Sustainable dresses you need in your closet
                                                                    </a>
                                                                    <time datetime="2021-09-01">September 01, 2021</time>
                                                                </li>

                                                                <li>
                                                                    <a className="titleBlogsidebar" title="5 Sustainable gifts to options for this festive season">
                                                                        5 Sustainable gifts to options for this festive season
                                                                    </a>
                                                                    <time datetime="2021-08-31">August 31, 2021</time>
                                                                </li>

                                                                <li>
                                                                    <a className="titleBlogsidebar" title="Now trending | My boyfriend’s t-shirt">
                                                                        Now trending | My boyfriend’s t-shirt
                                                                    </a>
                                                                    <time datetime="2021-08-27">August 27, 2021</time>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                            </aside>

                                        </div>

                                        <div id="fb-root" className=" fb_reset"><div style={{position: "absolute", top: "-10000px" ,width: "0px", height: "0px"}}><div></div></div></div>
                                    </div>
                            </div>
                        </div>
                        </section>
                        <Footer/>
                        <ScrollButton/>
                        </div>
                    </>
                    )
}

export default BlogInner;
