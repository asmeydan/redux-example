import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import shoppingListReducer from "../features/shoppingList/shoppingListSlice";



export const store = configureStore({
    reducer: {
        counter: counterReducer,
        shoppingList: shoppingListReducer
    }
})