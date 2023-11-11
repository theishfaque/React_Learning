import React, { useState } from 'react'

const Counter = () => {

    

    const [counter , setCounter] = useState(0);


    const increaseValue = () => {

        counter < 10 ? setCounter(counter+1) : setCounter(counter);
        // setCounter((prevCounter)=>prevCounter+1);
        // setCounter((prevCounter)=>prevCounter+1);
        // setCounter((prevCounter)=>prevCounter+1);
  
        
    }


    const decreaseValue = () => {

        counter > 0 ? setCounter(counter-1) : setCounter(counter);
  
    }
    

  return (
    <div>
      <h1 className='text-3xl font-bold'>React Counter : {counter}</h1>
      <br/>
      <button className='border-2 border-black p-2 bg-emerald-400 rounded-md ml-2' onClick={increaseValue}>Increase Value</button>
      <br/>
      <button className='border-2 border-black p-2 bg-emerald-400 rounded-md ml-2' onClick={decreaseValue}>Decrease Value</button>
    </div>
  )
  }

export default Counter
