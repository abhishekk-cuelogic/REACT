
const initialState={
    persons:[]
}

const reducer = (state=initialState,action) =>{

    if(action.type === 'PersonAdd'){
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: action.personData.name,
            age: action.personData.age
        }
        return {
            ...state, 
             persons:state.persons.concat(newPerson)
        }
        
    }

    if(action.type === 'DeletePerson'){
                return {
                     persons: state.persons.filter(person => person.id !== action.id)
                }
        }
    

    return state;
}

export default reducer;