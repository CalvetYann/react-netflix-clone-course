import { ImageList, ImageListItem } from "@mui/material";
import React, { useEffect } from "react";
import axios from "./../../Model/axios";
import { Movie } from './../../Model/types';
import "./Row.css";

type Props = {
    rowTitle: string;
    fetchUrl: string;
};

const Row = ({ rowTitle, fetchUrl }: Props) => {
    const [movies, setMovies] = React.useState([]);
    
    useEffect(() => {
        async function fetch() {
            const response = await axios.get(fetchUrl);
            console.log(response.data.results);
            setMovies(response.data.results);
            return response;
        }
        fetch();
    }, [fetchUrl]);


    return (
        <div className="row">
            <h2>{rowTitle}</h2>
            <div className="movies_list">

                <ImageList cols={movies.length}>
                    {movies.map((movie: Movie) => (
                        <ImageListItem className="movie_poster" key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} />
                        </ImageListItem>
                    ))}
                </ImageList>   
            </div>
        </div>
    );
};

export default Row;