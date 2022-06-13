import React from 'react';
import {Paper} from '@mui/material';

const ImageOne = () => {
  return (
    <Paper sx={{padding:"32px",width:"800px",background:"#8EC5FC",backgroundImage:'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'}} elevation={4}>
        <div className='image-setup'>
           <img src="https://i.pinimg.com/736x/80/35/03/80350376d5c7b9aedd97e813e8de6c4c.jpg" alt=''/>
           <h4>Elon Musk</h4>
           <p className='matter'>Entrepreneur Elon Musk has achieved global fame as the chief executive of electric autos 
           maker Tesla Inc. (TSLA), the CEO and lead designer of his space company SpaceX, and, more recently, as the 
           world's richest human.</p>
        </div>
    </Paper>
  )
}

export default ImageOne