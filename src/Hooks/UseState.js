import { func } from "prop-types"
import { useState } from "react"
import React from 'react'

const UseState = () => {

  const [number,setNumber] = useState(0)

  function increment(){
    let i = number + 1;
    setNumber(i);
  }

  function decrement(){
    let j = number - 1;
    setNumber(j);
  }

  return (
    <div>
      <h1 className="font-xl">Counter : {number}</h1>
      <button className="bg-slate-800 p-4 text-white" onClick={increment}>Increment</button>
      <button className="bg-slate-800 p-4 m-6 text-white" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseState

