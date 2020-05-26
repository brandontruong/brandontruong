import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import PostList from '../components/PostList';
import Layout from '../components/Layout';

const Author = ({ data }) => {
  const { authored_wordpress__POST, name } = data.wordpressWpUsers;
  const totalCount = (authored_wordpress__POST && authored_wordpress__POST.length) || 0;
  const { title: siteTitle } = data.site.siteMetadata;
  const title = `${totalCount} post${totalCount === 1 ? '' : 's'} by ${name}`;

  // The `authored_wordpress__POST` returns a simple array instead of an array
  // of edges / nodes. We therefore need to convert the array here.
  const posts = authored_wordpress__POST.map((post) => ({
    node: post,
  }));

  return (
    <Layout>
      <Helmet title={`${name} | ${siteTitle}`} />
      <PostList posts={posts} title={title} />
    </Layout>
  );
};

Author.propTypes = {
  data: PropTypes.shape({
    wordpressWpUsers: PropTypes.shape({
      authored_wordpress__POST: PropTypes.string,
      name: PropTypes.string,
    }),

  }).isRequired,
};

export default Author;

export const pageQuery = graphql`
  query AuthorPage($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wordpressWpUsers(id: { eq: $id }) {
      name
      authored_wordpress__POST {
        ...PostListFields
      }
    }
  }
`;
