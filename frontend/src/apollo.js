import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import Vue from 'vue'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "http://localhost:8000/graphql/"
})

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo);
