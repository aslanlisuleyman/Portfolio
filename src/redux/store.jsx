import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";
import dataSlice2 from "./slices/dataSlice2";
import dataSlice3 from "./slices/dataSlice3";
import basketSlice from "./slices/basketSlice";
import wishlistSlice from "./slices/wishlistSlice";
import adminBooksSlice from "./slices/adminBooksSlice";

const store=configureStore({
    reducer:{
      api:dataSlice,
      data:dataSlice2,
      data2:dataSlice3,
      baskets:basketSlice,
      wishlist:wishlistSlice,
      adminBook:adminBooksSlice
    }
})

export default store