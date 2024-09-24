import React, { useState } from 'react'
import { Box , TextField ,MenuItem} from '@mui/material'

export default function MuiSelect() {
    const [countries , setCountries] = useState([])
    const handleChange=(e)=>{
        setCountries(e.target.value);
    }
  return (
    <Box width='250px'>
      MuiSelect
      <TextField
        label='select country' 
        select
        fullWidth
        size='smaill'
        color='secondary'
        helperText='Select country'
        SelectProps={{
            multiple:true,
            value: countries,
        }}
        onChange={handleChange}
      >
         <MenuItem value='IN'>India</MenuItem>
         <MenuItem value='USA'>America</MenuItem>
         <MenuItem value='CHN'>China</MenuItem>
         <MenuItem value='AU'>Australia</MenuItem>
        </TextField>

    </Box >
  )
}
