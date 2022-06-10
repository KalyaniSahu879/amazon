import React from 'react';
import './navbar.css';
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { Link, NavLink } from 'react-router-dom';
import Signin from '../signup/Signin';



const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
          <NavLink to="/">
            <img src="./amazon_PNG25.png" alt="" />
          </NavLink>
          </div>
          <div className="nav_searchbar">
            <input type="text" name='' id='' />
            <div className="search_icon">
              <SearchIcon/>
            </div>
          </div>
        </div>
        <div className="right">
            <div className="nav_btn">
                <NavLink to="/login">Signin</NavLink>
            </div>
            <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon id="icon" />
            </Badge>
            <p>Cart</p>
            </div>
            <Avatar className='avatar' alt="Kalyani Sahu"/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar