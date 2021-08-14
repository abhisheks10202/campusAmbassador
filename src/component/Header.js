import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Header.css"
import a from "../images/a.jpg"
const Header = () => {
  return (
    <div class="row">
      <div class="column">
        <img

          width="150"
          height="120"
          src={a}
          className="d-inline-block logo"
          alt=""
        />
      </div>
      <div class="column column1">
      <a href="HOME">HOME</a>
      <a href="QUESTIONSARRE">QUESTIONSARRE</a>
      <a href="PROFILE">PROFILE</a>
      <a href="LOGIN">LOGIN</a>
      </div>
    </div>
  )
}

export default Header
