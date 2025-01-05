import React from 'react'
import '../assets/Header.css'

export const Header = () => {
  return (
   <div className='header'>
    <span className='brand'><a href="#">Brand</a></span>
    <nav className='nav-menu'>
        <a href="#">Suits</a>
        <a href="#">Shoes</a>
        <a href="#">Accessories</a>
    </nav>
   </div>
  )
}
