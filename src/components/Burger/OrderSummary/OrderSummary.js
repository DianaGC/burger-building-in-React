import React, {Component} from 'react'
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    render(){
        console.log('order sumaryyyy ', this.props)
        const ingredientSummry =Object.keys(this.props.ingredients)
            .map(igkey =>{
                return <li key ={igkey}><span style={{textTransform: 'capitalize'}}> {igkey}</span> : {this.props.ingredients[igkey]}</li>
            });
        return(
            <Aux>
                <h3>your Order</h3>
                <ul>
                    {ingredientSummry}
                </ul>
                <p><strong>
                    total price: {this.props.price}
                </strong></p>
                <p> Continue to checkout? </p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCELAR</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>OK</Button>
            </Aux>
        )
    }
};
export default OrderSummary;