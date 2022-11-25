import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home'
import Explore from './pages/Explore'
import Business from './pages/Business'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <main className="App">
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/business" element={<Business />} />
          </Routes>
        </ScrollToTop>
      </main>
    </Router>
  )
}

export default App
