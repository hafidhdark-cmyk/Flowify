import Login from './pages/Login'
import Home from './pages/Home'
import './styles/main.css'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    element : <Login/>
  },
  {
    path: '/home',
    element: <Home/>
  }
])
