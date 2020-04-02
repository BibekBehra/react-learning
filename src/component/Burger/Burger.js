import React,{useContext} from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';
import AuthContext from '../../context/auth-context.js';

const Burger =  props  => {
    const authContext = useContext(AuthContext);
    let transformedIngredients = Object.keys( authContext.ingredients )
        .map( igKey => {
            return [...Array( authContext.ingredients[igKey] )].map( ( _, i ) => { // To understand this check teh difference between const arr=[Array(3)]; and const arr=[...Array(3)]; in jsbin
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default React.memo(Burger);