import { FormControlLabel,Switch } from '@mui/material'
import React from 'react'

export default function MuiSwitch() {
  return (
    <div>
        <FormControlLabel 
           label='dark mode'
           control={<Switch/>}
        />
    </div>
  )
}
