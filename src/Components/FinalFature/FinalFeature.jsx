import React from 'react'
import img from '../../Images/img';
// import './FinalFeature.css';
import './fFeature.css';



const FinalFeature = () => {
  return (
    <>
    <div className="final1">
        <div className="final2">
            <div className="finalImg">
                <img src={img.card} alt=""  id='cardimg'/>
                <img src={img.tower} alt=""  id='cardimgbk'/>
            </div>
            <div className="finalText">
                <h1>You’ve found a neighborhood you love.</h1>
                <p>When you own a home, you’re committing to living in one location for a while. In a recent Trulia survey, we found that five out of six respondents said finding the right neighborhood </p>

            </div>
        </div>
        <div className="contDown">
            <div className="item1">
                <h1>$ 25,00</h1>
                <p>Home for Sale</p>
            </div>
            <div className="item1">
                <h1>$ 5,000 +</h1>
                <p>Home for Sell</p>
            </div>
            <div className="item1">
                <h1>$ 17000</h1>
                <p>Price increses</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default FinalFeature