import React from "react";
import { graphql } from "gatsby";
import Layout from "../organisms/layout";
import Card from "../organisms/Card";

export default ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Card key={node.id} article={node} />
    ))}
    
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            featuredImage {
              relativePath
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
