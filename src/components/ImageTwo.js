import React from 'react';
import {Paper} from '@mui/material';

const ImageTwo = () => {
  return (
    <Paper sx={{padding:"32px",width:"800px",background:"#8EC5FC",backgroundImage:'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'}} elevation={4}>
        <div className='image-setup'>
           <img src="https://image.cnbcfm.com/api/v1/image/104225995-_95A5004.jpg?v=1540458420" alt=''/>
           <h4>Jack Ma</h4>
           <p className='matter'>Jack Ma is the co-founder of Alibaba Group, one of the world's largest 
           e-commerce businesses. As of May 6, 2022, he is the 30th wealthiest person in the world, with 
           a total net worth of $35.7 billion, according to Bloomberg.06</p>
        </div>
    </Paper>
  )
}

export default ImageTwo