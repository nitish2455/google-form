import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Second() {
  return (
    <div className='border border-gray-400 py-4 px-5 bg-white rounded-xl '>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"> MCQ <span className='text-red-400'>*</span></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=" "
        name="radio-buttons-group"
      >
        <FormControlLabel value="Option 1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="Option 2" control={<Radio />} label="Option 2" />
        <FormControlLabel value="Option 3" control={<Radio />} label="Option 3" />
      </RadioGroup>
    </FormControl>
    </div>

  );
}
