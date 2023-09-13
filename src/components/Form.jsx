import React, { useRef } from 'react'

const Form = ({search}) => { 

   const key = useRef('');
  return (
    <div className='d-flex justify-content-center p-3'> 
         <input ref={key} type="text" className='form-control'  placeholder='City/Weather'/>
         <button onClick={() => search(key.current.value)} className='btn btn-sm btn-dark border-radius-3 text-white '>Search</button>
    </div>
  )
}

export default Form