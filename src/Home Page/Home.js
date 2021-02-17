import './Home.scss'
import Slider from './Slider'
import Card from './Card'
import products from '../products'
import Recommended from '../components/Recommended'

const Home = () => {

  return (
    <main className="home">
      <Slider />
      <section className="cards__container">
        {products.map(product => (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            description={product.description}
            price={product.price}
            rating={product.rating} />
        ))}
      </section>
      <Recommended />
    </main>
  )
}

export default Home
