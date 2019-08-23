import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavLinks = styled.ul`
  text-align: center;
  list-style-type: none;
  padding: 0;

  li {
    font: normal 20px Fjalla One, sans-serif;
    color: #ffe;
    text-transform: uppercase;
    line-height: 24px;
    color: #ffe;
    text-shadow: 0px 2px 0px #d88;

    a {
      color: #ffe;
      text-shadow: 0px 2px 0px #d88;
      text-decoration: none;
    }

    &:before {
      content: "";
    }
`;

export default (props) => (
  <NavLinks>
    {props.navLinks.map((link) => (
      <li key={link.name}><Link to={link.slug}>{link.name}</Link></li>
    ))}
  </NavLinks>
);
