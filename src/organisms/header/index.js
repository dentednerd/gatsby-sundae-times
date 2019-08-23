import React from "react";
import styled from "styled-components";
import Nav from "../../molecules/nav";

const Header = styled.header`
  position: relative;
  margin: 0;
  padding: 0;

  h1, h1 a {
    border-bottom: double 3px #edd;
    width: 100%;
    height: 90px;
    overflow: hidden;
    margin: 0;
    padding: 0 0.25rem;
    font: normal 4rem Satisfy, cursive;
    line-height: 100px;
    color: #acc;
    text-shadow: 1px 1px 0px #ffe, 3px 3px 0px #eed;
  }

  p {
    text-align: left;
    margin: 0.5rem 0;
    padding: 0;
    color: #faa;
    height: 80px;
    text-shadow: 1px 1px 0px #eed;
  }
`;

export default () => (
  <Header>
    <h1>Sundae Times</h1>
    <p>taglines for days mates</p>
    <Nav />
  </Header>
);
