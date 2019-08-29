import React from "react";
import styled from "styled-components";
import CardImage from "../../molecules/card-image";
import CardHeader from "../../molecules/card-header";
import CardContent from "../../molecules/card-content";

const Card = styled.article`
  background: #acc;
  margin: 3rem auto;
  padding: 2rem 0;
  height: auto !important;
`;

export default (props) => {
  return (
    <Card>
      <CardImage image={props.article.frontmatter.featuredImage.childImageSharp.sizes.src} alt={props.article.frontmatter.title} />
      <CardHeader title={props.article.frontmatter.title} slug={props.article.fields.slug} />
      <CardContent excerpt={props.article.excerpt} />
    </Card>
  );
};
