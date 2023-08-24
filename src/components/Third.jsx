import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';


export default function Third() {
  return (
    <div className='border border-gray-400 py-4 px-5 bg-white rounded-xl '>
    <FormGroup>
    <FormLabel id="demo-radio-buttons-group-label">CheckBox <span className='text-red-400'>*</span></FormLabel>
      <FormControlLabel control={<Checkbox  />} label="Option 1" />
      <FormControlLabel control={<Checkbox />} label="Option 2" />
      <FormControlLabel control={<Checkbox />} label="Option 3" />
      
    </FormGroup>
    </div>

  );
}
