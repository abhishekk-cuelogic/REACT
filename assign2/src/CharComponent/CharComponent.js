import React from 'react';

const CharComponent =(props)=>{
    return(
        <p onClick={props.onChange} style={props.style}>{props.input}</p>
    )
}

export default CharComponent;