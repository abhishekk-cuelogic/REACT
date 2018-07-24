import React from 'react';
import Classes from './Person.css'


const Person = (props) =>{
    return(
        <div className={Classes.Person}>
        <p onClick={props.Click}>My name is {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.Changed} value={props.name}/>
        </div>
    )
}

export default Person;