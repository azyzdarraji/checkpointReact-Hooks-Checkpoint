import React from "react";
import {Navbar ,Container,Nav,Form,Button,FormControl} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";



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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
        <ReactStars
    count={4}
    onChange={ratingChanged}
    size={16}
    activeColor="#ffd700"
  />,
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
      </Navbar>
    )
}
export default NavBar