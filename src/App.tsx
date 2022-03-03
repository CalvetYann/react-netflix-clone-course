/* eslint-disable import/no-anonymous-default-export */
import { Button, CssBaseline, Switch, ThemeProvider } from '@mui/material';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import './App.css';
import { darkTheme, lightTheme } from './utils/theme';

const App = () => {

  const [theme, setTheme] = React.useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
          <div className="container">
              <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" className='logo' alt="logo" />
              <nav>
                  <Link to="/"><Button variant='contained'>Home</Button></Link>
                  <Link to="/login"><Button variant='contained'>Login</Button></Link>
                  <Switch defaultChecked={theme} onChange={toggleTheme} />
              </nav>



              <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
          </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
