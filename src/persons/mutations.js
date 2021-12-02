import { gql } from '@apollo/client'

export const CREATE_PERSON = gql`
  mutation addPerson(
    $name: String!
    $lastName: String!
    $age: Int!
    $city: String!
    $street: String!
    $phone: String
  ) {
    createPerson(
      name: $name
      lastName: $lastName
      age: $age
      city: $city
      street: $street
      phone: $phone
    ) {
      fullName
      address {
        city
        street
      }
      isAdult
    }
  }
`

export const EDIT_PHONE = gql`
  mutation editPhone($name: String!, $phone: String!) {
    editPhoneNumber(name: $name, phone: $phone) {
      fullName
      name
      age
      phone
      id
    }
  }
`
