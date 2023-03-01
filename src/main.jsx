import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import App from './App'
import './index.css'
import { AuthContextProvider } from './contexts/AuthContext';
import firebaseConfig from './configs/firebase.config.js'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
