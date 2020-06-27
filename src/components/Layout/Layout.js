import React from 'react'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
 function Layout(props) {
  return (  
    <>
    <Toolbar />
    <SideDrawer />
      <main className={classes.content}>
        {props.children}
      </main>
    </>
  )
}

export default Layout
