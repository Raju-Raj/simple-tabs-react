import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className='footer'>
        <span className='cont'>Contact:</span>
        <span className='email'>Rajuraj@gmail.com</span>
        <div className='icons'>
            <InstagramIcon/>
            <FacebookIcon/>
            <WhatsAppIcon/>
        </div>
    </div>
  )
}

export default Footer