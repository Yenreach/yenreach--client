import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import App from './App'
import './index.css'
import { AuthContextProvider } from './contexts/AuthContext';
import firebaseConfig from './configs/firebase.config.js'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      // refetchOnMount: true,
    },
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Yenreach: Find Businesses, Products and Jobs</title>
        <link rel="canonical" href="https://www.yenreach.com" />
      </Helmet>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ToastContainer position="bottom-right" autoClose={3000} />
        </QueryClientProvider>
      </AuthContextProvider>
    </HelmetProvider>
  </React.StrictMode>
)
