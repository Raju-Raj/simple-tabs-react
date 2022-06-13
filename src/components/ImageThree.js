import React from 'react';
import {Paper} from '@mui/material';

const ImageThree = () => {
  return (
    <Paper sx={{padding:"32px",width:"800px",background:"#8EC5FC",backgroundImage:'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'}} elevation={4}>
        <div className='image-setup'>
           <img src="https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds" alt=''/>
           <h4>Jeff Bezos</h4>
           <p className='matter'>Jeff Bezos began his career as a hedge-funder in New York before leaving to 
           start Amazon. Amazon struggled to turn a profit at first, but these days, it's worth $1.7 trillion.
            Its share price has hit new highs during the pandemic.</p>
        </div>
    </Paper>
  )
}

export default ImageThree