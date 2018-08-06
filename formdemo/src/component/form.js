import React , { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {

    render(){
        return(
            <div>
                    <h4>Enter your Name</h4>
                    <input type="text" onChange={(event)=>this.props.nameChange(event)}/>
                    <h4>Enter Your Country</h4>
                    <input type="text" onChange={(event)=>this.props.countryChange(event)} /><br/><br/><br/>
                    <button onClick={this.props.clickbutton}>Proceed</button>
            </div>
        )
    }

}

/*const mapStateToProps = state =>{
    return{
        name:state.name,
        country:state.country
    }        
}*/

const mapDispatchToProps = dispatch =>{
    return {
        nameChange: (event) => dispatch({type:'SAVE_NAME',event:event}),
        countryChange: (event) => dispatch({type:'SAVE_COUNTRY',event:event}),
    };
    
}
    
export default connect(null,mapDispatchToProps)(Form);