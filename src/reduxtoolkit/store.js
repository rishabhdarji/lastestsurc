import AllProductSlice from "../Productcategories/AllProductSlice";


const {configureStore} =require("@reduxjs/toolkit");


const store =configureStore({
    reducer:{

          AllProducts : AllProductSlice ,


    }
})

export default store;