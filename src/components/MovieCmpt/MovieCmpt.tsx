import { Button, Grid, ImageListItem, Modal, Stack } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { Movie } from '../../Model/types'
import "./MovieCmpt.css";

type Props = {
    movie: Movie
}

function MovieCmpt({ movie }: Props) {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <ImageListItem className="movie_poster" key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} onClick={openModal} />
      </ImageListItem>

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
                  backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`
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
                      {movie.title || movie.original_title || movie.name || movie.original_name }
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
                      <h4 style={{ color: "lime", textShadow: "0 0 2px black" }}>Recommandé à {(Number(movie.vote_average)*10)}%</h4>
                    </Grid>
                    <Grid item xs={6}>
                      <h4 style={{ textShadow: "0 0 2px black" }}>{ movie.release_date || movie.first_air_date }</h4>
                    </Grid>
                  </Grid>
                  <Grid item xs={9}>
                    <h4 style={{ fontWeight: "normal", textShadow: "0 0 2px black" }}>{ movie.overview }</h4>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  { movie.origin_country ? ( <h4 style={{ textShadow: "0 0 2px black" }}>Pays d'origine : { movie.origin_country[0] }</h4> ) : null }
                  <h4 style={{ textShadow: "0 0 2px black" }}>VO : { movie.original_language }</h4>
                  <h4 style={{ textShadow: "0 0 2px black" }}>Titre original : { movie.original_title || movie.original_name }</h4>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Modal>
    </>
  )
}

export default MovieCmpt