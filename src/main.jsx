import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import './index.css'
import App from './App'

const BASE_URL = 'http://localhost:4000'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: BASE_URL,
  }),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
