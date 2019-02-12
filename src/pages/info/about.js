import React from 'react';
import { Link, graphql } from 'gatsby';
import styles from './about.module.css';
import myImage from '../../images/photo.jpg';
import Layout from '../../components/aboutLayout';

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

const AboutPage = ({ data }) => (
  <Layout>
    <div>
      <h1>About Page</h1>
      <User
        username={data.site.siteMetadata.author}
        avatar={myImage}
        excerpt="Full-stack web and mobile dev. Just kidding :)"
      />
      <br />
      <Link to="/">Go back to the homepage</Link>>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default AboutPage;
