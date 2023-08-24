import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Eleven = () => {
  return (
    <div className=' '>
        <div className='flex justify-between'>
          
       <Link to='/Submit' className='bg-[#7349bd] text-white py-3 px-8 rounded-xl'>Submit</Link>
      
       

       
          
       
       <p className='mt-3'>page 1 0f 1</p>
       <button className='text-[#7349bd]'>clear form</button>
       
        </div>
        <p className='text-sm mt-3'>Never submit passwords through Google Forms.</p>
        <p className='text-sm mx-4 mt-4'>This content is neither created nor endorsed by Google. Report Abuse - Terms of Service - Privacy Policy</p>
        <p className='text-center text-2xl'>Google Form</p>
    </div>
  )
}

export default Eleven