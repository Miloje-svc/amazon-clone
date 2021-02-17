import './Recommended.scss'
import { useState } from 'react'
import recommended from '../recommended'
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded'


const Recommended = () => {
  const [x, setX] = useState(0)

  const slideLeft = () => {
    setX(x => x - 100)
  }

  const slideRight = () => {
    setX(x => x + 100)
  }

  return (
    <section className="recommended">
      <h1>Best Sellers</h1>
      <div className="recommended__content">
        <div onClick={() => slideLeft()} className="arrow arrow__left">
          <ChevronLeftRoundedIcon />
        </div>
        <div style={{ 'transform': `translateX(${x}%)` }} className="recommended__products">
          {recommended.map(item => (
            <div className="recommended__product" key={item.id}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
        <div onClick={() => slideRight()} className="arrow arrow__right">
          <ChevronRightRoundedIcon />
        </div>
      </div>
    </section>
  )
}

export default Recommended
