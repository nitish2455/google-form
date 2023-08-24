import React from 'react'
import First from './First.jsx';
import Second from './Second.jsx';
import Third from './Third.jsx';
import Fourth from './fourth.jsx';
import Fifth from './Fifth.jsx';
import Sixth from './Sixth.jsx';
import Seventh from './Seventh.jsx';
import Eigth from './Eigth.jsx';
import Nine from './Nine.jsx';
import Ten from './Ten.jsx';
import Eleven from './Eleven.jsx';

const Homepage = () => {
  return (
    <div className="bg-gray-200 min-h-full items-center px-64 ">
    <div className='py-4'>
    <First/>
    </div>
      <div className='py-2'>
      <Second/>
      </div>
      
      <div className='py-2'>
      <Third/>
      </div>
      <div className='py-2'>
      <Fourth/>
      </div>
      <div className='py-2'>
      <Fifth/>
      </div>
      <div className='py-2'>
      <Sixth/>
      </div>
      <div className='py-2'>
      <Seventh/>
      </div>
      <div className='py-2'>
      <Eigth/>
      </div>
      <div className='py-2'>
      <Nine/>
      </div>
      <div className='py-2'>
      <Ten/>
      </div>
      <div className='py-2'>
      <Eleven/>
      </div>
      </div>
  )
}

export default Homepage