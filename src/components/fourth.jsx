import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Fourth() {
  return (
    <div className='border border-gray-400 py-4 px-5 bg-white rounded-xl '>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <p className='text-lg'>Short Answer <span className='text-red-400'>*</span></p>
      <TextField id="standard-basic" label="Your answer" variant="standard" />
    </Box>

    </div>
  );
}
