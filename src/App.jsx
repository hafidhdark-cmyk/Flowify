import Login from './pages/Login'
import Home from './pages/Home'
import './styles/main.css'
import { createBrowserRouter } from 'react-router'  
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

export const router = createBrowserRouter([
  {
    path: '/',
    element : <Login/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword/>
  },
  {
    path: '/reset-password',
    element: <ResetPassword/>
  }
])
