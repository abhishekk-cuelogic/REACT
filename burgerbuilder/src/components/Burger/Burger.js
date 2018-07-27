import React from 'react';
import classes from './Burger.css';
import BurgerIngradient from './BurgerIngradient/BurgerIngradient';

const burger=(props)=>{

        let transformedIngridients=Object.keys(props.Ingridients)
            .map(igKey=>{
                return [...Array(props.Ingridients[igKey])].map((_,i)=>{
                    return <BurgerIngradient key={igKey+i} type={igKey} />
                })
            })
            .reduce((arr,el)=>{
                return arr.concat(el);
            },[]);

            if(transformedIngridients.length === 0){
                transformedIngridients=<p>Please start adding ingradients!!!</p>
            }

    return(
        <div className={classes.Burger}>
            <BurgerIngradient type="bread-top" />
            {transformedIngridients}
            <BurgerIngradient type="bread-bottom" />
        </div>
    )
} 

export default burger;