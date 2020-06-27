import React from 'react'
import classes from './Backdrop.module.css'
const Backdrop = (props) => (
    props.show ? <div 
    onClick = {props.clicked}
    className={classes.Backdrop}>noli</div> : null
  )

export default Backdrop
