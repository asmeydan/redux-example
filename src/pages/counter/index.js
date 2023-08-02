import { customValue, decrement, increment } from "@/redux/features/counter/counterSlice";
import React, { useState } from "react";
import { useSelector, useDispatch} from 'react-redux'

const index = () => {
  const [numberInput, setNumberInput] = useState(0)

  const count = useSelector((state)=> state.counter.counter)
  const dispatch = useDispatch()

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center gap-12">
      <div className=" text-5xl font-medium">
        <span className=" font-bold">Sayı: </span> {count}
      </div>

      <div className="flex gap-5">
        <button
          className=" border border-gray-600 rounded px-4 py-1 text-xl bg-violet-600 text-white hover:bg-violet-800"
          onClick={() => dispatch(decrement())}
        >
          azalt
        </button>
        <button
          className=" border border-gray-600 rounded px-4 py-1 text-xl bg-violet-600 text-white hover:bg-violet-800"
          onClick={() => dispatch(increment())}
        >
          arttır
        </button>
      </div>

      <div className=" h-9 flex gap-5">
        <input value={numberInput} onChange={(e)=> setNumberInput(e.target.value)} type="number" className=" border border-gray-600 rounded h-full px-4 text-lg font-semibold" />
        <button
          className=" h-full flex items-center justify-center border border-gray-600 rounded px-4 py-1 text-xl bg-violet-600 text-white hover:bg-violet-800"
          onClick={() => dispatch(customValue(+numberInput))}
        >
          sayıyı ayarla
        </button>
      </div>
    </div>
  );
};

export default index;
