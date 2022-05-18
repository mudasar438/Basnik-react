import React from 'react'
import './ClientlogoStyle.css'
import img from "../../Images/img";

const Clientlogo = () => {
  return (
    <>
    <div className="clientmain">
        <div className="client2">
          <div className="child1">
            <img src={img.Logo} alt="" />
            <p>More Then 45,000 Company trust Besnik.</p>
          </div>
          <div className="child2">
            <img src={img.review} alt="" />
          </div>

        </div>
        <div className="allLogo">
          <img src={img.logos} alt="" />
        </div>
    </div>
    
    
    </>
  )
}

export default Clientlogo