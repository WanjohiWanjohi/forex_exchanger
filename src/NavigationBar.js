import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }`
  ;export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">ExchangeIt!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/exchange ">Exchange</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/historical_exchanges ">Historical Exchanges</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)