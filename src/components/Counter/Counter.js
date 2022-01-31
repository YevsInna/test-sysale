import React, {useReducer} from 'react';

import '../style.css'

const reducer = (state, action) => {
    switch (action.type) {

        case 'inc':
            return {...state, counter: state.counter + 1}
        case 'dec':
            if (state.counter > 1) {
                return {...state, counter: state.counter - 1}
            }
        default:
            return state
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 1});
    return (
        <div>

            <div className={'counter'}>
                <button onClick={() => dispatch({type: 'dec'})}>-</button>
                <div>{state.counter}</div>
                <button onClick={() => dispatch({type: 'inc'})}>+</button>
            </div>

        </div>
    );
};

export default Counter;