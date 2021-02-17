import './Pagination.scss'

const Pagination = ({ slides, x, setX }) => {
  return (
    <section className="pagination__container">
      {slides.map((slide, index) => (
        <div key={slide.url}
          onClick={() => setX(-Math.abs(index * 100))}
          className={Math.abs(x / 100) === index ? 'pagination' : 'pagination__active'}></div>
      ))}
    </section>
  )
}

export default Pagination
