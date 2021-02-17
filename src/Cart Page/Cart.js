import './Cart.scss'
import Products from './Products'
import SubTotal from './SubTotal'
import Recommended from '../components/Recommended'

const Cart = () => {
  return (
    <main className="cart">
      <section className="cart__content">
        <Products />
        <SubTotal />
      </section>
      <Recommended />
    </main>
  )
}

export default Cart
