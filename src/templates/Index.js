import React, { useEffect } from 'react';
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Slider from "../sections/Slider";
import OurJournal from "../sections/OurJournal";
import HomeBanners from "../sections/HomeBanners";
import HomeProducts from "../sections/HomeProducts"
import { useShopify } from "../hooks"
import TrulySustain from '../sections/TrulySustain';
import Services from '../sections/Services';
import Parallex from '../sections/Parallex';
import Section7 from '../sections/Section7';
import Section10 from '../sections/Section10';
import Section8 from '../sections/Section8';
import Section6 from '../sections/Section6';
import HomeProducts1 from '../sections/HomeProducts/HomeProducts1';
import HeaderHome from '../sections/headerHome/HeaderHome';
import { Productcategory } from '../Productcategories/Productcategory';
import ProductPage from '../sections/ProductPage';
import { About } from '../sections/About';
import { Inner } from '../sections/InnerHeader';
import { ViewCart } from '../sections/ViewCart';
import Checkout from './Checkout';
import { Check1out } from '../sections/Check1out';
import { Collection } from '../sections/Collection';
import { AboutBottom } from '../sections/AboutBottom';
import HomeProducts2 from '../sections/HomeProducts/HomeProducts2';
import HomeProducts3 from '../sections/HomeProducts/HomeProducts3';
import HomeProducts4 from '../sections/HomeProducts/HomeProducts4';
import Imagecarousel from '../sections/Components/Imagecarousel';

import Imagecarouse3 from '../sections/Components/Imagecarousel3';
import Imagecarousel1 from '../sections/Components/Imagecarousel1';
import Imagecarousel2 from '../sections/Components/Imagecarousel2';
import ScrollButton, { GoToTop } from '../sections/GoToTop/GoToTop';
// import ScrollButton from '../sections/GoToTop/GoToTop';
// import ScrollButton from './components/ScrollButton';
// import { Content, Heading } from './components/Styles';
// import { List } from '../sections/List/list';


export default (props) => {
  const { closeCart, closeSearch, closeCanvasMenu } = useShopify()
  useEffect(() => {
    window.scrollTo(0, 0);
    closeCart();
    closeSearch();
    closeCanvasMenu();
  }, [])
  return (
    <React.Fragment>
      <div className="absolute-header">
        <HeaderHome />
        {/* <Header/> */}
        <Slider />

        {/* <HomeBanners /> */}
        {/* <HomeProducts1/> */}
        <Imagecarousel/>
        {/* <Imagecarousel1/> */}
        {/* <HomeProducts collection_id="frontpage" /> */}
        <TrulySustain/>
        <Services/>
        <Parallex/>
        <Section6/>
        <Imagecarousel1/>
        <Section8/>
        <Imagecarousel2/>
        <Section10/>
        <Imagecarouse3/>
        {/* <Check1out/> */}
        {/* <ViewCart/> */}
        {/* <Inner/> */}
        {/* <Productcategory/> */}
        {/* <OurJournal /> */}
        {/* <ProductPage/> */}
        {/* <Collection/> */}
        {/* <AboutBottom/> */}
        
        <Footer />
       {/* <GoToTop/> */}
       <ScrollButton/>
      </div>
    </React.Fragment>
  )
}