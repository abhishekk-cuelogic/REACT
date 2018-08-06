const initialState = {
    name:'',
    country:'',
    byear:'',
    sport:''
}

const reducer = (state = initialState,action) =>{

    if(action.type === 'SAVE_NAME')
    {
        const newn=action.event.target.value;
        return{
            ...state,
            name:newn
        }
    }
    if(action.type === 'SAVE_COUNTRY')
    {
        const newc=action.event.target.value;
        return{
            ...state,
            country:newc
        }
    }

    if(action.type === 'SAVE_BYEAR')
    {
        const b=action.event.target.value;
        return{
            ...state,
            byear:b
        }
    }

    if(action.type === 'SAVE_SPORT')
    {
        const newsports=action.event.target.value;
        return{
            ...state,
            sport:newsports
        }
    }
    return state;
}

export default reducer;