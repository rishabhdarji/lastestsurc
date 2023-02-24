import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { useShopify } from "../hooks"
import { NotificationManager } from 'react-notifications';

export default (props) => {
  const { checkoutState, removeLineItem, openCart, closeCart, cartStatus } = useShopify()
  const [counter, setCounter] = useState(0)

  function openCheckout(e) {
    e.preventDefault()
    window.location.replace(checkoutState.webUrl)
  }

  function removeFromCart(lineItemId, e) {
    e.preventDefault()
    const checkoutId = checkoutState.id
    removeLineItem(checkoutId, lineItemId)
    NotificationManager.success('Product removed from your cart.', 'Success', 4000);
  }

  function hideCanvasCart() {
    closeCart();
  }

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

  return (
    <React.Fragment>
      {/* Canvas cart */}
      <div className={cartStatus == true ? 'canvas-cart active': 'canvas-cart' }>
        <div className="canvas-cart__overlay" onClick={(e) => hideCanvasCart(false)} />
        {/* Content */}
        <div className="canvas-cart__content">
          {counter == 0 ? (
            <React.Fragment>
              <div className="canvas-cart__close" style={{ paddingTop: '20px', paddingRight: '20px' }}><a onClick={(e) => hideCanvasCart(false)}><i className="lnil lnil-close" /></a></div>
              <div className="cart__empty text-center">
                {/* Close */}
                {/* End close */}
                <p>Your bag is empty.</p>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* D-flex */}
              <div className="canvas-cart__d-flex">
                {/* Top and products */}
                <div className="canvas-cart__top-and-products">
                  {/* Heading */}
                  <div className="canvas-cart__heading d-flex align-items-center">
                    {/* H3 */}
                    <h3 className="canvas-cart__h3">Cart ({counter})</h3>
                    {/* End h3 */}
                    {/* Close */}
                    <div className="canvas-cart__close"><a onClick={(e) => hideCanvasCart(false)}><i className="lnil lnil-close" /></a></div>
                    {/* End close */}
                  </div>  
                  {/* End heading */}
                  <ul className="header-cart__items">
                    {checkoutState.lineItems &&
                      checkoutState.lineItems.map((lineItem, index) => {
                        return (
                          <li className="cart-item d-flex"  key={index}>
                            <div className="cart-item__image">
                              {lineItem.variant.image ? (
                                <Link to={"/product/" + lineItem.variant.product.handle}>
                                  <img
                                    src={lineItem.variant.image.src}
                                    alt={`${lineItem.title} product shot`}
                                  />
                                </Link>
                              ) : null}
                            </div>
                            {/* Item details */}
                            <p className="cart-item__details">
                              <Link to={"/product/" + lineItem.variant.product.handle} className="cart-item__title">{lineItem.title}</Link>
                              <span className="cart-item__variant">{lineItem.variant.title != 'Default Title' ? lineItem.variant.title : ''}</span>
                              <span className="cart-ietm__price">{lineItem.quantity} <i>x</i> ${(lineItem.quantity * lineItem.variant.price).toFixed(2)}</span>
                            </p>
                            {/* End item details */}
                            {/* Item delete */}
                            <p className="cart-item__delete">
                              <a onClick={(e) => { removeFromCart(lineItem.id, e) }}><i className="lnil lnil-close" /></a>
                            </p>
                            {/* Item delete */}
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                {/* End top and products */}
                {/* Bottom */}
                <div className="canvas-cart__bottom">
                  {/* Subtotal */}
                  <div className="header-cart__subtotal d-flex">
                    {/* Title */}
                    <div className="subtotal__title">Subtotal</div>
                    {/* End title */}
                    {/* Value */}
                    <div className="subtotal__value">${checkoutState.totalPrice}</div>
                    {/* End value */}
                  </div>
                  {/* End subtotal */}
                  {/* Header cart action */}
                  <div className="header-cart__action">
                    <a onClick={(e) => openCheckout(e)} className="header-cart__button">Checkout</a>
                    <Link to="/cart" className="header-cart__button">View cart</Link>
                  </div>
                  {/* End Header cart action */}
                </div>
                {/* End bottom */}
              </div>
              {/* End d-flex */}
            </React.Fragment>
          )}
        </div>
        {/* End content */}
      </div>
      {/* End canvas cart */}
    </React.Fragment>
  )
}