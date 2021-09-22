import { createSlice } from "@reduxjs/toolkit";

const initialState = {  items: [], totalQuantity: 0,}
const cart =createSlice({
    name : "Cart",
    initialState , 
    reducers : {
        addtoCart(state , action){
            state.totalQuantity++
            const newItem = action.payload;
           const existingItem = state.items.find(item=>item.id===newItem.id);//this will return the existing item if there is any i search in the itmes array with entered element id aswell
           if(!existingItem){
               state.items.push({id:newItem.id , title : newItem.title , price :newItem.price , quantiy : 1 , totalPrice : newItem.price})
           }
           else{
            existingItem.quantiy++;
            existingItem.totalPrice=existingItem.totalPrice+existingItem.price
           }

        } ,
        removeFromcart(state , action){
            const id = action.payload;
            const existingItem = state.items.find(item=>item.id===id) 
            state.totalQuantity--;

            if(existingItem.quantiy===1){
                state.items = state.items.filter(item=>item.id!==id)
            }
            else{
                existingItem.quantiy--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }


        }

    }
})

export const CartActions = cart.actions;
export default cart.reducer;
