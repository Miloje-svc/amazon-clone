import { useState } from 'react'
import './Slider.scss'
import { slides } from '../slides'
import Pagination from '../components/Pagination'
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded'

const Slides = () => {
  const [x, setX] = useState(0)
  const lastSlide = -Math.abs((slides.length - 1) * 100)

  const slideLeft = () => {
    if (x >= 0) {
      setX(lastSlide)
    } else {
      setX(x => x + 100)
    }
  }

  const slideRight = () => {
    if (x === lastSlide) {
      setX(0)
    } else {
      setX(x => x - 100)
    }
  }


  return (
    <section className="slides__container">
      <div>
        <div className="slides__icon left">
          <ChevronLeftRoundedIcon onClick={() => slideLeft()} />
        </div>
        {slides.map(({ url, id }) => (
          <div key={id} style={{ "transform": `translateX(${x}%)` }} className="slide">
            <img src={url} alt={url} />
          </div>
        ))}
        <div className="slides__icon right">
          <ChevronRightRoundedIcon onClick={() => slideRight()} />
        </div>
      </div>
      <Pagination x={x} setX={setX} slides={slides} />
    </section>
  )
}

export default Slides
