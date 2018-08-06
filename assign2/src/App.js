import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './validationComponent/validationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state={
    userInput:'',
    userArray:[]
  }

  calculateLength =(event)=>{
    this.setState({userInput:event.target.value})
    this.setState({userArray:this.state.userInput.split(' ')})
  }

  deleteComponent=(text)=>{
      const wordIndex=this.state.userArray.findIndex((p)=>{
        return p === text;
      })
      let arr=this.state.userArray;
      arr.splice(wordIndex,1);
      this.setState({userArray:arr});
      let str=this.state.userArray.join(' ');
      this.setState({userInput:str});
    }

  

  render() {

    const style={
      backgroundColor:'grey',
      display:'inline-block',
      padding:'16px',
      textalign:'center',
      margin:'16px',
      border:'1px solid black'
    }

    let arr=this.state.userInput.split(' ');

    let Char=null;
    Char=(
        arr.map((text)=>{
          return <CharComponent
                  style={style}
                  input={text}
                  onChange={()=>this.deleteComponent(text)}
                  />
        })
       
    )
    

    return (
      <div className="App">
       <input type="text" 
       value={this.state.userInput}
       onChange={(event)=>this.calculateLength(event)}
       />

       <p>{this.state.userInput.length}</p>

       <ValidationComponent 
       text={this.state.userInput.length}
       />
        {Char}
        <br/>
      </div>
    );
  }
}

export default App;
