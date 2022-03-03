import { Button, ImageList, ImageListItem } from '@mui/material'
import React, { useEffect } from 'react'
import requests from '../Model/requests';
import Row from '../components/Row/Row';

const Homepage = () => {

    useEffect(() => {

    }, []);

    return (
        <div className='container'>
            <Row rowTitle='Comedies' fetchUrl={requests.fetchComedyMovies} />
            <Row rowTitle='Tendances actuelles' fetchUrl={requests.fetchTrending} />
            <Row rowTitle='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
            <Row rowTitle='Top France' fetchUrl={requests.fetchTopRated} />
            <Row rowTitle='Action' fetchUrl={requests.fetchActionMovies} />
            <Row rowTitle='Documentaires' fetchUrl={requests.fetchDocumentaries} />
            <Row rowTitle='Horreur' fetchUrl={requests.fetchHorrorMovies} />
            <Row rowTitle='Romance' fetchUrl={requests.fetchRomanceMovies} />
        </div>
    )
}

export default Homepage