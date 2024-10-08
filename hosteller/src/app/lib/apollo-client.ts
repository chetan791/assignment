import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { url } from "inspector";

const client = new ApolloClient({
  link: new HttpLink({
    uri: " http://localhost:5000/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;
