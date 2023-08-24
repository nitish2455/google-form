import React from 'react'

const Nine = () => {
  return (
    <div className='border border-gray-400 py-4 px-5 bg-white rounded-xl '>
        <p>Multiple choice Grid <span className='text-red-400'>*</span> </p>
        <div className='flex justify-end gap-20'>
            <p>Column 1</p>
            <p>Column 2</p>
            <p>Column 3</p>
        </div>
        <div className='flex justify-between my-6 bg-[#f8f9fa]'>
            <p>Row 1</p>
                <div className='flex gap-36 mx-3'>
                <input type="radio" class="form-radio text-blue-500" name="radioGroup" value="option1"/>
                <input type="radio" class="form-radio text-blue-500" name="radioGroup" value="option1"/>
                <input type="radio" class="form-radio text-blue-500" name="radioGroup" value="option1"/>
                </div>
            
        </div>
        <div className='flex justify-between my-6 bg-[#f8f9fa]'>
            <p>Row 2</p>
                <div className='flex gap-36 mx-3'>
                <input type="radio" class="form-radio text-blue-500" name="radioGroup" value="option2"/>
                <input type="radio" class="form-radio text-blue-500" name="radioGroup" value="option2"/>
                <input type="radio" class="form-radio text-blue-500" name="radioGroup" value="option2"/>
                </div>
            
        </div>
        <div className='flex justify-between my-6 bg-[#f8f9fa]'>
            <p>Row 3</p>
                <div className='flex gap-36 mx-3'>
                <input type="radio" class="form-radio text-blue-500" name="radioGroup" value="option3"/>
                <input type="radio" class="form-radio text-blue-500" name="radioGroup" value="option3"/>
                <input type="radio" class="form-radio text-blue-500" name="radioGroup" value="option3"/>
                </div>
            
        </div>

    </div>
  )
}

export default Nine