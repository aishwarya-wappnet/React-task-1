import React, { useState } from 'react'
import '../../styles/HomeStyles.css'
import Box from '@mui/material/Box';
import { foodRange } from '../../data/foodRange'
import {Card, CardActions, CardContent, Button, Typography, Container} from '@mui/material';
import '../../styles/HomeStyles.css'
import ChefDetails from './ChefDetails'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import FoodRangeMap from './FoodRangeMap'

const FoodRange = () => {
  return (
    <Container maxWidth="lg" sx={{display:"flex", justifyContent:"center", flexDirection:'column', alignItems:"center", mt: '50px', mb: '50px'}}>
      <FoodRangeMap />
    </Container>
  )
}

export default FoodRange