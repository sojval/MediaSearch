import React, { useState } from 'react'
import {useDispatch  } from "react-redux";
import { setQuery } from '../redux/Features/SearchSlice';


function SearchBar() {
  const [text,setText] = useState('')
  const dispatch = useDispatch()
  const submitHandler=(e)=>{
    e.preventDefault()

    dispatch(setQuery(text))
    
    setText('')
  }
    
  return (
    <div>
        <form onSubmit={(e)=>submitHandler(e)} action="" className='flex p-10 gap-5'>
            <input 
            required
            value={text}
            onChange={(e)=>{
              setText(e.target.value)
            }}
            className=' w-full border-2 px-4 py-2 text-xl rounded-2xl outline-none'
            type="text" 
            placeholder='Search Anything...' />
            <button className=' active:scale-95 border-2 px-4 py-2 text-xl rounded-2xl outline-none'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar