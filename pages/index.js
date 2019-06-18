import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../apolo/withData';
const query = gql`
  {
    getObject(bucket_slug: "d69b1fe0-915c-11e9-8dbb-f9d328e67738", input: {
      slug: "home",
      read_key: ""
    }) {
      title
      content
      metadata
    }
  }
`;

const index = ({ data }) => (<div>Welcome to Next.js!</div>);

const GraphqlIndex = graphql(query)(index);

export default index;