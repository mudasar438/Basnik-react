import React from 'react'
import './Work.css'
import img from '../../Images/img'

const Work = () => {
  return (
  <div className="WorkContainer">
      <div className="WorkContainer2">
          <div className="work1">
          <img src={img.Rectangle} alt="" />
          <h3>How It Works?</h3>
          <p>Everything you need to know when you're looking to buy, rent, or sell - all in one place.</p>
          </div>
          <div className="work2">
              <div className="item1">
              <img src={img.buy} alt="" />
              <h5>Buyer Guides</h5>
              <a href="">How to buy &#8594;</a>
              </div>
              <div className="item1">
              <img src={img.rent} alt="" />
              <h5>Renter Guides</h5>
              <a href="">How to Rent &#8594;</a>
              </div>
              <div className="item1">
              <img src={img.sell} alt="" />
              <h5>Seller Guides</h5>
              <a href="">How to sell &#8594;</a>
              </div>

          </div>
          <div className="work3">

          <button>Sell Full Guidelines</button>
          </div>
      </div>
  </div>
  )
}

export default Work