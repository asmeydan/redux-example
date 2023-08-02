import { addElement, updateList } from "@/redux/features/shoppingList/shoppingListSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const [input, setInput] = useState("")

  const shoppingList = useSelector((state) => state.shoppingList.shoppingList);
  const dispatch = useDispatch();

  useEffect(()=> {
    localStorage.setItem("shoppingList", JSON.stringify([]))
    dispatch(updateList())
  }, [])

  return (
    <div className=" min-h-screen flex flex-col justify-start pt-20 items-center">
      <div className=" h-11 flex gap-5 ">
        <input
          type="text"
          className=" border border-gray-600 rounded h-full px-4 text-lg font-semibold"
          value={input}
          onChange={(e)=> setInput(e.target.value)}
        />
        <button
          className=" border border-gray-600 rounded px-4 py-1 text-xl bg-violet-600 text-white hover:bg-violet-800"
          onClick={() => {
            dispatch(addElement(input))
            setInput("")
          }}
        >
          ekle
        </button>
      </div>
      <div className=" flex-1 w-full flex flex-col gap-5 justify-center items-center h-full ">
        <p className=" text-xl font-semibold">Alışveriş Listesi</p>
        <div className=" rounded-lg overflow-x-hidden overflow-y-auto border border-black w-full max-w-sm h-96 flex flex-col gap-2 px-5 py-2">
          {shoppingList.map((e, i) => (
            <div key={i} className=" flex justify-between items-center rounded bg-gray-100 px-2 py-1">
              <div>- {e}</div>
              <div className=" text-red-600 cursor-pointer font-bold">x</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
