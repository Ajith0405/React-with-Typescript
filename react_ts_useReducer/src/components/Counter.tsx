import React,{ChangeEvent, useReducer} from 'react'

const initialState = {
    count:0,
    text:''
    };

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT
}
type ReducerAction ={
    type: REDUCER_ACTION_TYPE,
    payload?:string
}

const reducer = (state:typeof initialState, action:ReducerAction):typeof initialState =>{
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return{...state, count:state.count + 1};
        case REDUCER_ACTION_TYPE.DECREMENT:
            return{...state, count:state.count -1};
        case REDUCER_ACTION_TYPE.NEW_INPUT :
            return {...state, text:action.payload ?? ''};
        default:
            return state;
    }   
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement=()=>dispatch({type:REDUCER_ACTION_TYPE.INCREMENT});
    const handleDecrement=()=>dispatch({type:REDUCER_ACTION_TYPE.DECREMENT});
    const handleTextInput =(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type:REDUCER_ACTION_TYPE.NEW_INPUT,
            payload:e.target.value
        })
    } 

  return (
    <div>
        <h1>count : {state.count}</h1>
        <div>
            <button className='btn btn-primary' onClick={handleIncrement}>+</button>
            <button className='btn btn-primary' onClick={handleDecrement}>-</button>
        </div>
        <div>
            <input type="text" onChange={handleTextInput} />
            <h2>{state.text}</h2>
        </div>
    </div>
  )
}

export default Counter