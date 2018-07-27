import React from 'react';

import burgerLogo from '../../assest/images/burger-logo.png';
import classes from './Logo.css';

const logo =(props)=>(
    <div className={classes.Logo} style={{height:props.length}}>
        <img src={burgerLogo} alt="LoGO" />
    </div>
);

export default logo;