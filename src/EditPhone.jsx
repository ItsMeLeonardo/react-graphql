import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { EDIT_PHONE } from './persons/mutations'

export default function EditPhone() {
  const [error, setError] = useState(false)

  const [editPhone] = useMutation(EDIT_PHONE, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
    },
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name')
    const phone = formData.get('phoneNumber')
    console.log(name, phone)
    editPhone({
      variables: {
        name,
        phone,
      },
    })
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        <input type='text' name='name' id='name' placeholder='name' />
      </label>

      <label htmlFor='phoneNumber'>
        <input
          type='tel'
          name='phoneNumber'
          id='phoneNumber'
          placeholder='phone number'
        />
      </label>

      <button>Save changes</button>
    </form>
  )
}
