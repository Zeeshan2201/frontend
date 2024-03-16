import React, { useContext, useState } from 'react'
import './Navbar.css'
import webo from '../Assets/webo1.png'
import off from '../Assets/off.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBagShopping, faBars, faHeart, faRepeat, faSearch} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
  return (
    <>

<div className='top'>
   <p className='phar'><b>Summer Sale!! Flat 10% Off on Prepaid Orders, Apply Coupon SUMMER10 in your Cart to get Instant 10% Discount. Last Few Days!</b></p>    
</div>
    <div className="head-nav">
        <div className="nav-img">
        <img src={webo} alt="" />
        </div>
        <div className="search-menu">
            <select className='all'>
            <option>All Categories </option>
            <option>DIY Robots & Parts </option>
            <option>DIY Learning Kits  </option>
            <option>Hardware Projects </option>
            <option>Software Projects </option>
            <option>Electronic Components </option>
            <option>Drone and Pents </option>
            <option>Home and Outdoor </option>
            <option>PCB and 3D model </option>
            </select>
            <input type="text" placeholder='Search for items...'/>
            <div className="search-button">
                <button><FontAwesomeIcon icon={faSearch} className='fasearch' /></button>
            </div>
        </div>
        <div className="discount">
            <img src={off} alt="" />
        </div>
    </div>
   <div className='nav-main'>
    <div className="select">

    <FontAwesomeIcon icon={faBars} className='bar' />
    <select className='select-cart'> 
            <option>Select Category</option>
            <option>DIY Robots & Parts </option>
            <option>DIY Learning Kits  </option>
            <option>Hardware Projects </option>
            <option>Software Projects </option>
            <option>Electronic Components </option>
            <option>Drone and Pents </option>
            <option>Home and Outdoor </option>
            <option>PCB and 3D model </option>
            </select>
    </div>

    <div className="nav-option">
        <p><ul><li>HOME</li></ul></p>
        <select><option>OFFER</option>
        <option>FLASH DEAL</option></select>
        <p><ul><li>DISCOUNT</li></ul></p>
        <p><ul><li>BECOME A VENDOR</li></ul></p>
    </div>

    <div className="nav-button">
        <button>LOGIN/REGISTER</button>
        <div className="line"></div>
        <FontAwesomeIcon icon={faRepeat} className='dis' />
        <div className="line"></div>
        <FontAwesomeIcon icon={faHeart}className='dis' />
        <div className="line"></div>
        <FontAwesomeIcon icon={faBagShopping}className='dis' />

    </div>

   </div>
    
    </>
    
  )
}
export default Navbar;
