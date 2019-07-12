import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import styled from 'styled-components';

const InfoHeader = styled.div`
  text-align: center;
`;

const Author = styled.div`
  margin-bottom: 72px;
`;

const Image = styled.img`
  height: 120px;
  width: auto;
`;

const AuthorInfo = ({ data: { loading, error, authors } }) => {
  if (error) return <h1>Error loading author.</h1>;
  if (!loading) {
    return (
      <>
        {authors.map(author => (
          <Author key={author.id}>
            <InfoHeader>
              <Image
                alt={author.name}
                src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${author.avatar.handle}`}
              />
              <h1>Hello! My name is {author.name}</h1>
            </InfoHeader>
            <p>{author.bibliography}</p>
          </Author>
        ))}
      </>
    );
  }
  return <h2>Loading author...</h2>;
};

export const allAuthors = gql`
  query allAuthors {
    authors {
      id
      name
      bibliography
      avatar {
        handle
      }
    }
  }
`;

export default graphql(allAuthors)(AuthorInfo);
