import React from 'react'
import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import Characters from './Characters'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const ApolloRicky = () => {
    return(
        <ApolloProvider client={client}>
            <Characters />
        </ApolloProvider>
    )
}

export default ApolloRicky