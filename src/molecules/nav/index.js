import React from "react";
import styled from "styled-components";
import NavLinks from "../../atoms/nav-links";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: -0.5rem;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background: #faa;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: right;
  transition: border-radius 0.25s;

  &:hover {
    border-radius: 0;
    box-shadow: 0.1rem 0.1rem 0 #ffe, 0.3rem 0.3rem 0 #eed;
    transition: border-radius 0.25s;
  }
`;

export default (props) => (
  <Nav>
    <NavLinks navLinks={props.navLinks}/>
  </Nav>
);
