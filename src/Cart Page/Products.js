import './Products.scss'
import Product from './Product'
import { useContext } from 'react'
import { GlobalContext } from '../GlobalState'

const Products = () => {
  const { cart, deleteItem } = useContext(GlobalContext)

  const clearCart = () => {
    cart.forEach(item => deleteItem(item.id))
  }

  return (
    <section className="products">
      <div className="products__title">
        <h1>Shopping Cart</h1>
        {cart.length !== 0 ?
          <p onClick={() => clearCart()}>Clear Cart</p> : null}
      </div>
      {
        cart.map((item => {
          return <Product
            key={item.id}
            id={item.id}
            image={item.image}
            description={item.description}
            price={item.price}
            rating={item.rating} />
        }))
      }
      {cart.length === 0 && (<h1 className="empty" >Cart is empty</h1>)}
    </section >
  )
}

export default Products
