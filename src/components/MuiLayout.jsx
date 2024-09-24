import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

export default function MuiLayout() {
  return (
    <>
    <Stack 
       direction='row'
       spacing={2}
       divider={<Divider orientation='vertical' flexItem/>}
       sx={{
        border:'1px solid'
       }}>
    <Box sx={{
        backgroundColor:'primary.main',
        color:'white',
        height:'100px',
        width:'100px',
        padding:'16px',
        '&:hover': {
            backgroundColor:'primary.light',
        }
    }}>
       Amit Ji
    </Box>

    <Box
      display='flex'
      height='100px'
      width='100px'
      bgcolor='success.light'
      p={2}
    >
       Pandey
    </Box>
    </Stack>

    <Grid container m={4}>
        <Grid item bgcolor='primary.light' p={2} xs={12} sm={6}>Item 1</Grid>
        <Grid item bgcolor='primary.light' p={2} xs={12} sm={6}>Item 2</Grid>
        <Grid item bgcolor='primary.light' p={2} xs={12} sm={6}>Item 3</Grid>
        <Grid item bgcolor='primary.light' p={2} xs={12} sm={6}>Item 4</Grid>
    </Grid>
    </>
  )
}
