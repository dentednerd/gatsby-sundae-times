import React from "React";
import { Link } from "gatsby";
import styled from "styled-components";

const CardHeader = styled.h2`
  background: #fe9;
  text-align: center;
  margin: 0px auto;
  font: bold 40px Fjalla One, sans-serif;
  letter-spacing: -2px;
  color: #faa;
  width: calc(100% - 6rem);
  padding: 40px 20px;
  text-shadow: 1px 1px 0px #fe9, 3px 3px 0px #ed8;
  box-shadow: 0px 2px 4px #9bb;
  z-index: 3;

  &:first-letter {
    font: bold 60px Satisfy, cursive;
    line-height: 40px;
    text-shadow: 1px 1px 0px #fe9, 3px 3px 0px #ed8;
  }

  a {
    text-decoration: none;
    color: #faa;
  }
`;

export default (props) => (
  <CardHeader>
    <Link to={props.slug}>{props.title}</Link>
  </CardHeader>
);
