import React from 'react'
import {Button} from '@mui/material'
import { pages } from '../../data/pages'
import '../../styles/NavStyles.css'
import { Link } from 'react-router-dom';


const Nav = ({classname}) => {
  return (
    <>
    <ul className={classname}>
    {pages.map((page) => {
        return(
             <li key={page.id}>
              <Link to={page.link}>{page.name}</Link>
              </li>
          )})
        }
    </ul>
    </>
  )
}

export default Nav