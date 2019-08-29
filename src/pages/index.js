import React from "react";
import { graphql } from "gatsby";
import Layout from "../organisms/layout";
import Card from "../organisms/Card";

export default ({ data }) => (
  <Layout data={data.site.siteMetadata}>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Card key={node.id} article={node} />
    ))}
    
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        navLinks {
          name
          slug
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 1024) {
                  src
                }
              }
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
