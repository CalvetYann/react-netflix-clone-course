import { TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <TextField id="standard-basic" label="Login" variant="standard" /><br />
        <TextField id="standard-basic" label="Password" variant="standard" />
    </div>
  )
}

export default Login