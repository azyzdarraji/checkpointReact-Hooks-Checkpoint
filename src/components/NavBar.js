import React from "react";
import {Navbar ,Container,Nav,Form,Button,FormControl} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom"



function NavBar({setSearchtitle ,setSearchrating})
{
  const ratingChanged = (newRating) => {
    setSearchrating(newRating);
  };
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
        <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={e=> setSearchtitle(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
        </Container>
    
  
      </Navbar>
    )
}
export default NavBar