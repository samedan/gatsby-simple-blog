import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import AboutLayout from '../../components/aboutLayout';

const Headline = styled.h1`
  display: inline-block;
  color: cornfowerblue;
`;

export default ({ data }) => (
  <AboutLayout>
    <div>
      <Headline>My Blog Posts</Headline>
      <h4>{data.allMarkdownRemark.totalCount} posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <hr />
          <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
            <h3>{node.frontmatter.title}</h3>
            <p>
              <i>{node.frontmatter.date}</i>
            </p>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  </AboutLayout>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
