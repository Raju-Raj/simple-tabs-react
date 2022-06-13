import { TabContext, TabList, TabPanel } from '@mui/lab'
import React, { useState } from 'react';
import {Box,Tab} from '@mui/material';
import ImageOne from './ImageOne';
import ImageTwo from './ImageTwo';
import ImageThree from './ImageThree';

const DynamicTabUsingMUI = () => {
    const [value,setValue]=useState('1')
    const handleChange = (event,newValue) => {
        setValue(newValue)
    }
  return (
      <div className='tabs'>
    <div className="t-main">
        <TabContext value={value} >
            <Box sx={{width:'70%',marginLeft:'18rem'}}>
                <TabList onChange={handleChange} scrollButtons='auto' variant='scrollable' width="100%"  centered>
                    <Tab label="ElonMusk" value="1" iconPosition='start'/>
                    <Tab label="JackMa" value="2" />
                    <Tab label="JeffBezos" value="3" />
                </TabList>
            </Box>
            <TabPanel value='1'>
                <ImageOne/>
            </TabPanel>
            <TabPanel value='2'>
                <ImageTwo/>
            </TabPanel>
            <TabPanel value='3'>
                <ImageThree/>
            </TabPanel>
        </TabContext>
    </div>
 </div>
  )
}

export default DynamicTabUsingMUI