import React from "React";
import styled from "styled-components";

const CardImage = styled.img`
  width: 100%;
  margin: 0px auto;
  padding: 0;
`;

export default (props) => (
  <CardImage src={props.image} alt={props.alt} />
);
