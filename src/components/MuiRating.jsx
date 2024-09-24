import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Rating, Stack } from '@mui/material'
import React, { useState } from 'react'

export default function MuiRating() {
    const [value,setValue] = useState(0);
    const handleChange=(e,num)=>{
           setValue(num)
    }
  return (
    <Stack spacing={2}>
        <Rating 
          value={value} 
          onChange={handleChange} 
          precision={0.5}
          icon={<Favorite  color='error'/>}
          emptyIcon={<FavoriteBorder/>}
          highlightSelectedOnly
        />
    </Stack>
  )
}
