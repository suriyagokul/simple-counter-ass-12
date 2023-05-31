import React from 'react'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] bg-stone-500'>
        <h1 className='text-xl font-bold mb-7 text-teal-400'>{count}</h1>
        <button onClick={()=> setCount(count+1)} className='bg-indigo-500 px-14 py-3 hover:bg-indigo-600 text-white font-bold rounded'>Increment</button>
    </div>
  )
}
