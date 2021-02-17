const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'ADD__ITEM':
      return {
        ...state,
        cart: [action.item, ...state.cart]
      }
    case 'DELETE__ITEM':
      return {
        ...state,
        cart: state.cart.filter(cart => cart.id !== action.item)
      }
    default:
      return state
  }
}

export default GlobalReducer