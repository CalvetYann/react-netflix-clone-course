import { Button, TextField } from '@mui/material'
import React from 'react';import Input from '../../components/Input/Input';
import './Login.css';

type Props = {
  setIsConnected: (isConnected: boolean) => void;
};


const Login = ({ setIsConnected }: Props) => {
  return (
    <div>

      <h1 className='title'>S'identifier</h1>

      <TextField
        className='input'
        variant="filled"
        label="Email"
        type="email"
        name="email"
        color='primary'
        sx={{ width: '100%', backgroundColor: '#222', input: { color: 'white' } }}
        InputLabelProps={{
          style: { color: '#999', },
      }}
      />
      <br/>
      <br/>

      <TextField
        className='input'
        variant="filled"
        label="Mot de passe"
        type="password"
        name="password"
        sx={{ width: '100%', backgroundColor: '#222', input: { color: 'white' } }}
        InputLabelProps={{
          style: { color: '#999', },
      }}
      />
      <br/>
      <br/>

      <Button
        className='button'
        onClick={() => {
          setIsConnected(true);
        }}
        variant="contained"
      >
        S'identifier
      </Button>
      <br/>
      <br/>

      <div className='links'>
        <a href='#'>Pas encore inscrit ?</a>
        <a href='#'>Mot de passe oublié ?</a>
      </div>
    </div>
  )
}

export default Login