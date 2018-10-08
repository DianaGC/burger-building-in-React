import React from 'react'
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummry =Object.keys(props.ingredients)
        .map(igkey =>{
            return <li key ={igkey}><span style={{textTransform: 'capitalize'}}> {igkey}</span> : {props.ingredients[igkey]}</li>
        });

    return(
        <Aux>
            <h3>your Order</h3>
            <ul>
                {ingredientSummry}
            </ul>
            <p><strong>
                total price: {props.price}
            </strong></p>
            <p> Continue to checkout? </p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCELAR</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>OK</Button>
        </Aux>
    )
};
export default orderSummary;