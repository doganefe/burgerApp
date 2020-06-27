import React from 'react'

import BurgerLogo from './../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'

const SideDrawer = () => {
  return (
    <div className={classes.SideDrawer}>
      <BurgerLogo  height ="11%"/>
      <nav>
      <NavigationItems />  
      </nav>
    </div>
  )
}

export default SideDrawer
