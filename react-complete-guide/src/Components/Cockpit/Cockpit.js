import React from 'react';
import classes from './Cockpit.css';

const Cockpit=(props)=>{
    let assignedclasses=[];

    if(props.persons.length <=2)
    {
      assignedclasses.push(classes.red);
    }
    if(props.persons.length <=1)
    {
      assignedclasses.push(classes.bold);
    }

    let btnclass='';
    if(props.showPersons)
    {
        btnclass=classes.red;
    }


    return(
        <div className={classes.Cockpit}>
        <h1>Hi ,I am React App</h1>
        <p className={assignedclasses.join(' ')}>This Really Works</p>
        <button 
        className={btnclass}
        onClick={props.Clicked}>
        Switch Me</button>
        </div>
        
    )
}

export default Cockpit;