import React,{ Component } from 'react';
import { connect } from 'react-redux';


class Hobby extends Component{

    render(){
        return(
            <div>
                    <h4>Your Birth Year</h4>
                    <input type="text" onChange={(event)=>this.props.byearChange(event)} />
                    <h4>What is your favourite Sport?</h4>
                    <input type="text" onChange={(event)=>this.props.sportChange(event)}/>
                    <br/><br/><br/>
                    <button onClick={this.props.click}>Proceed</button>
            </div>
        )
    }

}

/*const mapStateToProps = state =>{
    return {
        byear:state.byear,
        sport:state.sport
    }
}*/



const mapDispatchToProps = dispatch =>{
    return {
        byearChange: (event) => dispatch({type:'SAVE_BYEAR',event:event}),
        sportChange: (event) => dispatch({type:'SAVE_SPORT',event:event}),
    };
    
}

export default connect(null,mapDispatchToProps)(Hobby);