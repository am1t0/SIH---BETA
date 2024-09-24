import React, { useState } from 'react'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import { Bookmark, BookmarkBorder } from '@mui/icons-material'

export default function MuiCheckBox() {
    const [accpt ,setAccpt] = useState(false)
    const [skills , setSkills] = useState([])

     const handleChangeSkill=(e)=>{
         const skill = e.target.value;
         const index = skills.indexOf(skill)
         if(index===-1)
            setSkills([...skills,skill])
        else
           setSkills(skills.filter((skills)=>skills!==skill))
     }
  return (
    <Box>
       <Box>
         <FormControlLabel 
           label="I accept terms and conditions"
           control={<Checkbox checked={accpt} onChange={()=> setAccpt(!accpt)} />}
         />
          <Checkbox 
            icon = {<BookmarkBorder/>}
            checkedIcon ={<Bookmark/>}
            checked={accpt}
            onChange={()=> setAccpt(!accpt)}
         />
       </Box>

       <Box>
         <FormControl>
             <FormLabel>Skills</FormLabel>
             <FormGroup row>
             <FormControlLabel 
                    label="HTML"
                    control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleChangeSkill} />}
             /> 
             <FormControlLabel 
                 label="CSS"
                 control={<Checkbox value='css' checked={skills.includes('css')}  onChange={handleChangeSkill}/>}
              />
              <FormControlLabel 
              label="JAVASCRIPT"
              control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleChangeSkill}/>}
           />
             </FormGroup>
             <FormHelperText>INVALID</FormHelperText>
         </FormControl>
       </Box>
    </Box>
  )
}
