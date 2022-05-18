import React from 'react'
import './Feature.css';
import img from '../../Images/img'
const Feature = () => {
  return (
    <>
    <div className="feature1">
        <div className="feature2">
            <h1>Featured Properties</h1>
            <div className="featurechild1">
                <p>Everything you need to know when you're looking</p>
                <a href="">View All Properties &#8594;</a>
            </div>
            <div className="featurechild2">
            <div className="item1">
              <img src={img.buil1} alt="" />
              <h5>$35,000</h5>
              <p>8502 Preston Rd. Inglewood, Maine 98280</p>
              <div className="info">
                  <img src={img.icon1} alt="" /> 
                  <h6>5 Beds</h6>
                  <img src={img.icon4} alt="" />
                  <h6>2 Both</h6>
                  <img src={img.icon3} alt="" />
                  <h6>2000 Sqr</h6>
              </div>
             
              </div>
              <div className="item1">
              <img src={img.buil2} alt="" />
              <h5>$78,000</h5>
              <p>8502 Preston Rd. Inglewood, Maine 98280</p>
              <div className="info">
                  <img src={img.icon1} alt="" /> 
                  <h6>5 Beds</h6>
                  <img src={img.icon4} alt="" />
                  <h6>2 Both</h6>
                  <img src={img.icon3} alt="" />
                  <h6>2000 Sqr</h6>
              </div>
             
              </div>
              <div className="item1">
              <img src={img.buil3} alt="" />
              <h5>$45,000</h5>
              <p>8502 Preston Rd. Inglewood, Maine 98280</p>
              <div className="info">
                  <img src={img.icon1} alt="" /> 
                  <h6>5 Beds</h6>
                  <img src={img.icon4} alt="" />
                  <h6>2 Both</h6>
                  <img src={img.icon3} alt="" />
                  <h6>2000 Sqr</h6>
              </div>
              
              </div>
            </div>
            

        </div>
    </div>
    </>
  )
}

export default Feature 