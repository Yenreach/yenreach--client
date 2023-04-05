import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import { useAuthContext } from './hooks/useAuthContext'
import './App.css'
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home'
import Explore from './pages/Explore'
import Business from './pages/Business'
import Products from './pages/Product'
import About from './pages/About'
import Blogs from './pages/Blog'
import Blog from './pages/Blog/Blog'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PasswordRecovery from './pages/PasswordRecovery';
import ChangePassword from './pages/PasswordRecovery/ChangePassword';
import Contact from './pages/Contact'
import NotFound from './pages/404'
import Dashboard from './components/layout/Dashboard'
import BusinessDash from './pages/users/Home'
import CreateBusiness from './pages/users/CreateBusiness'
import EditBusiness from './pages/users/EditBusiness'
import UserProducts from './pages/users/Products'
import UserBusiness from './pages/users/Business'
import AddProduct from './pages/users/Products/AddProduct'
import ProductSuccess from './pages/users/Products/Success'
import JobSuccess from './pages/users/Jobs/Success'
import Profile from './pages/users/Profile'
import Edit from './pages/users/Profile/Edit'
import Subscription from './pages/users/Subscription'
import VerifyPayment from './pages/users/VerifyPayment'
import Billboard from './pages/users/Billboard'
import AddBillboard from './pages/users/Billboard/AddBillboard'
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
            <Route exact path="/products/:id" element={<Products />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/blogs/:id" element={<Blog />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/password-recovery" element={<PasswordRecovery />} />
            <Route exact path="/password_reset" element={<ChangePassword />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/users/business/:id" element={<UserBusiness />} />
            <Route exact path="/users/edit-business/:id" element={<EditBusiness />} />
            <Route exact path="/users/add-business" element={<CreateBusiness />} />
            <Route exact path="/users/products/:id" element={<UserProducts />} />
            <Route exact path="/users/products/:id/add-product" element={<AddProduct />} />
            <Route exact path="/users/products/:id/product-success" element={<ProductSuccess />} />
            <Route exact path="/users/profile" element={<Profile />} />
            <Route exact path="/users/profile/edit" element={<Edit />} />
            <Route exact path="/users/subscription/:id" element={<Subscription />} />
            <Route exact path="/users/verify_payment" element={<VerifyPayment />} />
            <Route exact path="/users/billboard" element={<Billboard />} />
            <Route exact path="/users/billboard/:billboard_id" element={<AddBillboard />} />
            <Route exact path="/users/jobs/:id" element={<Jobs />} />
            <Route exact path="/users/jobs/:id/applicants/:job_id" element={<Applicants />} />
            <Route exact path="/users/jobs/:id/add-job" element={<AddJob />} />
            <Route exact path="/users/jobs/:id/job-success" element={<JobSuccess />} />
            <Route exact path="/users/" element={<BusinessDash />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </main>
    </Router>
  )
}

export default App
