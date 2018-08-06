import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/actions';


class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCouter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.add}  />
                <CounterControl label="Subtract 5" clicked={this.props.substract}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult =>(
                            <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                    
                </ul>

            </div>
        );
    }

}

const  mapStateToProps = state =>{
    return {
        ctr:state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch =>{
  return{
      onIncrementCouter : () => dispatch(actionCreators.increment()),
      onDecrementCounter : () => dispatch (actionCreators.decrement()),
      add : () => dispatch(actionCreators.add(10)),
      substract : () => dispatch (actionCreators.substract(5)),
      onStoreResult: (result) => dispatch (actionCreators.storeResult(result)),
      onDeleteResult: (id) => dispatch (actionCreators.deleteResult(id))
  } ; 
};


export default connect(mapStateToProps,mapDispatchToProps)(Counter);