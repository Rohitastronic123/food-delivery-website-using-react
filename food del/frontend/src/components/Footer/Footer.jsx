import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <div className="image-logo">
                <img src={assets.logo} alt="" />
                </div>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente deserunt sit corrupti dolore vero, vitae debitis ab nisi non itaque dolores fuga? Illo itaque molestiae dicta ipsam consequatur perspiciatis.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 6367844774</li>
                <li>contact@gmail.com</li>
            </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 &copy; Tomato.com -All Right Reserved</p>
    </div>
  )
}

export default Footer