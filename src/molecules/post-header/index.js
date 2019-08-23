import React from "React";
import styled from "styled-components";

const PostHeader = styled.h2`
  background: #fe9;
  text-align: center;
  margin: 1rem auto 0;
  font: bold 40px Fjalla One, sans-serif;
  letter-spacing: -2px;
  color: #faa;
  width: calc(100% - 6rem);
  padding: 40px 20px;
  text-shadow: 1px 1px 0px #fe9, 3px 3px 0px #ed8;
  box-shadow: 0px 2px 4px #9bb;

  &:first-letter {
    font: bold 60px Satisfy, cursive;
    line-height: 40px;
    text-shadow: 1px 1px 0px #fe9, 3px 3px 0px #ed8;
  }
`;

export default (props) => {
  return  (
    <PostHeader>
      {props.title}
    </PostHeader>
  );
};
