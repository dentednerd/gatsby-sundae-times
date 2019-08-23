import React from "react";
import styled from "styled-components";
import Header from '../header';
import "./global.css";

const Layout = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1em;
`;

export default (props) => (
  <Layout>
    <Header data={props.data} />
    {props.children}
  </Layout>
);
