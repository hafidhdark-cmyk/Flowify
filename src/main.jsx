import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './App.jsx'
import AddProductProvider from './components/AddProductProvider.jsx'
import './styles/Constant.css'
import './styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddProductProvider>
      <RouterProvider router={router} />
    </AddProductProvider>
  </StrictMode>,
)
