import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';
import Layout from '../components/Layout';

const IndexPage = (props) => {
  const { data, pageContext } = props;
  const { edges: posts } = data.allWordpressPost;

  return (
    <Layout>
      <PostList posts={posts} title="Latest posts" />
      <Pagination pageContext={pageContext} pathPrefix="/" />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`;

export default IndexPage;
