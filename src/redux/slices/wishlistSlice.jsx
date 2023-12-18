import { createSlice } from "@reduxjs/toolkit";
import toast,{ Toaster } from "react-hot-toast";
import Swal from 'sweetalert2';
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : []
    },
    reducers: {
        addWishlist: (state, action) => {
            let item = state.items.find((item) => item.id === action.payload.id);
      
            if (!item) {
                state.items=[...state.items,action.payload]
                toast.success('Əlavə olundu');
                localStorage.setItem('wishlistItems', JSON.stringify([...state.items,action.payload]));
            
                
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Wishlistdə mövcuddur',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
            
         
        },
        
        deleteWishlist: (state) => {
            state.items = [];
            localStorage.removeItem('wishlistItems');
          },

          deleteWishlists: (state, action) => {
            const target = state.items.find(item => item.id === action.payload.id)
            const index = state.items.indexOf(target)
            state.items.splice(index, 1)
            localStorage.setItem("wishlistItems",JSON.stringify([...state.items]))
        }
        
    }
})
export const {addWishlist,deleteWishlist,deleteWishlists}=wishlistSlice.actions
export default wishlistSlice.reducer