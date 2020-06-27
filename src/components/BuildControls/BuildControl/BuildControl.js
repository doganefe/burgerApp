import React from 'react'
import classes from './BuildControl.module.css'


const BuildControl = (props) => (
  <div className={classes.BuildControl}>
    <p className={classes.Label}>{props.label}</p>
    <button 
    className={classes.Less}
    onClick={props.removeHandler}
    disabled={props.disabled}
    >
      Less
    </button>
    <button 
    className={classes.More}
    onClick={props.addHandler}
    >
      More
      </button>
  </div>
)
export default BuildControl