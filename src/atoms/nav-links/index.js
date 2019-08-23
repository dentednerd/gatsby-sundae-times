import React from "react";
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
    }

    &:before {
      content: "";
    }
`;

export default () => (
  <NavLinks>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </NavLinks>
);
