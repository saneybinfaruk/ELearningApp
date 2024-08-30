import {ApolloClient, InMemoryCache} from '@apollo/client';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://elearningappbackend.onrender.com/graphql',
});

export default apolloClient;
