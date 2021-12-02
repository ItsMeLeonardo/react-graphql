import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { FIND_PERSON } from './persons/queries'
import Person from './Person'

export default function Persons({ persons }) {
  const [findPerson, { data, called, loading }] = useLazyQuery(FIND_PERSON)
  const [person, setPerson] = useState(called)

  const showPerson = (name) => {
    findPerson({ variables: { name } }).catch(console.error)
    setPerson(called)
  }

  if (!persons) return null
  if (loading) return <div>Loading...</div>

  if (called && person) {
    return (
      <section>
        <h1>{data.findPerson?.fullName}</h1>
        <button onClick={() => setPerson(null)}>Go to back</button>
      </section>
    )
  }

  return (
    <>
      <h2>All Persons</h2>
      <ul>
        {persons.map((person) => (
          <div key={`person-${person?.fullName}-${person?.id}`}>
            <Person {...person} />
            <button type='button' onClick={() => showPerson(person.name)}>
              See details
            </button>
          </div>
        ))}
      </ul>
    </>
  )
}
