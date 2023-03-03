import React, { useState } from 'react'
import { AppBar, Box, Typography, Toolbar, IconButton, Drawer, Divider, Button } from '@mui/material'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Nav from '../component/Nav';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
// handle menu click
const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
}
  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography sx={{color: 'red', flexGrow: 1, my: 2}} variant="h6" component="div">
        <RestaurantMenuIcon/>
        <Divider/>
      </Typography>
      <Nav classname='mobile-navigation'/>
    </Box>
  )

  return (
    <>
        <Box>
          <AppBar component={'nav'} sx={{ bgcolor:'white' }}>
            <Toolbar>
              <IconButton color="black" aria-label="open drawer" edge="start" sx={{
                mr:2, display : { sm: "none"} 
              }} onClick={handleDrawerToggle}>
                <MenuIcon/>
              </IconButton>
            <Typography sx={{color: 'red', flexGrow: 1}} variant="h6" component="div">
            <RestaurantMenuIcon/>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }}}>
              <div style={{display: 'flex'}}>
              <Nav classname='navigation-menu'/>
              <Button sx={{bgcolor: "red", borderRadius: "25px"}} variant="contained">Get App</Button>
              </div>
            </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
             <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
             sx={{display:{xs:'block', sm: 'none'}, "& .MuiDrawer-paper": {boxSizing: "border-box", width: '200px'}}}>
              {drawer}
             </Drawer>
          </Box>
          <Box>
          <Toolbar/>
          </Box>
        </Box>
    </>
  )
}

export default Header