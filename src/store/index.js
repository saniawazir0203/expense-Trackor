import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import expenseSlice from "./slices/expense";
import CardsSlice from "./slices/card";
import TransactionSlice from "./slices/transaction";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    transaction: TransactionSlice,
    cards: CardsSlice,
    expenses:expenseSlice,
    
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
