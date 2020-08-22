import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from "vue-apollo";

const httpLink = () => new HttpLink({
  // You should use an absolute URL here
  uri: '__SIMPLE_API_ENDPOINT__'
})

// 4
export const apolloClient = new ApolloClient({
  link: httpLink(),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

export const apolloProvider  = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})