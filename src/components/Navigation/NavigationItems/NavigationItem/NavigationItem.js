import React from 'react'
import classes from './NavigationItem.module.css'
const NavigationItem = (props) => (
    <div className={classes.NavigationItem}>
        <li><a 
        href={props.link}
        className={props.active ? classes.active : null}
        >{props.children}</a></li>
    </div>
)


export default NavigationItem
