import { gql } from '@apollo/client'

export const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      fullName
      age
      phone
      id
    }
  }
`

export const FIND_PERSON = gql`
  query findPersonByName($name: String!) {
    findPerson(name: $name) {
      fullName
      name
      age
      phone
      id
    }
  }
`
