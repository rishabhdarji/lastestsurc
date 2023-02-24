import React, { useEffect, useRef, useState } from "react"
import { Link } from 'react-router-dom';
import Logo from "../../snippets/Logo"
import MobileNav from "../../snippets/MobileNav"
import MainNav from "../../snippets/MainNav"
import ShoppingCart from "../../snippets/ShoppingCart"
import CanvasCart from "../../snippets/CanvasCart"
import SearchForm from "../../snippets/SearchForm"
import { useShopify } from "../../hooks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoIosArrowDown } from "react-icons/io";
// import 'font-awesome/css/font-awesome.min.css';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
// import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import './header.css';
import { IoIosClose } from "react-icons/io" 
import { IconName } from "react-icons/fa";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FaUserCircle } from "react-icons/fa";





export default (props) => {


  const { checkoutState, removeLineItem, openCart, openSearch, openCanvasMenu } = useShopify()
  const [counter, setCounter] = useState(0)
  const [open, setOpen] = React.useState(false)

  const [listt, setList] = useState(localStorage.getItem('list')!=null?JSON.parse(localStorage.getItem('list')):[]) 

  var total = 0;
  var totalCount = 0;
 
  const handleRemove = (index) => {
    const newlist = listt.filter((_, i) => i !== index);
    setList(newlist);
    localStorage.setItem('list', JSON.stringify(newlist));
  };

  function showSearch() {
    openSearch();
  }

  function showCart() {
    openCart();
  }
  const handleClickOpen = () => {
    setOpen(true);
    // setCount(count);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function showCanvasMenu() {
    openCanvasMenu();
  }
  const searchicon = () => { return (<FontAwesomeIcon icon="fa fa-search" size="lg" />) };
  useEffect(() => {
    function getCount() {
      let lineItems =
        checkoutState.lineItems && checkoutState.lineItems.length > 0
          ? checkoutState.lineItems
          : []
      let count = 0
      lineItems.forEach((item) => {
        count += item.quantity
        return count
      })
      setCounter(count)
    }

    getCount()
  }, [checkoutState])


  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  // const handleScroll = (elTopOffset, elHeight) => {
  //   if (window.pageYOffset > (elTopOffset + elHeight)) {
  //     setSticky({ isSticky: true, offset: elHeight });
  //   } else {
  //     setSticky({ isSticky: false, offset: 0 });
  //   }
  // };

  // // add/remove scroll event listener
  // useEffect(() => {
  //   var header = headerRef.current.getBoundingClientRect();
  //   const handleScrollEvent = () => {
  //     handleScroll(header.top, header.height)
  //   }

  //   window.addEventListener('scroll', handleScrollEvent);

  //   return () => {
  //     window.removeEventListener('scroll', handleScrollEvent);
  //   };
  // }, []);


  // const [data,setData] = useState([])f

  // useEffect(()=>{
  //     fetch("http://ec2-15-206-244-149.ap-south-1.compute.amazonaws.com/api/categories?limit=28") .then((result)=>{
  //         result.json().then((resp)=>{
  //             console.log("result",resp.data)
  //             setData(resp.data)
  //         })
  //     })
  // },[])
  return (
    <div>
      {/* Header */}
      <header className="header header--type-2" >
        {/* Container */}
        <div id="cb-announement-bar" style={{ zIndex: 9999, position: 'relative', transition: 'margin 1s ease-in-out 0s, opacity 1s ease-in-out 0s, height 1s ease-in-out 0s', opacity: 1, marginTop: '0px' }}>
          <div className="" style={{ width: '100%', top: '0px' }}>
            <div className="WidgetContent_WidgetContainer-sc-y1j1pi-2 bGMCJi stickyContainer animate_animated">
              <div className="WidgetContent__Bar-sc-y1j1pi-0 hLTmmI stickyProductOuterContainer">
                <div className="WidgetContent__ActionDiv-sc-y1j1pi-1 eqVUu stickyAction" style={{ cursor: 'default' }}>
                  <span scale="1" className="Messages__BarMessageContainer-sc-gzeha-0 exEkwk BarMessageContainer">
                    Use SuRC15 at check out to get 15% off on your order.
                  </span>
                  <div scale="1" className="Discount__DiscountContainer-sc-plb2y2-0 cLqruP BarDiscountContainer">
                    SuRC15
                  </div>
                  <div scale="1" className="Button__ButtonStyle-sc-bo3sl0-0 hehHVz BarButtonContainer">
                    Browse collection
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<div style={{ marginTop: sticky.offset }}>
        <div className={`navbar${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
        
        <header id="velaHeader" className="velaHeader headerFixed">
        <section className="headerWrap">
         
          <div classNamem="velaHeaderMain headerMenu">
            <div className="container">
              <div className="headerContent rowFlex flexAlignCenter rowFlexMargin">
                <div className="velaHeaderMobile hidden-lg hidden-xl hidden-md col-xs-3 col-sm-3">
                  <div className="menuBtnMobile d-flex flexAlignCenter">
                    <div id="btnMenuMobile" className="btnMenuMobile">
                      <span className="iconMenu"></span>
                      <span className="iconMenu"></span>
                      <span className="iconMenu"></span>
                      <span className="iconMenu"></span>
                    </div>
                    <a className="velaSearchIcon" href="#velaSearchTop" data-toggle="collapse" title="Search">
                      {searchicon}

                    </a>
                  </div>
                </div>
                <div className="velaHeaderLeft d-flex flexAlignCenter col-xs-6 col-sm-6 col-md-3 col-lg-2">
                  <h1 className="velaLogo" itemScope="" itemType="http://schema.org/Organization"><a href="/" itemProp="url"
                    className="velaLogoLink" style={{ width: '150px', height: '110px', marginRight:"550px" }}><span className="text-hide">Surc</span>


                    <div className="p-relative">
                      <div className="product-card__image" style={{ paddingTop: '73.33333333333334%' }}>
                        <img alt="Image" className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]"
                          sizes="150px" data-aspectratio="1.3636363636363635" data-ratio="1.3636363636363635" data-sizes="auto" srcSet="//cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_180x.png?v=1622872383 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_360x.png?v=1622872383 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_540x.png?v=1622872383 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_720x.png?v=1622872383 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_900x.png?v=1622872383 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_1080x.png?v=1622872383 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_1296x.png?v=1622872383 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_1512x.png?v=1622872383 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_1728x.png?v=1622872383 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_1944x.png?v=1622872383 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_2160x.png?v=1622872383 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_2376x.png?v=1622872383 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_2592x.png?v=1622872383 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_2808x.png?v=1622872383 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_3024x.png?v=1622872383 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/files/logoSurc_7580db79-58b4-434a-a397-d3f070f0ddf9_4320x.png?v=1622872383 4320w" />
                      </div>
                      <div className="placeholder-background placeholder-background--animation" data-image-placeholder="">
                      </div>
                    </div>


                  </a></h1>
                </div>
                <div className="velaHeaderCenter velaMainmenu hidden-xs hidden-sm col-xs-6 col-sm-8 col-md-7 col-lg-8">
                  <section id="velaMegamenu" className="velaMegamenu">
                    <nav className="menuContainer">
                      <ul className="nav hidden-xs hidden-sm" >
                        <li className="">
                          <a href="/about" title="">
                            <span>About Us</span></a>
                        </li>

                        <li className="hasMenuDropdown hasMegaMenu">
                          <a href="/collections" title="">
                            <span>Shop <IoIosArrowDown/></span></a>
                          <a className="btnCaret hidden-xl hidden-lg hidden-md" data-toggle="collapse"
                            href="#megaDropdown21"></a>

                          <div id="megaDropdown21" className="menuDropdown megaMenu collapse" style={{ display: 'flex' }}>
                            <div className="menuGroup row">

                              <div className="">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-3">
                                    <ul className="velaMenuLinks">
                                      <li className="menuTitle">
                                        <a href="/collections/dresses" title="">Dresses</a>
                                      </li>
                                      <li>
                                        <a href="/products/easy-dress" title="">Easy dress</a>
                                      </li>
                                      <li>
                                        <a href="/products/breezy-dress" title="">Breezy Dress</a>
                                      </li>
                                      <li>
                                        <a href="/products/going-out-dress" title="">Going Out Dress</a>
                                      </li>

                                    </ul>
                                  </div>

                                  <div className="col-xs-12 col-sm-3">
                                    <ul className="velaMenuLinks">
                                      <li className="menuTitle">
                                        <a href="/collections/bottom-wear" title="">Bottom Wear</a>
                                      </li>
                                      <li>
                                        <a href="/products/classNameic-high-waist-pants" title="">classNameic
                                          High Waist Pants</a>
                                      </li>
                                      <li>
                                        <a href="/products/everyday-pant" title="">Everyday Pant</a>
                                      </li>
                                      <li>
                                        <a href="/products/apple-shorts" title="">Apple bottom
                                          shorts</a>
                                      </li>

                                    </ul>
                                  </div>

                                  <div className="col-xs-12 col-sm-3">
                                    <ul className="velaMenuLinks">
                                      <li className="menuTitle">
                                        <a href="/collections/t-shirts" title="">T-Shirts</a>
                                      </li>
                                      <li>
                                        <a href="/products/the-everyday-top" title="">The Everyday
                                          Top</a>
                                      </li>
                                      <li>
                                        <a href="/products/henley-top" title="">The Henley Top</a>
                                      </li>
                                      <li>
                                        <a href="/products/modest-top" title="">Modest Top</a>
                                      </li>
                                      <li>
                                        <a href="/products/the-hook" title="">The Hook</a>
                                      </li>
                                      <li>
                                        <a href="/products/my-boyfriends-tshirt" title="">My Boyfriend's
                                          Tshirt</a>
                                      </li>
                                      <li>
                                        <a href="/products/classNameic-full-top" title="">The classNameic Full
                                          Top</a>
                                      </li>
                                      <li>
                                        <a href="/products/classNameic-cami" title="">The classNameic Cami</a>
                                      </li>
                                      <li>
                                        <a href="/products/the-go-to-sweatshirt" title="">The Go-To
                                          Sweatshirt</a>
                                      </li>

                                    </ul>
                                  </div>

                                  <div className="col-xs-12 col-sm-3">
                                    <ul className="velaMenuLinks">
                                      <li className="menuTitle">
                                        <a href="/collections/crop-top" title="">Crop Top</a>
                                      </li>
                                      <li>
                                        <a href="/products/versatile-crop-top" title="">Versatile
                                          Top</a>
                                      </li>
                                      <li>
                                        <a href="/products/the-utility-crop-top" title="">The Utility
                                          Crop Top</a>
                                      </li>
                                      <li>
                                        <a href="/products/crop-top" title="">The Day to Night Top</a>
                                      </li>
                                      <li>
                                        <a href="/products/the-body-crop-top" title="">The Body Crop
                                          Top</a>
                                      </li>
                                      <li>
                                        <a href="/products/soho-crop" title="">SOHO Crop</a>
                                      </li>
                                      <li>
                                        <a href="/products/second-skin-top" title="">Second Skin Top</a>
                                      </li>
                                      <li>
                                        <a href="/products/going-out-top" title="">Going out Top</a>
                                      </li>
                                      <li>
                                        <a href="/products/cut-off-tee-top" title="">Cut off boyfriend
                                          crop Top</a>
                                      </li>

                                    </ul>
                                  </div>

                                </div>
                              </div>





                            </div>
                          </div>
                        </li>

                        <li className="hasMenuDropdown hasMegaMenu">
                          <a href="/AllCollection" title="">
                            <span>Collections <IoIosArrowDown/></span></a>
                          <a className="btnCaret hidden-xl hidden-lg hidden-md" data-toggle="collapse"
                            href="#megaDropdown22"></a>

                          <div id="megaDropdown22" className="menuDropdown megaMenu collapse">
                            <div className="menuGroup row">





                              <div className="">
                                <div className="velaMenuListCollection">

                                  <div className="velaMenuListContent rowFlex">




                                    <div className="coll-item" style={{ width: '180px' }}>
                                      <div className="collImage">
                                        <a href="/collections/bottom-wear">


                                          <div className="p-relative">
                                            <div className="product-card__image"
                                              style={{ paddingTop: '149.8%' }}>
                                              <img className="product-card__img lazyautosizes ls-is-cached lazyloaded"
                                                data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]"
                                                data-aspectratio="0.6675567423230975"
                                                data-ratio="0.6675567423230975"
                                                data-sizes="auto" alt="Bottom Wear"
                                                sizes="163px"
                                                srcSet="//cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_180x.jpg?v=1624554214 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_360x.jpg?v=1624554214 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_540x.jpg?v=1624554214 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_720x.jpg?v=1624554214 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_900x.jpg?v=1624554214 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_1080x.jpg?v=1624554214 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_1296x.jpg?v=1624554214 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_1512x.jpg?v=1624554214 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_1728x.jpg?v=1624554214 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_1944x.jpg?v=1624554214 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_2160x.jpg?v=1624554214 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_2376x.jpg?v=1624554214 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_2592x.jpg?v=1624554214 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_2808x.jpg?v=1624554214 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_3024x.jpg?v=1624554214 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_4320x.jpg?v=1624554214 4320w" />
                                            </div>
                                            <div className="placeholder-background placeholder-background--animation"
                                              data-image-placeholder=""></div>
                                          </div>


                                        </a>
                                      </div>
                                      <h5 className="collTitle"><a href="/collections/bottom-wear"
                                        title="Bottom Wear">Bottom Wear</a></h5>
                                    </div>





                                    <div className="coll-item" style={{ width: '180px' }}>
                                      <div className="collImage">
                                        <a href="/collections/crop-top">


                                          <div className="p-relative">
                                            <div className="product-card__image"
                                              style={{ paddingTop: '149.8%' }}>
                                              <img className="product-card__img lazyautosizes ls-is-cached lazyloaded"
                                                data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]"
                                                data-aspectratio="0.6675567423230975"
                                                data-ratio="0.6675567423230975"
                                                data-sizes="auto" alt="Crop Top"
                                                sizes="163px"
                                                srcSet="//cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_180x.jpg?v=1624552309 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_360x.jpg?v=1624552309 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_540x.jpg?v=1624552309 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_720x.jpg?v=1624552309 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_900x.jpg?v=1624552309 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_1080x.jpg?v=1624552309 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_1296x.jpg?v=1624552309 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_1512x.jpg?v=1624552309 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_1728x.jpg?v=1624552309 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_1944x.jpg?v=1624552309 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_2160x.jpg?v=1624552309 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_2376x.jpg?v=1624552309 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_2592x.jpg?v=1624552309 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_2808x.jpg?v=1624552309 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_3024x.jpg?v=1624552309 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1LJlD0KxiIuWuhlqFZupsrisboCx-IsFD_4320x.jpg?v=1624552309 4320w" />
                                            </div>
                                            <div className="placeholder-background placeholder-background--animation"
                                              data-image-placeholder=""></div>
                                          </div>


                                        </a>
                                      </div>
                                      <h5 className="collTitle"><a href="/collections/crop-top"
                                        title="Crop Top"> Crop Top</a></h5>
                                    </div>





                                    <div className="coll-item" style={{ width: '180px' }}>
                                      <div className="collImage">
                                        <a href="/collections/dresses">


                                          <div className="p-relative">
                                            <div className="product-card__image"
                                              style={{ paddingTop: '149.8%' }}>
                                              <img className="product-card__img lazyautosizes ls-is-cached lazyloaded"
                                                data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]"
                                                data-aspectratio="0.6675567423230975"
                                                data-ratio="0.6675567423230975"
                                                data-sizes="auto" alt="Dresses"
                                                sizes="163px"
                                                srcSet="//cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_180x.jpg?v=1624552537 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_360x.jpg?v=1624552537 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_540x.jpg?v=1624552537 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_720x.jpg?v=1624552537 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_900x.jpg?v=1624552537 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_1080x.jpg?v=1624552537 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_1296x.jpg?v=1624552537 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_1512x.jpg?v=1624552537 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_1728x.jpg?v=1624552537 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_1944x.jpg?v=1624552537 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_2160x.jpg?v=1624552537 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_2376x.jpg?v=1624552537 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_2592x.jpg?v=1624552537 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_2808x.jpg?v=1624552537 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_3024x.jpg?v=1624552537 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1Rci2EzmgztvQY7v57vujw2FvL3jzs9bx_4320x.jpg?v=1624552537 4320w" />
                                            </div>
                                            <div className="placeholder-background placeholder-background--animation"
                                              data-image-placeholder=""></div>
                                          </div>


                                        </a>
                                      </div>
                                      <h5 className="collTitle"><a href="/collections/dresses"
                                        title="Dresses"> Dresses</a></h5>
                                    </div>





                                    <div className="coll-item" style={{ width: '180px' }}>
                                      <div className="collImage">
                                        <a href="/collections/t-shirts">


                                          <div className="p-relative">
                                            <div className="product-card__image"
                                              style={{ paddingTop: '149.8%' }}>
                                              <img className="product-card__img lazyautosizes ls-is-cached lazyloaded"
                                                data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]"
                                                data-aspectratio="0.6675567423230975"
                                                data-ratio="0.6675567423230975"
                                                data-sizes="auto" alt="T-Shirts"
                                                sizes="163px"
                                                srcSet="//cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_180x.jpg?v=1624552370 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_360x.jpg?v=1624552370 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_540x.jpg?v=1624552370 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_720x.jpg?v=1624552370 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_900x.jpg?v=1624552370 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_1080x.jpg?v=1624552370 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_1296x.jpg?v=1624552370 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_1512x.jpg?v=1624552370 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_1728x.jpg?v=1624552370 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_1944x.jpg?v=1624552370 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_2160x.jpg?v=1624552370 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_2376x.jpg?v=1624552370 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_2592x.jpg?v=1624552370 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_2808x.jpg?v=1624552370 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_3024x.jpg?v=1624552370 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/collections/1oJbQiUJn1ftvB6FQsSu7MhS84nVekmkg_4320x.jpg?v=1624552370 4320w" />
                                            </div>
                                            <div className="placeholder-background placeholder-background--animation"
                                              data-image-placeholder=""></div>
                                          </div>


                                        </a>
                                      </div>
                                      <h5 className="collTitle"><a href="/collections/t-shirts"
                                        title="T-Shirts"> T-Shirts</a></h5>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </li>

                        <li className="">
                          <a href="/blog" title="">
                            <span>Blog</span></a>
                        </li>
                        <li className="">
                          <a href="/podcast" title="">
                            <span>Podcast</span></a>
                        </li>
                        <li className="">
                          <a href="/contact" title="">
                            <span>Contact</span></a>
                        </li>
                      </ul>
                    </nav>
                  </section>
                </div>

                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>


                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>

                      <div id="cartContainer">
                        <form action="/cart" method="post" novalidate="" className="cart ajaxcart">
                          <div className="headerCartInner">
                            {listt.map((item, index) => {
                              total += item.count * item.price;
                              totalCount += item.count;
                              
                              return (
                                <div className="headerCartScroll">

                                  <div className="ajaxCartProduct">
                                    <div className="ajaxCartRow rowFlex" data-line="1">
                                      <div className="headerCartImage">
                                        <a href="/products/the-utility-crop-top?variant=40047500034228"><img className="img-responsive" src="https://cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_200x.jpg?v=1628676954" alt="" /></a>
                                      </div>
                                      <div className="headerCartContent">
                                        <div className="headerCartInfo">
                                          <a href="/products/the-utility-crop-top?variant=40047500034228" className="headerCartProductName">{item.name}</a>
                                          <div className="headerCartProductMeta">{item.size} / {item.color}</div>



                                          <div className="headerCartPrice">
                                            Rs. {parseFloat(item.price).toFixed(2)} <span className="d-block">x {item.count}</span>
                                          </div>
                                        </div>
                                        <div className="headerCartRemoveBox" onClick={() => handleRemove(index)}>
                                          <a href="#" className="cartRemove" onclick="return false;" data-line="1">
                                             <span><IoIosClose/></span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>


                                </div>)
                            })}
                            <div className="headerCartTotal">
                              <span className="headerCartTotalTitle">Subtotal</span>
                              <span className="headerCartTotalNum">{total}</span>
                            </div>
                            <div className="headerCartButton d-flex">
                              <div className="headerCartButtonBox mr10">
                                <a className="btn btnVelaCart btnViewCart" href="/viewcart">

                                  View Cart

                                </a>
                              </div>
                              <div className="headerCartButtonBox">
                                <button type="submit" className="btn btnVelaCart btnCheckout" name="checkout">

                                  Check out

                                </button>
                              </div>
                            </div>

                          </div>
                        </form>
                      </div>

                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>


                  </DialogActions>
                </Dialog>

                <div className="velaHeaderRight col-xs-3 col-sm-3 col-md-2 col-lg-2" style={{ width: 'auto',marginRight:"20px" }}>
                  <a className="velaSearchIcon hidden-xs hidden-sm" href="#velaSearchTop" data-toggle="collapse" title="Search">
                    <i className="fa fa-search" aria-hidden="true"></i>

                  </a>

                  <a className="velaSearchIcon hidden-xs hidden-sm" href="/login" data-toggle="collapse" title="Login" style={{padding:"20px"}}>
                  <FaUserCircle color="#e09878"/>

                  </a>
                  <div className="velaCartTop">
                 
                    <a className="velaCartModal d-flex">

                      <i className="fa fa-cart-plus"></i>
                    
                      <span className="text"><span id="CartCount" className="hidden-count">{totalCount}</span></span>
                    
                    </a>
                    
                    <div className="velaAjaxCartModal">
                      <div id="cartContainer">
                         
                        { totalCount == 0 ?
                        <div className="headerCartEmpty">Your cart is currently empty.
                        </div>
                         : <div className="headerCartEmpty">
                          <div id="cartContainer">
                            <form action="/cart" method="post" novalidate="" className="cart ajaxcart">
                              <div className="headerCartInner">
                                {listt.map((item, index) => {
                                  total += item.count * item.price;
                                  totalCount += item.count;
                             
                                  return (
                                    <div className="headerCartScroll">

                                      <div className="ajaxCartProduct">
                                        <div className="ajaxCartRow rowFlex" data-line="1">
                                          <div className="headerCartImage">
                                            <a href="/products/the-utility-crop-top?variant=40047500034228"><img className="img-responsive" src="https://cdn.shopify.com/s/files/1/0535/4812/2292/products/1cD92PW6fA9W382JlDWkQ-80gmZHHJKiG_290ea439-2bcb-4f49-b1ea-2bca64778e54_200x.jpg?v=1628676954" alt="" /></a>
                                          </div>
                                          <div className="headerCartContent">
                                            <div className="headerCartInfo">
                                              <a href="/products/the-utility-crop-top?variant=40047500034228" className="headerCartProductName">{item.name}</a>
                                              <div className="headerCartProductMeta">{item.size} / {item.color}</div>



                                              <div className="headerCartPrice">
                                                Rs.  {parseFloat(item.price).toFixed(2)} <span className="d-block">x {item.count}</span>
                                              </div>
                                            </div>
                                            <div className="headerCartRemoveBox" onClick={() => handleRemove(index)}>
                                              <a href="#" className="cartRemove" onclick="return false;" data-line="1">
                                              <span><IoIosClose/></span> <span>Remove</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>)
                                })}
                                <div className="headerCartTotal">
                                  <span className="headerCartTotalTitle">Subtotal</span>
                                  <span className="headerCartTotalNum">{total}</span>
                                </div>
                                <div className="headerCartButton d-flex">
                                  <div className="headerCartButtonBox mr10">
                                    <a className="btn btnVelaCart btnViewCart" href="/viewcart">

                                      View Cart

                                    </a>
                                  </div>
                                  <div className="headerCartButtonBox">
                                    <button type="submit" className="btn btnVelaCart btnCheckout" name="checkout">

                                      Check out

                                    </button>
                                  </div>
                                </div>

                              </div>
                            </form>
                          </div>
                        </div> }
                      </div>
                    </div>
                  </div>
                </div>
                <div id="velaSearchTop" className="collapse">
                  <div className="text-center">
                    <form id="velaSearchbox" className="formSearch" action="/search" method="get">
                      <input type="hidden" name="type" value="product" />
                      <input className="velaSearch form-control" type="search" name="q" value=""
                        placeholder="Enter keywords to search..." autoComplete="off" />
                      <button id="velaSearchButton" className="btnVelaSearch" type="submit">
                        <i className="fa fa-search"></i>
                        <span className="btnSearchText">Search</span>
                      </button>
                      <ul className="velaAjaxSearch" style={{ display: 'none' }}></ul>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
        </section>
        </header>
        </div>
</div>
        {/* <div className="container container--type-3"> */}
        {/* Header container */}
        {/* <div className="header__container d-flex align-items-center"> */}
        <MobileNav />
        {/* <Logo /> */}
        {/* Header right */}
        {/* <ul className="header__right"> */}
        {/* <li><a onClick={(e) => showSearch()}><i className="lnil lnil-search-alt" /></a></li> */}
        {/* <li><Link to="/account/login"><i className="lnil lnil-user" /></Link></li> */}
        {/* <li className="header__cart"> */}
        {/* <a onClick={(e) => showCart()}><i className="lnil lnil-cart" /><span>{counter}</span><p className="cart__total-price">{('totalPrice' in checkoutState) ? checkoutState.totalPrice.amount : 0}</p></a> */}
        {/* </li> */}
        {/* <li className="header__canvas-menu"><a onClick={(e) => showCanvasMenu()}><i className="lnil lnil-menu" /></a></li> */}
        {/* </ul> */}
        {/* End header right */}
        {/* </div> */}
        {/* End header container */}
        {/* </div> */}
        {/* End container */}
      </header>
      {/* End header */}
      <SearchForm />
      <CanvasCart />
      <MainNav />
    </div>
  )
}