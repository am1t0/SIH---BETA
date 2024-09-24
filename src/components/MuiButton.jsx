import { Button , Stack ,IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';

export default function MuiButton() {

    const [formats, setFormats] = useState([]);

  const handleFormatChange = (event, newFormats) => {
    setFormats(newFormats);
  };
  return (
    <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
       <Button variant='text' href='https://google.com'>Text</Button>
       <Button variant='contained'>Contaned</Button>
       <Button variant='outlined'>Outlined</Button>
    </Stack>

      <Stack spacing={2} direction='row'>
         <Button variant='contained' color='primary'>primary</Button>
         <Button variant='contained' color='secondary'>secondary</Button>
         <Button variant='contained' color='error'>error</Button>
         <Button variant='contained' color='warning'>warning</Button>
         <Button variant='contained' color='info'>info</Button>
         <Button variant='contained' color='success'>success</Button>
      </Stack>

       <Stack display='block' spacing={2} direction='row'>
          <Button variant='contained' size='small'>small</Button>
          <Button variant='contained' size='medium'>medium</Button>
          <Button variant='contained' size='large'>large</Button>
       </Stack>

       <Stack spacing={2} direction='row'>
            <Button variant='contained' endIcon={<SendIcon />} disableElevation disableRipple onClick={()=> alert('')}>Send</Button>

             <IconButton color='gray' size='small'>
                <SendIcon />
             </IconButton>
       </Stack>

       <Stack spacing={2} direction='row'>
          <ButtonGroup 
             variant='outlined' 
             orientation='vertical' 
             size='small' 
             color='success'
           >
            <Button>left</Button>
            <Button>center</Button>
            <Button>right</Button>
          </ButtonGroup>

       </Stack>

       <Stack direction='row'>
         <ToggleButtonGroup 
           value={formats} 
           onChange={handleFormatChange}
           color='secondary'
           orientation='vertical'
           exclusive
         >
            <ToggleButton aria-label='text' value='bold'>
                <FormatBold/>
            </ToggleButton>
            <ToggleButton aria-label='italic' value='italic'>
                <FormatItalic/>
            </ToggleButton>
            <ToggleButton aria-label='underlined'  value='underlined'>
                <FormatUnderlined/>
            </ToggleButton>
         </ToggleButtonGroup>
         
       </Stack>
    </Stack>
  )
}
