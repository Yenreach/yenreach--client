import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './components/Hero'
import Category from './components/Category'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero />
      <Category />
      <h1 className='text-center'>Yenreach Business Listing { count }</h1>
      <button className='text-left btn btn-primary' onClick={() => setCount((count) => count + 1)}>
        count+
      </button>
    </div>
  )
}

export default App
