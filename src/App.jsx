import { createBrowserRouter } from 'react-router'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Stores from './pages/Stores'
import Finances from './pages/Finances'
import Settings from './pages/Settings'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
  {
    path: '/stores',
    element: <Stores />,
  },
  {
    path: '/finances',
    element: <Finances />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
])