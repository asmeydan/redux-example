import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shoppingList: []
}

export const shoppingListSlice = createSlice({
    name: "shoppingList",
    initialState,
    reducers: {
        addElement: (state, action)=> {
            state.shoppingList.push(action.payload)
            localStorage.setItem("shoppingList", JSON.stringify(state.shoppingList))
        },
        updateList: (state)=> {
            console.log(JSON.parse(localStorage.getItem("shoppingList")))
            state.shoppingList = JSON.parse(localStorage.getItem("shoppingList"))
        }
    }
})

export const { addElement, updateList } = shoppingListSlice.actions
export default shoppingListSlice.reducer