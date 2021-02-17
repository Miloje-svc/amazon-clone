import React, { createContext, useReducer } from 'react'
import GlobalReducer from './GlobalReducer'

const initialState = {
  cart: []
}
export const GlobalContext = createContext(initialState)

const GlobalProvider = ({ children, }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  const addItem = (cart) => {
    dispatch({
      type: "ADD__ITEM",
      item: cart
    })
  }

  const deleteItem = (id) => {
    dispatch({
      type: "DELETE__ITEM",
      item: id
    })
  }

  return (
    <GlobalContext.Provider value={{
      cart: state.cart,
      addItem,
      deleteItem
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider