import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Link, NavLink } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

const Header = () => {

  

  const[{basket, user}, dispatch] = useStateValue()
  const handleAuthentication = () => {
    auth.signOut()
  }
  return (
    <div className='header'>
      <Link to="/">
      <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/></Link>
        
      <div className='header__option'>
          <span className='header__optionLineOneFirst'>
                Hello
            </span>
            <span className='header__optionLineTwoFirst'>
                <AddLocationAltIcon  fontSize="small"/>
                Select your Address                
            </span>
          </div>

        <div className='header__search'>
          <input className='header__searchInput' type="text"/>
          <SearchIcon className='header__searchIcon'/>
        </div>
        <img className='header__logo_two' src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"/>
        <div className='header__nav'>
          <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>
                Hello {user? user.email : 'Guest'}
            </span>
            <span className='header__optionLineTwo'>
                {user? 'SignOut':'SignIn' }
            </span>
          </div>
          </Link>

          <div className='header__option'>
          <span className='header__optionLineOne'>
                Returns
            </span>
            <span className='header__optionLineTwo'>
                & Orders
            </span>
          </div>

          <div className='header__option'>
          <span className='header__optionLineOne'>
                Your
            </span>
            <span className='header__optionLineTwo'>
                Prime
            </span>
          </div>
          <Link to="/checkout">
          <div className='header__optionBasket'>
            <ShoppingBasketIcon/>
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div></Link>
          
        </div>
    </div>



  )
}

export default Header