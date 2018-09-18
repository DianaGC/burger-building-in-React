import React from 'react';
import classes from './BurgerIngredients.css'

const burgerIngredient =()=>{
    let ingredient = null;
    switch (props.type){
        case('bread-bottom'):
            ingredient= <div className={classes.BreadBottom}></div>
    }

};
export default burgerIngredient;