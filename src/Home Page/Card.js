import './Card.scss'
import { useContext } from 'react'
import { GlobalContext } from '../GlobalState'

const Card = ({ id, image, price, description, rating }) => {
  const { addItem, cart } = useContext(GlobalContext)

  const newItem = {
    id,
    image,
    price,
    description,
    rating,
  }

  let itemID = cart.find(item => item.id === id)

  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={id} />
      </div>

      <div className="card__info">
        <p>{description}</p>
        <h4>${price}</h4>
      </div>

      <div className="card__btn">
        <button
          disabled={itemID ? true : false}
          className={itemID ? "added_in--cart" : "add_to--cart"}
          onClick={() => addItem(newItem)}>{itemID ? "In Cart" : "Add to Cart"}</button>
      </div>
    </div>
  )
}

export default Card
