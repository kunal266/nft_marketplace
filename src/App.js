import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')
import Home from "./Components/Home.js";
import Mintnft from "./Components/Mintnft.mjs";
import Mynft from "./Components/mynft.js";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import mynft from './Components/mynft';
export default function App() {


  return (
    <div style={{minHeight:"100vh"}}>
    <Router>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">NFT marketplace</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"></Nav>
          <Nav>
            <Nav.Link href="/mintnft">Mint NFT</Nav.Link>
            <Nav.Link href="/mynft">My NFT</Nav.Link>
          <Nav.Link >{window.accountId === "" ? "User" : window.accountId}</Nav.Link>
            <Nav.Link onClick={window.accountId === '' ? login : logout}>{window.accountId === "" ? "login" :"logout"}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/mintnft' element={< Mintnft />}></Route>
    <Route exact path='/mynft' element={< Mynft />}></Route></Routes>
  </Router></div>
  )
}
