import React from "react";
import styled from "styled-components";

const CardContent = styled.section`
  width: calc(100% - 18rem);
  margin: 0px auto;
  padding: 40px;
  background: #ffc;
  box-shadow: 0px 2px 4px #9bb;
`;

export default (props) => (
  <CardContent>
    {props.excerpt}
  </CardContent>
);
