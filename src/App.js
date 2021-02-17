import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Home Page/Home'
import Cart from './Cart Page/Cart'


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
