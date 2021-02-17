import './SubTotal.scss'
import { useContext } from 'react'
import { GlobalContext } from '../GlobalState'

const Total = () => {
  const { cart } = useContext(GlobalContext)
  let total = 0

  cart.forEach(item => {
    total += item.price
  })

  return (
    <section className="subtotal">
      <div className="subtotal__title">
        <h1>Subtotal</h1>
        <p>({cart.length}:items)</p>
        <h3>${Math.ceil(total)}</h3>
      </div>
      <div className="subtotal__gift">
        <input type="checkbox" />
        <p>This order contains a gift</p>
      </div>
      <div className="checkout__btn">
        <button>Procced to checkout</button>
      </div>
    </section>
  )
}

export default Total
