import React from 'react'
import Button from '../../UI/Button/Button'
const OrderSummary = (props) => {
  const price = props.totalPrice.toFixed(1)
  const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey, _) => {
      return <li key={igKey + _}>{igKey} : {props.ingredients[igKey]}</li>
    })
  return (
    <>
      <h3>OrderSummary</h3>
      <p>Delicious burger with following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total price is : <b>{price}</b></p>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={props.clickCanceled}>Cancel</Button>
      <Button btnType='Success' clicked={props.clickSubmitted}>Submit</Button>
    </>
  )
}

export default OrderSummary
