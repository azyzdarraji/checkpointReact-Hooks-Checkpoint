import React from "react";
import {Link} from "react-router-dom"
import {Card,Button} from 'react-bootstrap'
function MovieCard({movie})
{
    return(
      
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterURL} width="100%" heigth="400px" />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text>
    <Card.Text>
       {'⭐'.repeat(movie.rating)}
    </Card.Text>
    <Link to={`/description/${movie.id}`}>
    <Button variant="primary"> Go To Film </Button>
    </Link>
  </Card.Body>
</Card>

    )
}
export default MovieCard