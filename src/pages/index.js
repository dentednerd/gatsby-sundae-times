import React from "react";
import styled from "styled-components";
import Header from '../organisms/header';
import './global.css';

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1em;
`;

export default () => (
  <Container>
    <Header />
  </Container>
);
