import { useState } from 'react'
import AddProductPanel from './AddProductPanel'
import { AddProductContext } from './AddProductContext'

export default function AddProductProvider({ children }) {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const openAddProduct = () => setIsAddProductOpen(true)
  const closeAddProduct = () => setIsAddProductOpen(false)

  return (
    <AddProductContext.Provider value={{ openAddProduct }}>
      {children}
      <AddProductPanel isOpen={isAddProductOpen} onClose={closeAddProduct} />
    </AddProductContext.Provider>
  )
}
