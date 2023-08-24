import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPlacement() {
  return (
    <div className='border border-gray-400 py-4 px-5 bg-white rounded-xl '>
    
    <FormControl >
      <FormLabel id="demo-form-control-label-placement" className='py-4'>Linear Scale<span className='text-red-400'>*</span></FormLabel>
      <div className='text-center items-center'>

      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue=" "
      >
        <p className='mt-8 '>worst</p>
        <FormControlLabel
          value="1"
          control={<Radio />}
          label="1"
          labelPlacement="top"
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="2"
          labelPlacement="top"
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          label="3"
          labelPlacement="top"
        />
        <FormControlLabel
          value="4"
          control={<Radio />}
          label="4"
          labelPlacement="top"
        />
        <p className='mt-8'>best</p>
        
      </RadioGroup>
      </div>
    </FormControl>
    </div>
  );
}
