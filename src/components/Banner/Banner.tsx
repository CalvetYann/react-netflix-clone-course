import axios from './../../Model/axios';
import React, { useEffect } from 'react'
import { Movie } from '../../Model/types';
import { Box } from '@mui/system';
import { Avatar, Button, Grid, Modal, Stack, Typography } from '@mui/material';

type Props = {
    fetchUrl: string;
}

function Banner({ fetchUrl }: Props) {
    const [topTrending, setTopTrending] = React.useState<Movie>();
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    
    useEffect(() => {
        async function fetch() {
            const response = await axios.get(fetchUrl);
            setTopTrending(response.data.results[0]);
            return response;
        }
        fetch();
    }, [fetchUrl]);
  return (
    <>
        <Box sx={{
            position: 'relative',
            height: '95vh',
            display: 'flex',
            alignItems: 'center',
            '&::before': {
                position: 'absolute',
                content: '""',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/w1280${topTrending?.backdrop_path}")`
            }
            }}>
            <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="space-between"
                    ml={2}
                    mt={40}
                    zIndex={100}
                >
                    <Grid item xs={12}>
                        <h1 style={{ margin: '10px 40px', fontWeight: 'bold', fontSize: '5em', textShadow: "0 0 7px black" }}>{topTrending?.title || topTrending?.name }</h1>
                        <h4 style={{ width: '50%', margin: '5px 45px', fontWeight: 'initial', fontSize: '20px', textShadow: "0 0 2px black" }}>{topTrending?.overview}</h4>
                    </Grid>
                    <Grid item >
                        <Stack direction="row" ml={5} spacing={2}>
                            <Button size="large" variant="contained" color="primary">Lecture</Button>
                            <Button size="large" color="secondary" variant="contained" onClick={openModal}>Plus d'info</Button>
                        </Stack>
                    </Grid>
                </Grid>
        </Box>
        <Modal
        open={modalIsOpen}
        onClose={closeModal}
      >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '50%',
              backgroundColor: 'rgb(25,25,25)',
              borderRadius: '10px',
            }}
          >
            <Box 
              sx={{
                position: 'relative',
                height: '50vh',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '10px',
                '&::after': {
                  borderRadius: '10px 10px 0 0',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  content: '""',
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'cover',
                  backgroundImage: `url("https://image.tmdb.org/t/p/w1280${topTrending?.backdrop_path}")`
                }
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Grid
                  container
                  direction="row"
                  zIndex={100}
                  p={2}
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(to bottom, rgba(25,25,25,0) 0%, rgba(25,25,25,0.9) 100%)',
                  }}
                >
                  <div>
                    <h1 style={{ textShadow: "0 0 7px black" }}>
                      {topTrending?.title || topTrending?.original_title || topTrending?.name || topTrending?.original_name }
                    </h1>
                    <Button color='secondary' variant='contained'>Lecture</Button>
                  </div>
                </Grid>
              </Box>
            </Box>
            <Box>
              <Grid
                container
                p={2}
              >
                <Grid item xs={9}>
                  <Grid container>
                    <Grid item xs={3}>
                      <h4 style={{ color: "lime", textShadow: "0 0 2px black" }}>Recommandé à {(Number(topTrending?.vote_average)*10)}%</h4>
                    </Grid>
                    <Grid item xs={6}>
                      <h4 style={{ textShadow: "0 0 2px black" }}>{ topTrending?.release_date || topTrending?.first_air_date }</h4>
                    </Grid>
                  </Grid>
                  <Grid item xs={9}>
                    <h4 style={{ fontWeight: "normal", textShadow: "0 0 2px black" }}>{ topTrending?.overview }</h4>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  { topTrending?.origin_country ? ( <h4 style={{ textShadow: "0 0 2px black" }}>Pays d'origine : { topTrending?.origin_country[0] }</h4> ) : null }
                  <h4 style={{ textShadow: "0 0 2px black" }}>VO : { topTrending?.original_language }</h4>
                  <h4 style={{ textShadow: "0 0 2px black" }}>Titre original : { topTrending?.original_title || topTrending?.original_name }</h4>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Modal>
    </>
  )
}

export default Banner