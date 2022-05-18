import React from 'react'
import './Newselter.css'
import img from '../../Images/img'

const Newselter = () => {
  return (
      <>
      <div className="newselter1">
          <div className="newselter2">
              <div className="newselterChild1">
                  <h4>Featured Properties</h4>
                  <p>Everything you need to know when you're looking</p>
                  <button>Get Started Now</button>

              </div>
              <div className="newselterchild2">
                  <img src={img.home3} alt="" />

              </div>

          </div>
      </div>
      </>
    
  )
}

export default Newselter