import { useState, useContext } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'

import { GlobalContext } from '../GlobalState'

const Header = () => {
  const [value, setValue] = useState('')
  const [x, setX] = useState(100)
  const { cart } = useContext(GlobalContext)

  return (
    <header className="header">
      <div className="header__left">
        <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>
          <h1 style={{ color: "white" }}>Amazon</h1>
        </Link>
        <div className="header__location">
          <LocationOnOutlinedIcon />
          <h4>Deliver to <p>Serbia</p></h4>
        </div>
      </div>

      <div className="header__middle">
        <div className="left__btn--container">
          <p>All</p>
          <ExpandMoreRoundedIcon />
        </div>
        <input
          placeholder="Search"
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text" />
        <div className="right__btn--container">
          <SearchIcon />
        </div>
      </div>

      <div className="header__right">
        <div className="header__language">
          <img src="https://images-na.ssl-images-amazon.com/images/I/41NC%2BegkOBL._AC_SX355_.jpg" alt="" />
          <ExpandMoreRoundedIcon />
        </div>

        <div className="header__option">
          <p>Hello, <span>Miloje</span></p>
          <h4>Account & Lists <ExpandMoreRoundedIcon /></h4>
        </div>

        <div className="header__option">
          <p>Returns</p>
          <h4>& Orders</h4>
        </div>

        <Link to='/cart' style={{ color: 'white', textDecoration: 'none' }}>
          <div className="header__cart">
            <div>
              <ShoppingCartOutlinedIcon />
              <span>{cart.length}</span>
            </div>
            <p>Cart</p>
          </div>
        </Link>
      </div>

      <div onClick={() => {
        setX(x === 100 ? 0 : 100)
      }
      } className="header__hamburger">
        <MenuRoundedIcon />
      </div>

      {x === 0 ? (
        <div onClick={() => setX(100)} className="header__menu--overlay"></div>
      ) : null}

      <div style={{ 'transform': `translateX(${x}%)` }} className="header__menu">
        <div className="header__menu--option">
          <h3>Cart</h3>
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </header>
  )
}

export default Header
