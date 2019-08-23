import React from "React";
import styled from "styled-components";

const PostImage = styled.img`
  width: 100%;
  margin: 0px auto;
  padding: 0;
`;

export default (props) => (
  <PostImage src={props.image} alt={props.alt} />
);
