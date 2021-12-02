import './App.css'
import { gql, useQuery } from '@apollo/client'
import Persons from './Persons'

const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      fullName
      age
      phone
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(ALL_PERSONS)

  if (error) return <h1>Error</h1>

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <p>React + graphql</p>
      {loading ? <p>Loading...</p> : <Persons persons={data?.allPersons} />}
    </div>
  )
}

export default App
