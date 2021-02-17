import './Product.scss'
import { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalState'
import CloseIcon from '@material-ui/icons/Close'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const Product = ({ id, image, description, price }) => {
  const { deleteItem } = useContext(GlobalContext)
  const [qty, setQty] = useState(1)

  if (qty < 1) {
    deleteItem(id)
  }

  return (
    <div className="product">
      <div className="product__image">
        <img src={image} alt="" />
      </div>
      <div className="product__description">
        <p>{description}</p>
        <h4>{price}</h4>
        <div className="product__qty--container">
          <ExpandLessIcon onClick={() => setQty(q => q + 1)} />
          <p>{qty}</p>
          <ExpandMoreIcon onClick={() => setQty(q => q - 1)} />
        </div>
      </div>

      <div className="product__delete--btn"
        onClick={() => deleteItem(id)}>
        <CloseIcon />
      </div>
    </div>
  )
}

export default Product
