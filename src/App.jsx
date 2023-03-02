import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import { useAuthContext } from './hooks/useAuthContext'
import './App.css'
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home'
import Explore from './pages/Explore'
import Business from './pages/Business'
import About from './pages/About'
import Blogs from './pages/Blog'
import Blog from './pages/Blog/Blog'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PasswordRecovery from './pages/PasswordRecovery';
import Contact from './pages/Contact'
import NotFound from './pages/404'
import Dashboard from './components/layout/Dashboard'
import BusinessDash from './pages/users/Home'
import CreateBusiness from './pages/users/CreateBusiness'
import EditBusiness from './pages/users/EditBusiness'
import Products from './pages/users/Products'
import UserBusiness from './pages/users/Business'
import AddProduct from './pages/users/Products/AddProduct'
import Success from './pages/users/Products/Success'
import Profile from './pages/users/Profile'
import Subscription from './pages/users/Subscription'
import Billboard from './pages/users/Billboard'
import Jobs from './pages/users/Jobs'
import Applicants from './pages/users/Jobs/Applicants'
import AddJob from './pages/users/Jobs/AddJob'



function App() { 
  const [count, setCount] = useState(0)
  const { user } = useAuthContext()

  return (
    <Router>
      <main className="App">
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/business/:id" element={<Business />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/password-recovery" element={<PasswordRecovery />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/users/business/:id" element={<UserBusiness />} />
            <Route exact path="/users/add-business" element={<CreateBusiness />} />
            <Route exact path="/users/edit-business" element={<CreateBusiness />} />
            <Route exact path="/users/products/:id" element={<Products />} />
            <Route exact path="/users/products/:id/add-product" element={<AddProduct />} />
            <Route exact path="/users/products/:id/product-success" element={<Success />} />
            <Route exact path="/users/profile" element={<Profile />} />
            <Route exact path="/users/subscription" element={<Subscription />} />
            <Route exact path="/users/billboard" element={<Billboard />} />
            <Route exact path="/users/jobs/:id" element={<Jobs />} />
            <Route exact path="/users/jobs/:id/Applicants" element={<Applicants />} />
            <Route exact path="/users/jobs/:id/add-job" element={<AddJob />} />
            <Route exact path="/users" element={<BusinessDash />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </main>
    </Router>
  )
}

export default App
