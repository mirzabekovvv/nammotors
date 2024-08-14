import React from 'react'
import './navbar.css'
import navbarLogo from '../../assets/Аннотация 2024-07-29 225938.png'
import { CiMenuFries, CiSearch, CiUser, CiHeart, CiShoppingBasket } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <div className="container">
        <div className="navbar">
          <div className='navbar-logo-collection-wrapper'>
            <Link to={"/"} className='navbar-logo-link' href="">
              <img className='navbar-logo-img' src={navbarLogo} alt="" />
            </Link>
            <button className='navbar-menu-btn' >
              <CiMenuFries />
              <span>Katalog</span>
            </button>
          </div>
          <div className='navbar-search'>
            <input type="text" placeholder='search' />
            <button><CiSearch /></button>
          </div>
          <div className='navbar-collection'>
            <Link to={"/"} className='navbar-collection-item navbar-collection-home'>
              <IoHomeOutline />
              <span>Kirish</span>
            </Link>
            {/* <Link to={"form"} className='navbar-collection-item'>
              <CiUser />
              <span>Kirish</span>
            </Link> */}
            <Link to={'like'} className='navbar-collection-item'>
              <CiHeart />
              <span>Saralanagan</span>
            </Link>
            <Link to={'card'} className='navbar-collection-item'>
              <CiShoppingBasket />
              <span>Savat</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar