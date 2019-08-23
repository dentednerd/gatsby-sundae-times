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
    box-shadow: 0 0.25rem 0.25rem #aa9;
    transition: border-radius 0.25s;
  }
`;

export default () => (
  <Nav>
    <NavLinks />
  </Nav>
);
