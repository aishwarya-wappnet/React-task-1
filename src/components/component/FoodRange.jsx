import React from 'react'
import '../../styles/HomeStyles.css'
import Box from '@mui/material/Box';
import {Card, CardActions, CardContent, Button, Typography, Container} from '@mui/material';
import { foodRange } from '../../data/foodRange'
import '../../styles/HomeStyles.css'

const FoodRange = () => {
  return (
    <Container maxWidth="lg" sx={{display:"flex", justifyContent:"center", alignItems:"center", mt: '50px', mb: '50px'}}>
    <Box sx={{textAlign: 'center', display: 'flex'}}>
        { foodRange.map((food) => {
            return (
            <Card sx={{width: '100px', height: '100px', border: 1, borderColor: '#777', mr: 2, borderRadius: 4}}>
            <CardContent>
                <div>
                    <img src={food.icon} alt="" width="50"/>
                </div>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {food.name}
              </Typography>
            </CardContent>
          </Card>
            )
        })}
    </Box>
    </Container>
  )
}

export default FoodRange