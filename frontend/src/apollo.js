import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import Vue from 'vue'
import { AUTH_TOKEN } from '@/settings'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "http://localhost:8000/graphql/",
  request: (operation) => {
    const token = localStorage.getItem(AUTH_TOKEN)
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo);
