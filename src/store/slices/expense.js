import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    expensesList: []
}

const ExpenseSlice = createSlice({
    name:"expense",
    initialState,
    reducers:{
        addExpense:(state, action) =>{
            state.expensesList.push(action.payload)
        },
        editExpense:(state, action) =>{
            console.log("redux",action.payload)
            const { id } = action.payload;

            const index = state.expensesList.findIndex(
            item => item.id === id
            );

        if (index !== -1) {
        state.expensesList[index] = action.payload
    }
},

        deleteExpense: (state, action) => {
          const id = action.payload;
           state.expensesList = state.expensesList.filter(
           (item) => item.id !== id
      );
    },
  },
});
export const {addExpense, editExpense, deleteExpense} = ExpenseSlice.actions;
export default ExpenseSlice.reducer