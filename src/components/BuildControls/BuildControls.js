import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: "meat", type: "meat" },
  { label: "bacon", type: "bacon" },
  { label: "salad", type: "salad" },
  { label: "cheese", type: "cheese" },
]

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <span> total price : <b>{props.totalPrice.toFixed(1)}</b> </span>
    {controls.map(ctrl => {
      return <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        addHandler={() => props.addIngredient(ctrl.type)}
        removeHandler={() => props.removeIngredient(ctrl.type)}
        disabled={props.isDisabled[ctrl.type]}
      />
    })}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ModalIsVisible}
    >
      Order Now
    </button>
  </div>
)

export default BuildControls