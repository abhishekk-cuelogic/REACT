import React from 'react';
import {Route,Link} from 'react-router-dom';


const list = () =>{
    return(
        <div>
            <ul>
                <li><Link to="/list/stark">Stark</Link></li>
                <li><Link to="/list/lannister">Lannister</Link></li>
                <li><Link to="/list/targeryan">Targeryan</Link></li>                    
            </ul>
        </div>

    );
}

export default list;