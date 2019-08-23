import React from "react";
import styled from "styled-components";

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

  ul {
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
    }
  }
`;

export default () => (
  <Nav>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </Nav>
)