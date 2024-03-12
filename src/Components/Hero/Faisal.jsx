import React from 'react'
import './Faisal.css'

const Faisal = () => {
  return (
    <div>
      <div className="card">

        <div className="heading">
            <h1>Happy Club</h1> <br />
        </div>

        <div className="description">
            <p>Collect coupons from stores and <br /> apply to get special discount form stores </p> 
        </div> <br />

        <div className="box1">
            <h2>Free Delivery</h2>
            <p>For <span> WEBOTRICKS </span></p>
            <p className='code'>Code:dhinchakpooja</p>
        </div>
        <br />

        <div className="box1">
            <h2>10% Off</h2>
            <p>For <span> ALL SHOPS </span></p>
            <p className='code'>Code:dollychaiwala</p>
        </div>
        <br />

        <div className="box1">
            <h2>10% Off</h2>
            <p>For <span>  WEBOTRICKS </span></p>
            <p className='code'>Code:inkipinkiponki</p>
        </div>
        
      </div>
    </div>
  )
}

export default Faisal;
