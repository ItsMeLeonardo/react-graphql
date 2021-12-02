import { gql, useMutation } from '@apollo/client'
import { CREATE_PERSON } from './persons/mutations'
import { ALL_PERSONS } from './persons/queries'

export default function PersonForm({ notifyError }) {
  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      notifyError(error.graphQLErrors[0].message)
    },
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = data.get('name')
    const lastName = data.get('lastName')
    const age = Number(data.get('age'))
    const city = data.get('city')
    const street = data.get('street')
    const phone = data.get('phone')

    createPerson({
      variables: {
        name,
        lastName,
        age,
        city,
        street,
        phone,
      },
    }).catch(console.error)
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label htmlFor='name'>
        Name:
        <input type='text' name='name' id='name' required />
      </label>

      <label htmlFor='lastName'>
        Last Name:
        <input type='text' name='lastName' id='lastName' required />
      </label>

      <label htmlFor='age'>
        Age:
        <input type='number' name='age' id='age' required />
      </label>

      <label htmlFor='city'>
        City:
        <input type='text' name='city' id='city' required />
      </label>

      <label htmlFor='street'>
        Street:
        <input type='text' name='street' id='street' required />
      </label>

      <label htmlFor='phone'>
        Phone:
        <input type='tel' name='phone' id='phone' required />
      </label>

      <button>Create Person</button>
    </form>
  )
}
