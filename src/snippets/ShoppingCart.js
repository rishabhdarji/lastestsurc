import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { useShopify } from "../hooks"
import { NotificationManager } from 'react-notifications';

export default (props) => {
  const { checkoutState, removeLineItem } = useShopify()
  const [counter, setCounter] = useState(0)
  const [loader, setLoader] = useState(false)

  function openCheckout(e) {
    e.preventDefault()
    window.location.replace(checkoutState.webUrl)
  }

  function removeFromCart(lineItemId, e) {
    e.preventDefault()
    const checkoutId = checkoutState.id
    removeLineItem(checkoutId, lineItemId)
    NotificationManager.success('Product removed from your cart.', 'Success', 4000);
    setLoader(true);
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

    setLoader(false);
  }, [checkoutState]) 
  return (
    <React.Fragment>
      <li className="header__cart">
        <Link to="/cart"><i className="lnil lnil-cart" /><span>{counter}</span></Link>
        {/* Header cart */}
        <div className="header-cart">
          {counter == 0 ? (
            <div className="cart__empty text-center">
              <p>Your bag is empty.</p>
            </div>
          ) : (
            <div>
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
                <a onClick={(e) => openCheckout(e)} className="header-cart__button header-cart__button--checkout">Checkout</a>
                <Link to="/cart" className="header-cart__button">View cart</Link>
              </div>
              {/* End Header cart action */}
            </div>
          )}
        </div>
        {/* End header cart */}
      </li>
    </React.Fragment>
  )
}