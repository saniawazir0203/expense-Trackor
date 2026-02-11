import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    card: null,
    balance:0,
}

const CardsSlice = createSlice({
    name:"card",
    initialState,
    reducers:{
        addCard:(state, action) =>{
            state.card = action.payload;
        },
        addBalance:(state,action) =>{
            console.log('action.payload =>',action.payload);
            
            state.balance = Number(state.balance || 0) + Number(action.payload || 0);
        }
    },
    

});

export const {addCard,addBalance} = CardsSlice.actions;
export default CardsSlice.reducer;
