import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/cl4o8a74n188101z2e3hi2oda/master",
  cache: new InMemoryCache(),
});
