import React from 'react';
import Person from './Person/Person'

const Persons=(props)=>{
    return(
        <div>
          {props.persons.map((person,index)=>{
            return <Person
             Click={()=>props.deletePerson(index)}
             name={person.name}
             age={person.age}
             key={person.id}
             Changed={(event)=>props.nameChanged(event,person.id)} 
            />
          })}
       </div>
    )     
}

export default Persons; 



