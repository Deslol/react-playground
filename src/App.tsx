import React, {useReducer} from 'react';

function App() {
    interface Counter {
        count: number,
        step: number
    }

    type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" } | {
        type: "setStep",
        payload: number
    }

    const initialState = {
        count: 0,
        step: 1
    }

    function reducer(state: Counter, action: Action) {
        switch (action.type) {
            case 'increment':
                return {...state, count: state.count + state.step}
            case 'decrement':
                return {...state, count: state.count - state.step}
            case 'reset':
                return initialState
            case 'setStep':
                return {...state, step: action.payload}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="revise-container">
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <p>{state.count}</p>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            <p>Step {state.step}</p> <input value={state.step} type="number" onChange={(e) => dispatch({
            type: "setStep",
            payload: Number(e.target.value)
        })}/>
        </div>
    );
}

export default App;
