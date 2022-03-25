/* eslint-disable import/no-anonymous-default-export */
import { Button, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import './App.css';
import { darkTheme } from './utils/theme';
import Shows from './pages/Shows';
import Movies from './pages/Movies';
import { Box } from '@mui/system';
import Profiles from './pages/Profiles/Profiles';

const App = () => {

  const useLocalStorage = (key: string, data: object) => {
    const [storedData, setStoredData] = React.useState(() => {
      try {
        const value = window.localStorage.getItem(key);
        
        if (value) {
          return JSON.parse(value);
        } else {
          window.localStorage.setItem(key, JSON.stringify(data));
          return data;
        }
      } catch (error) {
        return data;
      }
    });
  
    const setData = (newData: object) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(newData));
      } catch (error) {
        console.log(error);
      }
      setStoredData(newData);
    }

    return [storedData, setData];
  };

  const [isConnected, setIsConnected] = React.useState(false);
  const [profiles, setProfiles] = useLocalStorage('profiles', { "profiles": [{
    "name": 'Yann',
    "pfpURL": 'https://avatars.githubusercontent.com/u/71167181?v=4',
  }] });
  const [selectedProfile, setSelectedProfile] = useLocalStorage('selectedProfile', {});
  // const [selectedProfile, setSelectedProfile] = useLocalStorage('selectedProfile', { "name": 'John Doe', "pfpURL": 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        { isConnected ? selectedProfile.name ? (
          <div className="container">
            <Box
              sx={{
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              <nav>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  zIndex={100}
                >
                  <div>
                    <Link to="/"><Button color='secondary' variant='text'><img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" className='logo' alt="logo" /></Button></Link>
                    <Link to="/shows"><Button color='secondary' variant='text'>Série</Button></Link>
                    <Link to="/movies"><Button color='secondary' variant='text'>Films</Button></Link>
                    <Link to="/mylist"><Button color='secondary' variant='text'>Ma liste</Button></Link>
                  </div>
                  <div 
                    className='profile-pfp'
                    onClick={() => {
                      setSelectedProfile({});
                    }}
                  >
                    <Link to="/"><img src={selectedProfile.pfpURL} className='profile-image' alt="profile" /></Link>
                  </div>
                </Grid>
              </nav>
            </Box>

            

            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/mylist" element={<Homepage />} />
            </Routes>

          </div>
        ) : (
          <div className="profilesContainer">
              <nav>
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" className='loginLogo' alt="logo" />
              </nav>

              <div className='profiles'>
                <Routes>
                  <Route path="/" element={<Profiles setSelectedProfile={setSelectedProfile} profiles={profiles.profiles} setProfiles={setProfiles} />} />
                </Routes>
            </div>
          </div>
        ) : (
          <div className="loginContainer">
            <div className='background'>
              <nav>
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" className='loginLogo' alt="logo" />
              </nav>
            
              <div className='loginFields'>
                <Routes>
                  <Route path="/" element={<Login setIsConnected={setIsConnected} />} />
                </Routes>
              </div>
            </div>
          </div>
        )}

        
      </Router>
    </ThemeProvider>
  );
}

export default App