import React, { Component } from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import List from './components/List';

 export const Child =({match})=>{

  let quote=null;

  if(match.params.id === 'stark')
  {
    quote="Winter is coming";
  }

  if(match.params.id ==='lannister')
  {
    quote="Hear Me Roar";
  }

  if(match.params.id === 'targeryan')
  {
    quote="Fire and Blood";
  }


return(
  <div>
    <List />
    <hr/>
    <h1>House:{match.params.id}</h1>
    <h2>{quote}</h2>
  </div>
)
}



class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <div>
                <ul>
                    <Link to="/" >HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/list">LIST</Link>
                </ul>
                <hr/>
               <Switch> 
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/list" component={List}/>
                <Route path="/list/:id" component={Child}/>
                </Switch>
              </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
