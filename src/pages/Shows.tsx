import { Button, ImageList, ImageListItem } from '@mui/material'
import React, { useEffect } from 'react'
import { tvRequests } from '../Model/requests';
import Row from '../components/Row/Row';
import Banner from '../components/Banner/Banner';

const Shows = () => {

    useEffect(() => {

    }, []);

    return (
        <div className='container'>
            <div className='banner'>
                <Banner fetchUrl={tvRequests.fetchTrending} />
            </div>
            <Row rowTitle='Comedies' fetchUrl={tvRequests.fetchComedyShows} />
            <Row rowTitle='Tendances actuelles' fetchUrl={tvRequests.fetchTrending} />
            <Row rowTitle='Netflix Originals' fetchUrl={tvRequests.fetchNetflixOriginals} />
            <Row rowTitle='Top France' fetchUrl={tvRequests.fetchTopRated} />
            <Row rowTitle="Série d'animation" fetchUrl={tvRequests.fetchAnimations} />
            <Row rowTitle='Pour les enfants' fetchUrl={tvRequests.fetchKidShows} />
            <Row rowTitle='Science Fiction' fetchUrl={tvRequests.fetchSciFiShows} />
            <Row rowTitle='Romance' fetchUrl={tvRequests.fetchRomanceShows} />
        </div>
    )
}

export default Shows