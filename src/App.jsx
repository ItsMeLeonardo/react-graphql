import { useState } from 'react'
import NotifyError from './NotifyError'
import EditPhone from './EditPhone'

import './App.css'
import usePersons from './persons/usePersons'
import Persons from './Persons'
import PersonForm from './PersonForm'

function App() {
  const { data, loading, error } = usePersons()
  const [errorMessage, setErrorMessage] = useState(null)

  const notifyError = (message) => {
    setErrorMessage(message)
    setTimeout(() => setErrorMessage(null), 5000)
  }

  if (error) return <h1>Error</h1>

  return (
    <div className='App'>
      <h1>Person machine</h1>
      <PersonForm notifyError={notifyError} />
      <NotifyError message={errorMessage} />
      <EditPhone />
      {loading ? <p>Loading...</p> : <Persons persons={data?.allPersons} />}
    </div>
  )
}

export default App
