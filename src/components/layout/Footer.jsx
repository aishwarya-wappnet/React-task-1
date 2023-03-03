import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign: 'center', bgcolor: '#EAEAEA', p:2}}>
       <Typography variant="p" sx={{"@media (min-width: 600px)": {fontSize:"1rem"}}}>
        Copyright 2020 Wappnet Systems Pvt. Ltd. All Rights Reserved
        </Typography> 
    </Box>
    </>
  )
}

export default Footer