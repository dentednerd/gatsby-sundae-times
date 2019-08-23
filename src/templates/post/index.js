import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../../organisms/layout";
import PostImage from "../../molecules/post-image";
import PostHeader from "../../molecules/post-header";
import PostContent from "../../molecules/post-content";

const Article = styled.article`
  background: #acc;
  margin: 3rem auto;
  padding: 0 0 2rem;
  height: auto !important;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log('Post > post > title', post.frontmatter.title);
  return (
    <Layout data={data.site.siteMetadata}>
      <Article>
        {post.frontmatter.featuredImage && <PostImage image={post.frontmatter.featuredImage.childImageSharp.sizes.src} alt={post.frontmatter.title} />}
        <PostHeader title={post.frontmatter.title}  />
        <PostContent content={post.html} />
      </Article>
    </Layout>
)};

export const query = graphql`
  query($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
    }
  }
`;
