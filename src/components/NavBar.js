import React from 'react';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import LoginIcon from '@mui/icons-material/Login';

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='n-right'>
          <CurrencyBitcoinIcon sx={{color:'white'}} />
            <h3>Billionaires</h3>
        </div>
        <div className='n-left'>
            <LoginIcon sx={{color:'white',fontWeight:'bold'}}/>
            <butto>Login</butto>
        </div>
    </div>
  )
}

export default NavBar