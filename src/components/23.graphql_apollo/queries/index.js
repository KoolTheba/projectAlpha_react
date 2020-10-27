import {gql} from '@apollo/client'

export const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`