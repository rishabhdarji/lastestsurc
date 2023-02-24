import React from 'react'
import { useState } from 'react';
import Footer from './Footer'
import { Inner } from './InnerHeader'
import { IoMdClose } from "react-icons/io";
import { Button } from 'react-bootstrap';
import ScrollButton from './GoToTop/GoToTop';


export const ViewCart = () => {
    console.log("here 8",localStorage.getItem('list'))
   // var listt=[];
    const[listt,setList]=useState(JSON.parse(localStorage.getItem('list')))

//    const  listt =JSON.parse(localStorage.getItem('list'));
//     console.log('listt', listt);

    
    

    


const [open, setOpen] = React.useState(false)
 var total=0;
 var totalCount=0;
 
const handleClickOpen = () => {
    setOpen(true);
  }; 
 const [ count, setCount] = useState();
 

const increment = (index) => {
        //  console.log("here",listt[index].count+1)
         listt[index].count=listt[index].count+1;
         localStorage.setItem("list",JSON.stringify(listt));
         setCount(JSON.parse(localStorage.getItem('list')));
     }

  const decrement = (index) => {

    // console.log("here",listt[index].count-1)
    listt[index].count= listt[index].count-1;
    localStorage.setItem("list",JSON.stringify(listt));
    setCount(JSON.parse(localStorage.getItem('list')));
   
  }

// const handleSubTotal=()=>{
     
//     total += listt[index].count *  listt[index].price;
//     return total ;
//     // localStorage.setItem("li",JSON.stringify(total) );
// }

//   function decrement() {
//     setCount(function (prevCount) {
//       if (prevCount > 1) {
//         return (prevCount -= 1); 
//       } else {
//         return (prevCount = 1);
//       }
//     });
//   }


const handleRemove= (index) => {
    const newlist = listt.filter((_, i) => i !== index);
    setList(newlist);
    localStorage.setItem('list',JSON.stringify(newlist));
  };



// total += item.count *  item.price;

  return (
  <>
  <div className="absolute-header">
       
       <Inner/>
       <br>
    </br>
   { console.log(listt)};
   {console.log(listt.length)}
    { listt.length >0? 
    
   <div>
   <section id="pageContent">
    <div className="container">
        <div id="shopify-section-vela-template-cart" className="shopify-section"><div className="cartContainer">
    <h1 className="cartTitle">Shopping cart</h1>
   
   
   
    <div className="cartContent">
        
            <form action="/cart" method="post" novalidate="" className="cartForm">
                <div className="cartTable">
                    <div className="row noGutter cartHeaderLabels">
                        <div className="col-xs-3 col-sm-2">Image</div>
                        <div className="col-xs-9 col-sm-8">Product</div>
                        <div className="col-xs-12 col-sm-2 hidden-xs text-right">Total</div>
                    </div>
                    
                    {listt.map((item,index)=> { 
                          total += item.count * item.price ;
                          totalCount += item.count ;
                        return(  
                    <div className="cartItemWrap">
                        
                            <div className="flexRow noGutter">
                                <div className="productImage col-xs-3 col-sm-2" data-label="Product">
                                    <a href="/collections/all/products/apple-shorts?variant=40047432368308" className="cartImage">
                                      <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_370x.jpg?v=1628248696" alt="Apple bottom Shorts - XS / Black" />
                                    </a>
                                </div>
                                <div className="productInfo col-xs-9 col-sm-8">
                                    <a  className="productName" key={index}>
                                        {/* Apple bottom Shorts */}{item.name}
                                    </a>
                                    
                                        <br></br>
                                        <small>{item.size}/{item.color}</small>
                                    
                                    
                                          <p>SuRC</p>
                                    
                                    
                                    
                                    <div data-label="Price">
                                        <span className="priceProduct">
                                        {parseFloat(item.price).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="flexRow cartGroup flexAlignCenter" data-label="Quantity">
                                        
    
        <div className="velaQty">
            <button type="button"  onClick={()=>decrement(index)} className="velaQtyAdjust velaQtyButton velaQtyMinus" data-id="" data-qty="0">
                <span className="txtFallback">−</span>
            </button>
            {/* count={item.qunt} */}
            <input type="text"  className="velaQtyNum velaQtyText" value={item.count} min="1" data-id="" aria-label="quantity" pattern="[0-9]*" name="updates[]" id="updates_40047432368308" />
            <button type="button"   onClick={()=>increment(index)}  className="velaQtyAdjust velaQtyButton velaQtyPlus" data-id="" data-qty="11">
                <span className="txtFallback">+</span>
            </button>
        </div>
    

                                        <Button onClick={() => window.location.reload(false)}  name="update" className="btn btnUpdateCart" value="Update Cart" > update cart </Button>
                                        <a  onClick={() => handleRemove(index)} className="cartRemove" title="Remove">
                                            Remove
                                        </a>
                                    </div>
                                </div>
                                <div className="text-right col-xs-12 col-sm-2 hidden-xs" data-label="Total">
                                    <span className="h3 cartSubtotal priceProduct">
                                        {/* Rs. 1,600.00 */}
                                        {item.price * item.count}
                                          
                                    </span>
                                </div>
                            </div>
                        
                        </div>  ) })}

 
</div>
                <div className="functionCart flexRow"><div className="col-xs-12 col-md-7">
                            <div className="functionCartNote">
                                <div className="velaCartNoteButton">
                                    <a className="btnCartNote collapsed" onClick={handleClickOpen} data-toggle="collapse">
                                        {/* <i className="fa fa-times"></i> */}
                                        <IoMdClose/>
                                        
                                        add order note
                                    </a>
                                </div>
                                {/* <div id="velaCartNote" className="velaCartNoteGroup collapse"> */}
                                    <label for="CartSpecialInstructions"></label>
                                    <textarea name="note" className="form-control" id="CartSpecialInstructions" rows="4"></textarea>
                                {/* </div> */}

                                
                            </div>
                        </div><div className="text-right col-xs-12 col-md-5">
                        <div className="cartBoxSubtotal">
                            <span className="cartSubtotalTitle">Subtotal: </span>

                            <span     className="cartSubtotal">
                                {/* Rs. 1,600.00 */}
                               Rs . { total}
                                </span>
                        </div>
                        <p className="cartShipping">Shipping, taxes, and discounts will be calculated at checkout.</p>
                        <div className="functionCartButton">
                            <Button  name="update"    onClick={() => window.location.reload(false)} className="btn btnUpdateCart" value="Update Cart" >Update cart </Button>
                            <input type="submit" name="checkout" className="btn btnCheckout" value="Check out" />
                        </div>
                    </div>
                </div>

            </form>
        
    </div>

 
</div>
</div>
    </div>
    </section>
     </div>


   
   :
 
   <div >
   <section id="pageContent">
   <div className="container">
     <div id="shopify-section-vela-template-cart" className="shopify-section"><div className="cartContainer">
   <h1 className="cartTitle hidden">Shopping cart</h1>
   <div className="cartContent">
     
       <div className="cartEmptyContent">
           <p className="cartEmpty">Your cart is currently empty.</p>
           <p>Before proceed to checkout you must add some products to your shopping cart.<br></br> You will find a lot of interesting products on our Website.</p>
           <p><a className="btn btnVelaOne" href="/collections" title="Go to Shopping">Go to Shopping</a></p>
       </div>
     
   </div>
   </div>
   </div>
   </div>
   </section> </div>
   
    }

    
<Footer/>
<ScrollButton/>
</div>
  </>
  )
}