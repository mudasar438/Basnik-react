import React from 'react'
import './Footer.css';
import img from '../../Images/img';


const Footer = () => {
  return (
    <>
    <div className="footer1">
        <div className="footer2">
            <div className="footerItem">
                <h3>Product</h3>
                <p>listing</p>
                <p>property</p>
                <p>Agent</p>
                <p>Belog</p>
            </div>
            <div className="footerItem">
                <h3>Resources</h3>
                <p>our Homes</p>
                <p>Member stories</p>
                <p>vedio</p>
                <p>Free trail</p>
            </div>
            <div className="footerItem">
                <h3>Company</h3>
                <p>Partnership</p>
                <p>Terms of use</p>
                <p>Privicy</p>
                <p>siteMap</p>
            </div>
            <div className="footerItem">
                <h3>Get in Touch</h3>
                <p>You shell Find you Next Home</p>
                <p>on style you prfer</p>
                <div className="footerImg">
                    <img src={img.Facebook} alt="" />
                    <img src={img.twitter} alt="" />
                    <img src={img.lindedin} alt="" />
                </div>
                
            </div>
        </div>
        <div className="footer3">
            <img src={img.Logo} alt="" />
            <p>Copyright 2022.com, All rights reserved.</p>
        </div>
    </div>
    </>
  )
}

export default Footer