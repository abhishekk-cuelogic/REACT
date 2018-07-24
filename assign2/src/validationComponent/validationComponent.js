import React from 'react';

const ValidationComponent=(props)=>{  
    if(props.text < 5)
    {
        return(
            <p>length is short</p>
        )
    }
    else
    {
        return(
            <p>length is long</p>
        )
    }
}

export default ValidationComponent;