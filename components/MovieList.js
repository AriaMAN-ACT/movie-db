import {Fragment} from 'react';

import MovieCard from "./MovieCard";

const MovieList = (props) => {
    return props.movies.map(movie => <MovieCard movie={movie} key={movie.name}/>);
};

export default MovieList;