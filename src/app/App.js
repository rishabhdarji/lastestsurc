import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Home from "../templates/Index"
import ErrorPage from '../templates/404';
import { useShopify } from "../hooks"
import { NotificationContainer } from 'react-notifications';
// import Blog from '../templates/Blog';
import Article from '../templates/Article';
// import Collection from "../templates/Collection"
import Product from "../templates/Product"
import Wishlist from "../templates/Wishlist"
import Login from "../templates/account/Login"
// import ContactUs from "../templates/ContactUs"
// import AboutUs from "../templates/AboutUs"
// import Cart from "../templates/Cart"
// import Checkout from "../templates/Checkout"
import OrderComplete from "../templates/OrderComplete"
import { About } from "../sections/About";
import { Blog } from "../sections/Blog";
import Contact from "../sections/Contact";
import { Productcategory, Productcategoryy } from "../Productcategories/Productcategory";
import { Podcast } from "../sections/Podcast";
import BlogInner from "../sections/BlogInner";
import ProductPage from "../sections/ProductPage";
import { Check1out } from "../sections/Check1out";
import { Collection } from "../sections/Collection";
import { ViewCart } from "../sections/ViewCart";
import reg from "../sections/reg";
import login from "../sections/login";
import Forget from "../sections/forgetPassword";
import setPassword from "../sections/setPassword";
import VerifyOtp from "../sections/verify/VerifyOtp";
import PreviousOrder from "../sections/myOrder/PreviousOrder";
import { sustanibility } from "../sections/sustanibility";
// import { Productcategoryy } from "../Productcategories/new";
// import  About  from "../sections/About";

export default (props) => {
  const {
    createShop,
    createCheckout,
    fetchProducts,
    fetchCollections,
  } = useShopify()

  useEffect(() => {
    createShop()
    fetchProducts()
    createCheckout()
    fetchCollections()
  }, [])

	return (
		<Router>
      <div id="app">
        <Switch>
  				<Route exact path="/" render={() => <Redirect to="/home" />} />
      
  				 <Route path="/home" component={Home} />
           <Route path ="/about" component ={About}/>
           <Route path ="/blog"  component ={Blog}/>
           <Route path="/contact" component ={Contact}/>
           <Route path="/collections" component ={Productcategoryy} />
           <Route path="/podcast" component ={Podcast}/>
           <Route path="/blogs/news" component ={BlogInner}/>
           <Route path="/products/:id" component ={ProductPage}/>
           <Route path="/checkout" component ={Check1out}/>
           <Route path="/AllCollection" component={Collection}/>
           <Route path="/viewCart" component={ViewCart  }/>
           <Route path="/reg" component={reg}/>
           <Route path="/login" component={login}/>
           <Route path="/forgetPassword" component={Forget}/>
           <Route path="/setPassword" component={setPassword}/>
           <Route path="/verifyOTP" component={VerifyOtp}/>
           <Route path="/myOrder" component={PreviousOrder}/>
           <Route path="/sustanibility" component={sustanibility}/>
           {/* sustanibility */}
           {/* <Route path="/new" component={Productcategoryy}/> */}
           
           {/* <Route path="/blogs/:blogId/:articleId" component={Article} />
          <Route path="/blogs/:blogId" component={Blog} />
          <Route path="/collections/:collectionId" component={Collection} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/pages/wishlist" component={Wishlist} />
          <Route path="/pages/contact-us" component={ContactUs} />
          <Route path="/pages/about-us" component={AboutUs} />
          <Route path="/account/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/order-complete" component={OrderComplete} />
          <Route component={ErrorPage} />  */}

        </Switch>
      </div>
      <NotificationContainer/>
		</Router>
	)
}
