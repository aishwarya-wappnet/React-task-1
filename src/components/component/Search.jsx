import React from 'react'
import '../../styles/HomeStyles.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input'

const names = [
    'New York',
    'Boston',
    'New Jersey',
    'California',
    'Los Angeles',
    'Chicago',
    'Canada',
    'Hong Kong',
    'Alaska',
    'Sydney',
  ];

const search = () => {
  return (
    <div className="search">
        <FormControl sx={{width: {xs: "100px", sm: "250px"}}}>
        <InputLabel >Select City</InputLabel>
        {/* <LocationOnIcon/> */}
        <Select
         sx={{bgcolor: 'white', height: '50px', borderRadius: 3}}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          input={<OutlinedInput label="Name" />}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

        <FormControl sx={{width: {xs: "100px", sm: "250px"}}}>
        <TextField sx={{border: 'none', outline: 'none',bgcolor: 'white', height: '50px', borderRadius: 3}} placeholder="Search" type="search" />
      </FormControl>
    </div>
  )
}

export default search