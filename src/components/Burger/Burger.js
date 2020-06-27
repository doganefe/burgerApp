import React from 'react'
import BurderIngredients from './BurgerIngredients/BurderIngredients'
import classes from './Burger.module.css'

const Burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) =>
        <BurderIngredients key={igKey + i} type={igKey} />
      )
    }).reduce((prevValue,element) => {
      return prevValue.concat(element) 
    },[])
    
    if(transformedIngredients.length===0) {
      transformedIngredients = <p>Please start adding ingredients</p>
    }

  return (
    <div className={classes.Burger}>
      <BurderIngredients type='bread-top'/>
      {transformedIngredients}
      <BurderIngredients type='bread-bottom'/>
    </div>  
  )
}

export default Burger



// const transformedIngredients = Object.keys(props.ingredients)
// .map(igKey => {
//   return [...Array(props.ingredients[igKey])].map( (_,i) => 
//    <BurderIngredients key={igKey+i}type={igKey} />
//   ) 
// })