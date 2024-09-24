import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function MuiAutoComplete() {
    const skills = {
    }
    const [value,setValue] = useState('');

    const handleChange=(e,newVal)=>{
           setValue(newVal)
           console.log(newVal)
    }

  return (
    <Stack spacing={2} width='250px'> 
        <Autocomplete  
           options={skills}
           renderInput={(params)=> <TextField {...params} label='Skills' />}
           value={value}
           onChange={handleChange}
           freeSolo
        />
    </Stack>
  )
}
