import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingList: [],
};

export const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.shoppingList.push(action.payload);
      localStorage.setItem("shoppingList", JSON.stringify(state.shoppingList));
    },
    deleteElement: (state, action)=> {
        let index = state.shoppingList.indexOf(action.payload)
        state.shoppingList.splice(index, 1)
        localStorage.setItem("shoppingList", JSON.stringify(state.shoppingList));
    },
    updateList: (state) => {
      if (JSON.parse(localStorage.getItem("shoppingList")) == null) {
        localStorage.setItem("shoppingList", JSON.stringify([]));
      }
      state.shoppingList = JSON.parse(localStorage.getItem("shoppingList"));
    },
  },
});

export const { addElement, deleteElement, updateList } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
