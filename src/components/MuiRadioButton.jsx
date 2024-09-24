import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

export default function MuiRadioButton() {
    const [value , setValue] = useState();
    const handleChange =(e)=>{
        setValue(e.target.value)
    }
  return (

    <Box>
       <FormControl>
        <FormLabel id='job-experience'>
            Years of experience
        </FormLabel>
        <RadioGroup 
           aria-label='job-experience'
           onChange={handleChange}
           row
        >
         <FormControlLabel control={<Radio/>} label='0-2' value='0-2'/>
         <FormControlLabel control={<Radio/>} label='3-5' value='3-5'/>
         <FormControlLabel control={<Radio/>} label='5-8' value='5-8'/>
        </RadioGroup>
         <FormHelperText>Invalid selection</FormHelperText>
       </FormControl>
    </Box>
  )
}
