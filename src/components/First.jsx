import React from 'react'

const First = () => {
  return (
    <div className='border border-gray-400 py-4 px-5 bg-white rounded-xl '>
        <p className='text-4xl font-normal '>Assignment Task</p>
        <div className="border-t border-gray-400 mt-3 "></div>
        <div className='flex gap-2 py-4'>
            <p>nitish98888@gmail.com</p>
            <p className='text-blue-500'>switch account</p>
        </div>
        <p>The name and photo associated with your Google account will be recorded when you upload<br/> files and submit this form. Your email is not part of your response.</p>
        <div className="border-t border-gray-400 mt-3 "></div>
        <p className='text-red-400 py-4'>* indicates required question</p>
    </div>
  )
}

export default First