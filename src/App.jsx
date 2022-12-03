import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home'
import Explore from './pages/Explore'
import Business from './pages/Business'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/404'
import Dashboard from './pages/users/Dashboard'



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
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="*" element={<NotFound />} />
            <Route exact path="/users" element={<Dashboard />} />
          </Routes>
        </ScrollToTop>
      </main>
    </Router>
  )
}

export default App
