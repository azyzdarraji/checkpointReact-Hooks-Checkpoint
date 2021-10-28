import React from "react";
import { useState } from "react";
import {Button,Modal,Form} from 'react-bootstrap'

function AddMovie({addMovie}) {
    const [title,setTitle]=useState('') ; 
    const [description,setDescription]=useState('');
    const [posterURL, setPosterURL] =useState('');
    const [rating,setRating]=useState(0) ;

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body>

          <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Movie Title </Form.Label>
          <Form.Control type="text" placeholder="Enter Title"
          onChange={e=>setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label> Description </Form.Label>
          <Form.Control type="text" placeholder="Enter Description" 
          onChange={e=>setDescription(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label> PosterURL </Form.Label>
          <Form.Control type="text" placeholder="Enter PosterURL" 
          onChange={e=>setPosterURL(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label> Rating </Form.Label>
          <Form.Control type="Number" placeholder="Enter Rating" 
          onChange={e=>setRating(e.target.value)}/>
          </Form.Group>

         
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{addMovie({title,description,posterURL,rating});handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    
    );
  }
  
  export default AddMovie