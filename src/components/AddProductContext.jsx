import { createContext, useContext } from 'react'

export const AddProductContext = createContext({
  openAddProduct: () => {},
})

export function useAddProduct() {
  return useContext(AddProductContext)
}
