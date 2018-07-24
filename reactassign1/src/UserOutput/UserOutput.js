import React from 'react';

const UserOutput=(props)=>{
    return(
        <div>
            <p onClick={props.clk}>My name is {props.name}</p>
        </div>
    )
}

export default UserOutput;