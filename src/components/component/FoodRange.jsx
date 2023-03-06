import React, { useState } from 'react'
import '../../styles/HomeStyles.css'
import Box from '@mui/material/Box';
import {Card, CardActions, CardContent, Button, Typography, Container} from '@mui/material';
import { foodRange } from '../../data/foodRange'
import '../../styles/HomeStyles.css'
import { chefsData } from '../../data/chefsData'
import ChefDetails from './ChefDetails'

const FoodRange = () => {

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

  return (
    <Container maxWidth="lg" sx={{display:"flex", justifyContent:"center", flexDirection:'column', alignItems:"center", mt: '50px', mb: '50px'}}>
    <Box sx={{textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
        { foodRange.map((food, index) => {
            return (
              
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
    </Box>
    <Box sx={{mt: '50px'}}>
      {/* <div>{foodRangeType.name} {console.log(chefs)}</div> */}
      <ChefDetails chefs={chefs}/>
    </Box>
    </Container>
  )
}

export default FoodRange