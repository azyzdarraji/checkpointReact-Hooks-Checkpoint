import React from "react";
import MovieCard from "./MovieCard";

function MoviesList ({movies ,searchtitle,searchrating}){
console.log(movies)
    return (
        <div className='list'>
            {
                movies.filter(movie=>movie.title.toUpperCase()
                .includes(searchtitle.toUpperCase().trim()) && movie.rating >= searchrating )
                .map((movie,i)=> (
                <MovieCard movie={movie} key={i} /> )
                )
            }
        </div>
    )
}
    export default MoviesList