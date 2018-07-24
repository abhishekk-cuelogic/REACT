import React, { Component } from 'react';
import Classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';


class App extends Component {

  state={
    persons:[
      {id:1 ,name:"Abhi",age:22},
      {id:2 ,name:"Shantanu",age:21},
      {id:3 ,name:"Harry",age:27}
    ],
    showPersons:false
  }

  toggleHandler=()=>{
   const doesshow= this.state.showPersons;
   this.setState({showPersons : !doesshow});
  }

  deletePerson=(personIndex)=>{
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChanged=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p =>{
      return p.id === id;
    })

    const person={
      ...this.state.persons[personIndex]
    }

    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons : persons})
  }

  render() {

    let persons=null;
    
    if(this.state.showPersons)
    {
      persons=
        <div>
            <Persons
              deletePerson={this.deletePerson}
              persons={this.state.persons}
              nameChanged={this.nameChanged}
            />
        </div>
      
    }
    
    return (
        <div className={Classes.App}>
          <Cockpit 
            persons={this.state.persons}
            Clicked={this.toggleHandler}
            showPersons={this.state.showPersons}
          />
         {persons}
        </div>
    );
  }
}

export default App;

