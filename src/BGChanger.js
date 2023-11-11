import React, { useState } from 'react'

const BGChanger = () => {

    const [color,setColor] = useState("red")

    const brownColor = () => {
        setColor("brown")
    }
  return (
    <div className='w-full h-screen ' style={{backgroundColor:color}}>

      <div className=' ml-[300px] bg-white rounded w-max px-3 py-1 space-x-6 '>
        <button onClick={()=> setColor("red")} style={{backgroundColor:"red"}} className='rounded-3xl text-white py-1 px-3'>Red</button>
        <button onClick={()=> setColor("green")} style={{backgroundColor:"green"}} className='rounded-3xl text-white py-1 px-3'>Green</button>
        <button onClick={()=> setColor("blue")} style={{backgroundColor:"blue"}} className='rounded-3xl text-white py-1 px-3'>Blue</button>
        <button onClick={()=> setColor("yellow")} style={{backgroundColor:"yellow"}} className='rounded-3xl text-black py-1 px-3'>Yellow</button>
        <button onClick={()=> setColor("purple")} style={{backgroundColor:"purple"}} className='rounded-3xl text-white py-1 px-3'>Purple</button>
        <button onClick={()=> setColor("black")} style={{backgroundColor:"black"}} className='rounded-3xl text-white py-1 px-3'>Black</button>
        <button onClick={()=> setColor("olive")} style={{backgroundColor:"olive"}} className='rounded-3xl text-white py-1 px-3'>Olive</button>
        <button onClick={brownColor} style={{backgroundColor:"Brown"}} className='rounded-3xl text-white py-1 px-3'>Brown</button>

      </div>
    </div>
  )
}

export default BGChanger
