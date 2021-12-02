import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `query {
          personsCount
        }`
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))

  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>React + graphql</p>
    </div>
  )
}

export default App
