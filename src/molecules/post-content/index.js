import React from "react";
import styled from "styled-components";

const PostContent = styled.section`
  width: calc(100% - 18rem);
  margin: 0 auto;
  padding: 2rem;
  background: #ffc;
  box-shadow: 0px 2px 4px #9bb;
`;

export default (props) => (
  <PostContent dangerouslySetInnerHTML={{ __html: props.content }} />
);
