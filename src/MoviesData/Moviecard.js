import React from 'react'

const Moviecard = (props) => {
  return (
    <div className='flex flex-col align-middle bg-slate-300 p-4 my-4 w-[23%] hover:shadow-xl'>
      <img src={props.Poster} alt="" />
      <p>{props.Title}</p>
      <p>Year : {props.Year}</p>
    </div>
  )
}

export default Moviecard
