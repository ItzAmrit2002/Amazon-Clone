import React from 'react'
import './Footer.css'
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <div className='footer__box'>
                <ul>
                    <li><h4>Get to Know Us</h4></li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Release</li>
                    <li>Amazon Cares</li>
                    <li>Gift a Smile</li>
                    <li>Amazon Silence</li>
                </ul>
                <ul>
                    <li><h4>Connect With Us</h4></li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
                <ul>
                    <li><h4>Make Money With Us</h4></li>
                    <li>Sell on Amazon</li>
                    <li>Sell Under Amazon Accelerator</li>
                    <li>Amazon Global Selling</li>
                    <li>Become an Affiliate</li>
                    <li>Fulfilment by Amazon</li>
                    <li>Advertise Your Products</li>
                    <li>Amazon Pay on Merchants</li>
                </ul>
                <ul>
                    <li><h4>Let Us Help You</h4></li>
                    <li>Covid 19 and Amazon</li>
                    <li>Your Account</li>
                    <li>Returns Centre</li>
                    <li>100% Purchase Protection</li>
                    <li>Amazon App Download</li>
                    <li>Amazon Assistant Download</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className='footer__secondContainer'>
                <div className='footer__boxTwo'>
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className='footer__logo'/>
                 <span><LanguageIcon/><p> English</p></span>
                </div>
                <ul>
                    <li>Australia</li>
                    <li>Brazil</li>
                    <li>Canada</li>
                    <li>China</li>
                    <li>France</li>
                    <li>Germany</li>
                    <li>Italy</li>
                    <li>Japan</li>
                    <li>Mexico</li>
                    <li>Netherlands</li>
                    <li>Poland</li>
                    <li>Singapore</li>
                    <li>Spain</li>
                    <li>Turkey</li>
                    <li>United Arab Emirats</li>
                    <li>United Kingdom</li>
                    <li>United States</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer