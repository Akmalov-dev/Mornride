import React from 'react'
import '../Header/header.css'

import profile from '../Header/header images/profile.png'
import korzinka from '../Header/header images/korzinka.png'

const header = () => {
  return (
    <>
     <div className='header'>
      <div className='header-left'>
        <p>MORNRIDE</p>
      </div>
      <div className='header-middle'>
        <a href="">Categories</a>
        <a href="">Deals</a>
        <a href="">What's New</a>
        <a href="">Delivery</a> 
      </div>
      <div className='header-right'>
        <input type="text" placeholder='Search Product..'/>
        <img className='img-korzinka' src={korzinka} alt="" />
        <img className='img-profile' src={profile} alt="" />
      </div>
     </div>
    </>
  )
}

export default header