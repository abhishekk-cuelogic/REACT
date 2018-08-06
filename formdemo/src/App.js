import React, { Component } from 'react';
import './App.css';
import Form from './component/form';
import Hobby from './component/hobby';
import Details from './component/details';


class App extends Component {

    state={
      flag:0
    }

    onClickHandler = () =>{
      this.setState({
        flag:1
      })
    }

    onClickHandler2 = () =>{
      this.setState({
        flag:2
      })
    }

  render() {
    let form=<Form clickbutton={this.onClickHandler}/>;
    if(this.state.flag === 1)
    {
        form = <Hobby click={this.onClickHandler2} />
         
    }
    if(this.state.flag === 2){
      form = <Details />
    }

    return (
      <div className="App">
        {form}
      </div>
    );
  }
}

export default App;
