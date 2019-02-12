import React from 'react';
import { graphql } from 'gatsby';
import AboutLayout from '../components/aboutLayout';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <AboutLayout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </AboutLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
