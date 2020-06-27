import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger.js'
import BuildControls from '../../components/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES = {
  salad : 0.5,
  bacon : 0.7,
  cheese:0.4,
  meat:1.3
}


class BurgerBuilder extends Component {
state = {
  ingredients : {
    salad : 0,
    bacon : 0,
    cheese :0,
    meat : 0,
  },
  totalPrice : 2.9,
  purchasable : false,
  modalIsVisible : false,
}

updatePurchaseState = (ingredients) => {
  const sum = Object.keys(ingredients)
  .map(igKey => {
    return ingredients[igKey]
  })
  .reduce((prevVal,currentVal) => {
    return prevVal+currentVal
  },0)
  this.setState({purchasable : sum > 0},() => console.log("purchasable state degeri : " + this.state.purchasable))
}

addIngredientHandler = (type) => {
  const updatedIngredients = {...this.state.ingredients}
  updatedIngredients[type]++
  const updatedPrice  = this.state.totalPrice+INGREDIENT_PRICES[type]
  this.setState({
    ingredients:updatedIngredients,
    totalPrice:updatedPrice
  })
  this.updatePurchaseState(updatedIngredients)
}

removeIngredientHandler = (type) => {
  if(this.state.ingredients[type]<=0) return
  const updatedIngredients = {...this.state.ingredients}
  updatedIngredients[type]--
  const updatedPrice = this.state.totalPrice-INGREDIENT_PRICES[type]
  this.setState({
    ingredients:updatedIngredients,
    totalPrice:updatedPrice
  })
  this.updatePurchaseState(updatedIngredients)
}

visibleHandler = () => {
  this.setState({modalIsVisible : !this.state.modalIsVisible},() => console.log(this.state.modalIsVisible))
}
clickSubmitted = () => {
  alert("You continued")
}
  render() {
    const isDisabled = {...this.state.ingredients}
    for(let key in isDisabled) {
      isDisabled[key] = isDisabled[key] <= 0
    }
    return (
      <div>
        <Modal show={this.state.modalIsVisible} backDropClicked={this.visibleHandler}>
          <OrderSummary  
          ingredients={this.state.ingredients}
          clickCanceled={this.visibleHandler}
          clickSubmitted={this.clickSubmitted}
          totalPrice = {this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
        addIngredient={this.addIngredientHandler}
        removeIngredient={this.removeIngredientHandler}
        isDisabled = {isDisabled}
        totalPrice={this.state.totalPrice}
        purchasable = {this.state.purchasable}
        ModalIsVisible = {this.visibleHandler}
        />
      </div>
    )
  }
}

export default BurgerBuilder
