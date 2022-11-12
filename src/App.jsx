import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-gray-500">
      <h1 className='text-center'>Yenreach Business Listing { count }</h1>
      <button className='btn btn-primary text-left' onClick={() => setCount((count) => count + 1)}>
        count+
      </button>
    </div>
  )
}

export default App
