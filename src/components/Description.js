import React from "react";


function Description({match,movies}) 
{
    const movie=movies.find((movie)=> movie.id==match.params.id  )

return (
 <div> 
<iframe width="560" height="315"
 src={movie.trailer} title="YouTube video player" 
 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowfullscreen></iframe>
 <h1> {movie.description} </h1>
 </div>
)
}
export default Description