import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    transactionList: [],
}

const TransactionSlice = createSlice({
    name:"transaction",
    initialState,
    reducers:{
        addtransaction:(state, action) =>{
            state.transactionList.push(action.payload)
        },
    },
});

export const {addtransaction} = TransactionSlice.actions;
export default TransactionSlice.reducer;