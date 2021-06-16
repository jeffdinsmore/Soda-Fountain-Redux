import React from "react";
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const SodaHeader = styled.section`
  // font-size: 62px;
  // background-color: lightGray;
  // text-align: center;
  // margin-top: 20px;
  // padding: 36px 0px 16px 0px;
  // border-radius: 20px;

`;

function Header(){
  return (
    <React.Fragment>
      {/* <SodaHeader> */}
      <Navbar className="nav-bar">
      <Navbar.Brand href="/" to="/" className="nav-barBrand" style={{color:"white"}}>Jeff's Soda Fountain</Navbar.Brand>
      </Navbar>
      {/* </SodaHeader> */}
      <br />
    </React.Fragment>
  );
}

export default Header;