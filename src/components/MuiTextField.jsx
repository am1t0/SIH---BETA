import React, { useState } from "react";
import {
  InputAdornment,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";

export default function MuiTextField() {
  const [value, setValue] = useState();

  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            error={!value}
            helperText={!value && "Please enter your name"}
            onChange={(e) => setValue(e.target.value)}
          />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Password"
            type="Password"
            variant="outlined"
            color="secondary"
            size="small"
            error
            disabled
            helperText="Dont share your password"
          />
          <TextField
            label="Other"
            variant="standard"
            color="secondary"
            size="small"
            required
          />
          <TextField label="Read only" InputProps={{ readOnly: true }} />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
          />

        </Stack>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            minRows={9}
          />
      </Stack>
    </div>
  );
}
