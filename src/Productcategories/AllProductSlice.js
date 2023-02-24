import { publicRequest } from "../../requestmethods";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
//const { publicRequest } = require("../../requestMethods");


// export const getCourseTypeList = createAsyncThunk(
//   "courseApp/course/getCourseTypeList",
//   async () => {
//     const response = await publicRequest.get("coursetype/");
//     console.log(response)
//     return response.data;
//   }
// );

export const AllProducts = createAsyncThunk(
  "Product",
  async (Product, { dispatch }) => {
    console.log(Product)
    console.log("Product");
    const response = await publicRequest.get("products?limit=10&page=1",Product);
    console.log(response);
   // dispatch(getCourseList())
    return response;
  }
);

// export const updateCourse = createAsyncThunk(
//   "courseTypeApp/courseType/updateCourse",
//   async (courseModel, { dispatch }) => {
//     // console.log("Add Course");
//     const response = await publicRequest.put("coursetype/", courseModel);
//     console.log(response);
//     dispatch(getCourseList())
//     return response;
//   }
// );


const  AllProductSlice = createSlice({
  name: "Product",
  initialState: null,    
  reducers: {},
  extraReducers: {
 //   [getCourseTypeList.fulfilled]: (state, action) => action.payload,
    [AllProducts.fulfilled]: (state, action) => action.payload,
    // [updateCourse.fulfilled]: (state, action) => action.payload,
    //   [updateCountry.fulfilled] : (state,action) => action.payload,
  },
});


export default AllProductSlice.reducer;