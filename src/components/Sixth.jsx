import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Sixth() {
  const [choose, setchoose] = React.useState('');

  const handleChange = (event) => {
    setchoose(event.target.value);
  };

  return (
    <div className='border border-gray-400 py-4 px-5 bg-white rounded-xl '>
    <Box sx={{ minWidth: 50 }}>
      <p className='text-lg pb-4'>Drop Down <span className='text-red-400'>*</span></p>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className='py-3'>Choose</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={choose}
          label="Choose"
          onChange={handleChange}
        >
          <MenuItem value={10}>Option 1</MenuItem>
          <MenuItem value={20}>Option 2</MenuItem>
          <MenuItem value={30}>Option 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>

  );
}
