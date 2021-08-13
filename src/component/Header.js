import React from 'react'
import {Navbar,Container,Nav,NavDropdown,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./Header.css"
import a from "../images/a.jpg"
const Header = () => {
    return (
        <div>
          <>
  
 
  <Navbar bg="light">
  <Container>
    <Navbar.Brand href="#home">
      <img
       
       width="150"
       height="120"
       src={a}
        className="d-inline-block align-top"
        alt=""
      />
      
    </Navbar.Brand>
    
    <Nav className="font-weight-bold h4 mx-4">
      <Nav.Link href="#home" className="mx-3">HOME</Nav.Link>
      <Nav.Link href="#features"className="mx-3">QUESTIONSARRE</Nav.Link>
      <Nav.Link href="#pricing"className="mx-3">PROFILE</Nav.Link>
      <Nav.Link href="#pricing"className="mx-3">LOGIN</Nav.Link>
    </Nav>
   
  </Container>
      
  
  </Navbar>
  
</>
        </div>
    )
}

export default Header
