import React, { useState } from 'react'
import { foodRange } from '../../data/foodRange'
import { chefsData } from '../../data/chefsData'
import {Card, CardActions, Box, CardContent, Button, Typography, Container} from '@mui/material';
import ChefDetails from './ChefDetails'
import Carousel from 'react-material-ui-carousel'

const FoodRangeMap = () => {
    const [chefs, setChefs] = useState(chefsData[0]);
    const [foodRangeType, setFoodRangeType] = useState(foodRange[0]);
    const [activeItem, setActiveItem] = useState({
      active: foodRange[0],
      objects: foodRange
    });
  
    const toggleActive = (index) => {
      console.log(activeItem.objects[index])
      setActiveItem({...activeItem, active: activeItem.objects[index]})
    }
  
    const toggleActiveStyle = (index) => {
      console.log(activeItem.objects[index] === activeItem.active)
      if(activeItem.objects[index] === activeItem.active){
        return "active";
      }else return "inactive";
    }

    const items = [];
    { foodRange.map((food, index) => {
      items.push(
      <Card key={index} className={toggleActiveStyle(index)} sx={{width: '100px', height: '100px', m: 1, borderRadius: 4, '&:hover':{cursor: 'pointer', borderColor: 'red', borderWidth: 2}}}>
        {/* {console.log(index)} */}
        <div onClick={() => {setFoodRangeType(foodRange[food.id-1]); setChefs(chefsData[food.id-1]); toggleActive(index) }}>
      <CardContent>
          <div>
              <img src={food.icon} alt="" width="50"/>
          </div>
        <Typography sx={{ fontSize: 14, border: 'none' }} className={toggleActiveStyle(index)}>
          {food.name}
        </Typography> 
      </CardContent>
      </div>
    </Card>
      )
  })}
  
  return (
  <>
  <Box sx={{textAlign: 'center', display: {xs:'none', sm: 'flex'},  flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
    {items}
  </Box>
  <Box sx={{textAlign: 'center', display: {sm: 'none', xs: 'block'}}}>
    <Carousel animation="slide" sx={{width: "250"}} show={3}>
      {items}
    </Carousel>
    </Box>
    <ChefDetails chefs={chefs}/>
  </>)
}

export default FoodRangeMap

 