import { useSelector, useDispatch } from "react-redux"
import Client from "shopify-buy"

// Creates the client with Shopify-Buy and store info
//
const client = Client.buildClient({
  storefrontAccessToken: "8b7609547e3f3f3e5129ad029475fd88",
  domain: "durotan-fashion.myshopify.com",
})

//
// Example Storefront
//
// const client = Client.buildClient({
//  storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
//  domain: "graphql.myshopify.com",
// })

const PRODUCTS_FOUND = "shopify/PRODUCTS_FOUND"
const PRODUCT_FOUND = "shopify/PRODUCT_FOUND"
const COLLECTIONS_FOUND = "shopify/COLLECTIONS_FOUND"
const COLLECTION_FOUND = "shopify/COLLECTION_FOUND"
const COLLECTION_PRODUCTS_FOUND = "shopify/COLLECTION_PRODUCTS_FOUND"
const CHECKOUT_FOUND = "shopify/CHECKOUT_FOUND"
const SHOP_FOUND = "shopify/SHOP_FOUND"
const ADD_VARIANT_TO_CART = "shopify/ADD_VARIANT_TO_CART"
const UPDATE_QUANTITY_IN_CART = "shopify/UPDATE_QUANTITY_IN_CART"
const REMOVE_LINE_ITEM_IN_CART = "shopify/REMOVE_LINE_ITEM_IN_CART"
const OPEN_CART = "shopify/OPEN_CART"
const CLOSE_CART = "shopify/CLOSE_CART"
const CART_COUNT = "shopify/CART_COUNT"
const OPEN_FILTER = "shopify/OPEN_FILTER"
const CLOSE_FILTER = "shopify/CLOSE_FILTER"
const OPEN_SEARCH = "shopify/OPEN_SEARCH"
const CLOSE_SEARCH = "shopify/CLOSE_SEARCH"
const OPEN_CANVAS_MENU = "shopify/OPEN_CANVAS_MENU"
const CLOSE_CANVAS_MENU = "shopify/CLOSE_CANVAS_MENU"

const initialState = {
  isCartOpen: false,
  isFilterOpen: false,
  isSearchOpen: false,
  isCanvasMenuOpen: false,
  cartCount: 0,
  checkout: {},
  collections: [],
  collection: [],
  collectionProducts: [],
  products: [],
  product: {},
  shop: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_FOUND:
      return { ...state, products: action.payload }
    case PRODUCT_FOUND:
      return { ...state, product: action.payload }
    case COLLECTIONS_FOUND:
      return { ...state, collections: action.payload }
    case COLLECTION_FOUND:
      return { ...state, collection: action.payload }
    case COLLECTION_PRODUCTS_FOUND:
      return { ...state, collectionProducts: action.payload }
    case CHECKOUT_FOUND:
      return { ...state, checkout: action.payload }
    case SHOP_FOUND:
      return { ...state, shop: action.payload }
    case ADD_VARIANT_TO_CART:
      return { ...state, checkout: action.payload }
    case UPDATE_QUANTITY_IN_CART:
      return { ...state, checkout: action.payload }
    case REMOVE_LINE_ITEM_IN_CART:
      return { ...state, checkout: action.payload }
    case OPEN_CART:
      return { ...state, isCartOpen: true }
    case CLOSE_CART:
      return { ...state, isCartOpen: false }
    case CART_COUNT:
      return { ...state, cartCount: action.payload }
    case OPEN_FILTER:
      return { ...state, isFilterOpen: true }
    case CLOSE_FILTER:
      return { ...state, isFilterOpen: false }
    case OPEN_SEARCH:
      return { ...state, isSearchOpen: true }
    case CLOSE_SEARCH:
      return { ...state, isSearchOpen: false }
    case OPEN_CANVAS_MENU:
      return { ...state, isCanvasMenuOpen: true }
    case CLOSE_CANVAS_MENU:
      return { ...state, isCanvasMenuOpen: false }
    default:
      return state
  }
}

// Gets all the products from Shopify
function getProducts() {
  return (dispatch) => {
    client.product.fetchAll(250).then((resp) => {
      dispatch({
        type: PRODUCTS_FOUND,
        payload: resp,
      })
    })
  }
}

// Gets individual item based on id
function getProduct(id) {
  return async (dispatch) => {
    const resp = await client.product.fetchByHandle(id)
    dispatch({
      type: PRODUCT_FOUND,
      payload: resp,
    })
    return resp
  }
}

// Gets all the collections from Shopify
function getCollections() {
  return (dispatch) => {
    client.collection.fetchAll().then((resp) => {
      dispatch({
        type: COLLECTIONS_FOUND,
        payload: resp,
      })
    })
  }
}

// Gets all products from collection from Shopify
function getCollectionProducts(handle) {
  if(handle == 'all') {
    return async (dispatch) => {
      const resp = await client.product.fetchAll(250)
      dispatch({
        type: COLLECTION_PRODUCTS_FOUND,
        payload: resp,
      })
      return resp
    }
  } else {
    return async (dispatch) => {
      const resp = await client.collection.fetchByHandle(handle)
      dispatch({
        type: COLLECTION_PRODUCTS_FOUND,
        payload: resp.products,
      })
      return resp.products
    }
  }
}

// Gets a  collection based on that collection's id
//
function getCollection(id) {
  return async (dispatch) => {
    const resp = await client.collection.fetch(id)
    dispatch({
      type: COLLECTION_FOUND,
      payload: resp,
    })
    return resp
  }
}

// Creates initial checkout state from Shopify
function checkout() {
  if(localStorage.getItem("checkoutId") != '' && localStorage.getItem("checkoutId") != null) {
    return (dispatch) => {
      client.checkout.fetch(localStorage.getItem("checkoutId")).then((resp) => {
        dispatch({
          type: CHECKOUT_FOUND,
          payload: resp,
        })
      })
    }
  } else {
    return (dispatch) => {
      client.checkout.create().then((resp) => {
        dispatch({
          type: CHECKOUT_FOUND,
          payload: resp,
        })
      })
    }
  }
}

// Gets Shopify store information
function shopInfo() {
  return (dispatch) => {
    client.shop.fetchInfo().then((resp) => {
      dispatch({
        type: SHOP_FOUND,
        payload: resp,
      })
    })
  }
}

// Adds variants to cart/checkout
function addVariantToCart(checkoutId, lineItemsToAdd) {
  return async (dispatch) => {
    const response = await client.checkout.addLineItems(
      checkoutId,
      lineItemsToAdd
    )
    dispatch({
      type: ADD_VARIANT_TO_CART,
      payload: response,
    })
    return response
  }
}

// Updates quantity of line items in cart and in checkout state
function updateQuantityInCart(lineItemId, quantity, checkoutId) {
  const lineItemsToUpdate = [
    { id: lineItemId, quantity: parseInt(quantity, 10) },
  ]

  return async (dispatch) => {
    const resp = await client.checkout.updateLineItems(
      checkoutId,
      lineItemsToUpdate
    )
    dispatch({
      type: UPDATE_QUANTITY_IN_CART,
      payload: resp,
    })
    return resp
  }
}

// Removes line item from cart and checkout state
function removeLineItemInCart(checkoutId, lineItemId) {
  return (dispatch) => {
    client.checkout.removeLineItems(checkoutId, [lineItemId]).then((resp) => {
      dispatch({
        type: REMOVE_LINE_ITEM_IN_CART,
        payload: resp,
      })
    })
  }
}

// To close the cart
function handleCartClose() {
  return {
    type: CLOSE_CART,
  }
}

// To open the cart
function handleCartOpen() {
  return {
    type: OPEN_CART,
  }
}

// Set the count of items in the cart
function handleSetCount(count) {
  return {
    type: CART_COUNT,
    payload: count,
  }
}

// To close the filter
function handleFilterClose() {
  return {
    type: CLOSE_FILTER,
  }
}

// To open the filter
function handleFilterOpen() {
  return {
    type: OPEN_FILTER,
  }
}

// To close the search
function handleSearchClose() {
  return {
    type: CLOSE_SEARCH,
  }
}

// To open the search
function handleSearchOpen() {
  return {
    type: OPEN_SEARCH,
  }
}

// To close the search
function handleCanvasMenuClose() {
  return {
    type: CLOSE_CANVAS_MENU,
  }
}

// To open the canvas menu
function handleCanvasMenuOpen() {
  return {
    type: OPEN_CANVAS_MENU,
  }
}

export function useShopify() {
  const dispatch = useDispatch()
  const cartStatus = useSelector((appState) => appState.shopifyState.isCartOpen)
  const cartCount = useSelector((appState) => appState.shopifyState.cartCount)
  const filterStatus = useSelector((appState) => appState.shopifyState.isFilterOpen)
  const searchStatus = useSelector((appState) => appState.shopifyState.isSearchOpen)
  const canvasMenuStatus = useSelector((appState) => appState.shopifyState.isCanvasMenuOpen)
  const collections = useSelector((appState) => appState.shopifyState.collections)
  const collection = useSelector((appState) => appState.shopifyState.collection)
  const collectionProducts = useSelector((appState) => appState.shopifyState.collectionProducts)
  const products = useSelector((appState) => appState.shopifyState.products)
  const product = useSelector((appState) => appState.shopifyState.product)
  const featured = useSelector((appState) => appState.shopifyState.featured)
  const checkoutState = useSelector(
    (appState) => appState.shopifyState.checkout
  )
  const shopDetails = useSelector((appState) => appState.shopifyState.shop)
  const fetchProducts = () => dispatch(getProducts())
  const fetchProduct = (id) => dispatch(getProduct(id))
  const fetchCollections = () => dispatch(getCollections())
  const fetchCollection = (id) => dispatch(getCollection(id))
  const fetchCollectionProducts = (id) => dispatch(getCollectionProducts(id))
  const createCheckout = () => dispatch(checkout())
  const createShop = () => dispatch(shopInfo())
  const closeCart = () => dispatch(handleCartClose())
  const openCart = () => dispatch(handleCartOpen())
  const setCount = (count) => dispatch(handleSetCount(count))
  const closeFilter = () => dispatch(handleFilterClose())
  const openFilter = () => dispatch(handleFilterOpen())
  const closeSearch = () => dispatch(handleSearchClose())
  const openSearch = () => dispatch(handleSearchOpen())
  const closeCanvasMenu = () => dispatch(handleCanvasMenuClose())
  const openCanvasMenu = () => dispatch(handleCanvasMenuOpen())

  const addVariant = (checkoutId, lineItemsToAdd) =>
    dispatch(addVariantToCart(checkoutId, lineItemsToAdd))
  const updateQuantity = (lineItemId, quantity, checkoutID) =>
    dispatch(updateQuantityInCart(lineItemId, quantity, checkoutID))
  const removeLineItem = (checkoutId, lineItemId) =>
    dispatch(removeLineItemInCart(checkoutId, lineItemId))

  return {
    collections,
    collection,
    collectionProducts,
    products,
    product,
    cartStatus,
    checkoutState,
    cartCount,
    shopDetails,
    addVariant,
    fetchProducts,
    fetchProduct,
    fetchCollections,
    fetchCollection,
    fetchCollectionProducts,
    createCheckout,
    createShop,
    closeCart,
    openCart,
    updateQuantity,
    removeLineItem,
    setCount,
    closeFilter,
    openFilter,
    filterStatus,
    closeSearch,
    openSearch,
    searchStatus,
    closeCanvasMenu,
    openCanvasMenu,
    canvasMenuStatus,
  }
}
