import React , { Component } from 'react';
import { connect } from 'react-redux';

class  Details extends Component{
    render(){
        return(
            <div>
                <h2>Hi {this.props.name}</h2>
                <h2>You live in {this.props.country} </h2>
                <h2>Your Birth Year is {this.props.byear}</h2>
                <h2>Your Favourite Sports is {this.props.sport}</h2>
            </div>
        )
    }    
}

const mapStateToProps = state =>{
    return{
        name:state.name,
        country:state.country,
        byear:state.byear,
        sport:state.sport
    }
}
    

export default connect(mapStateToProps) (Details);