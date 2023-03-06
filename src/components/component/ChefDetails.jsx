import React from 'react'
import { Container, Box, Button, Card, Typography } from '@mui/material'
import '../../styles/CardStyles.css'


const ChefDetails = ({chefs}) => {
    return (
        <Container width="lg" sx={{display:"flex", justifyContent:"center", flexDirection:'column', alignItems:"center", mt: '20px', mb: '50px'}}>
            <Typography variant='h5' sx={{color: '#ff9100', fontWeight: 'bold'}}>TRENDING CHEF</Typography>
            <Typography variant='p' sx={{mt: 2, mb: 4}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, placeat.</Typography>
        <Box sx={{textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center'}}>
            {chefs.chefDetails.map((chef) => {
                return(
                    <Card sx={{ width: 250, height: 250, m: 1, color: 'white', backgroundImage: `url('./assets/food1.jpg')`, borderRadius: 5,  backgroundRepeat: 'no-repeat', backgroundSize: '250px 250px' }} key={chef.id}>
                         <div className="cardHeader">
                            <div>
                                <img src={chef.image} width="50" height="50" style={{border: '2px solid #ff9100', borderRadius: '30px'}}/>
                            </div>
                          <div style={{padding: '15px'}}>
                          <p>{chef.chefname}</p>
                          </div>
                        </div>
                        {/* <p>{chefs.foodRangeName}</p> */}
                        <div className="cardFooter">
                            <div className="footerName">
                                <p style={{color: 'white'}}>{chef.name}</p>
                                <p style={{color: '#999', textAlign: 'left', fontSize: 15}}>{chef.meal}</p>
                            </div>
                            <div>
                            <Button variant="contained" sx={{borderRadius: 5, bgcolor: 'red'}}>{chef.price}</Button>
                            </div>
                        </div>
                    </Card>
                )
            })}
            
        </Box>
        </Container>
      );
}

export default ChefDetails