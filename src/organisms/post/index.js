import React from "react";
import styled from "styled-components";
import PostHeader from "../../molecules/post-header";
import PostContent from "../../molecules/post-content";

const Post = styled.article`
  background: #acc;
  margin: 3rem auto;
  padding: 2rem 0;
  height: auto !important;
`;

export default () => (
  <Post>
    <PostHeader />
    <PostContent />
  </Post>
);
