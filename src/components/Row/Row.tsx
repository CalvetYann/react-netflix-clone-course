import { ImageList, ImageListItem } from "@mui/material";
import React, { useEffect } from "react";
import MovieCmpt from "../MovieCmpt/MovieCmpt";
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
            setMovies(response.data.results);
            return response;
        }
        fetch();
    }, [fetchUrl]);


    return (
        <div className="row">
            <h2>{rowTitle}</h2>
            <div className="movies_list">

                <ImageList className="movies_posters" cols={movies.length}>
                    {movies.map((movie: Movie) => (
                        <MovieCmpt movie={movie}/>
                    ))}
                </ImageList>   
            </div>
        </div>
    );
};

export default Row;