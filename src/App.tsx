import TestComponent from "./TestComponent";
import React, {createContext, useEffect, useReducer, useState} from 'react';
import {ThemeProvider} from "./customHooks/ThemeProvider";
import Page from "./components/Page";
import {TasksProvider} from "./customHooks/TasksProvider";
import AddTaskButton from "./components/AddTaskButton";
import TaskManager from "./components/TasksManager";

export const ThemeContext = createContext('light')

function App() {
    /* Challenge 1 */
    // interface Counter {
    //     count: number,
    //     step: number
    // }
    //
    // type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" } | {
    //     type: "setStep",
    //     payload: number
    // }
    //
    // const initialState = {
    //     count: 0,
    //     step: 1
    // }
    //
    // function reducer(state: Counter, action: Action) {
    //     switch (action.type) {
    //         case 'increment':
    //             return {...state, count: state.count + state.step}
    //         case 'decrement':
    //             return {...state, count: state.count - state.step}
    //         case 'reset':
    //             return initialState
    //         case 'setStep':
    //             return {...state, step: action.payload}
    //         default:
    //             return state
    //     }
    // }
    //
    // const [state, dispatch] = useReducer(reducer, initialState)

    /* Challenge 2 - Task list */
    // interface TODOList {
    //     input: string;
    //     tasks: Task[];
    // }
    //
    // type Action =
    //     { type: "setInput", payload: string }
    //     | { type: "addTask" }
    //     | { type: "toggleTask", payload: number }
    //     | { type: "deleteTask", payload: number }
    //     | { type: "clearDone" }
    //
    // interface Task {
    //     id: number,
    //     text: string,
    //     done: boolean
    // }
    //
    // const initialState = {
    //     input: "",
    //     tasks: []
    // }
    //
    // function init(initState: TODOList): TODOList {
    //     const saved = localStorage.getItem("tasks")
    //     return {
    //         ...initState, tasks: saved ? JSON.parse(saved) : []
    //     }
    // }
    //
    // function reducer(state: TODOList, action: Action) {
    //     switch (action.type) {
    //         case "setInput":
    //             return {...state, input: action.payload};
    //         case "addTask":
    //             const newTask = {
    //                 id: Date.now(),
    //                 text: state.input,
    //                 done: false
    //             }
    //             return {tasks: [...state.tasks, newTask], input: ""};
    //         case "toggleTask":
    //             const newTasks = state.tasks.map(task => action.payload === task.id ? {
    //                 ...task,
    //                 done: !task.done
    //             } : task)
    //             return {tasks: newTasks, input: state.input};
    //         case "deleteTask":
    //             return {tasks: state.tasks.filter((task) => action.payload !== task.id), input: state.input};
    //         case "clearDone":
    //             return {tasks: state.tasks.filter((task) => !task.done), input: state.input};
    //         default:
    //             return state;
    //     }
    // }
    //
    // const [state, dispatch] = useReducer(reducer, initialState, init)
    //
    // useEffect(() => {
    //     localStorage.setItem("tasks", JSON.stringify(state.tasks))
    // }, [state.tasks])

    // const [theme, setTheme] = useState('dark')
    //
    // const toggleThemeHandler = () => {
    //     setTheme((prevTheme) => {
    //         return prevTheme === 'dark' ? 'light' : 'dark'
    //     })
    // }


    function throttleFactory(fn: (...args: any[]) => any, delay: number) {
        let lastCall: number | null = null;

        return function (...args: any[]){
            const now = Date.now()
            if(lastCall !== null && now - lastCall < delay) return
            lastCall = now;
            fn(...args)
        }
    }

    return (
        <div className="revise-container">
            <TasksProvider>
                <TaskManager/>
            </TasksProvider>

            {/*<ThemeProvider>*/}
            {/*    <Page/>*/}
            {/*</ThemeProvider>*/}
            {/*<ThemeContext.Provider value={theme}>*/}
            {/*    <TestComponent>*/}
            {/*        <button onClick={toggleThemeHandler}>Toggle Theme</button>*/}
            {/*    </TestComponent>*/}
            {/*</ThemeContext.Provider>*/}
            {/*    Challenge 1   */}
            {/*    <button onClick={() => dispatch({type: "increment"})}>+</button>*/}
            {/*    <p>{state.count}</p>*/}
            {/*    <button onClick={() => dispatch({type: "decrement"})}>-</button>*/}
            {/*    <button onClick={() => dispatch({type: "reset"})}>Reset</button>*/}
            {/*    <p>Step {state.step}</p> <input value={state.step} type="number" onChange={(e) => dispatch({*/}
            {/*    type: "setStep",*/}
            {/*    payload: Number(e.target.value)*/}
            {/*})}/>*/}
            { /* Challenge 2 */}
            {/*<input type="text" value={state.input}*/}
            {/*       onChange={(e) => dispatch({type: "setInput", payload: e.target.value})}/>*/}
            {/*<button onClick={() => dispatch({type: "addTask"})}>Add Task</button>*/}

            {/*<ul>*/}
            {/*    {state.tasks.map((task) => {*/}
            {/*        return (*/}
            {/*            <li key={task.id}>*/}
            {/*                <p>{task.text}</p>*/}
            {/*                <input type="checkbox" checked={task.done}*/}
            {/*                       onChange={() => dispatch({type: "toggleTask", payload: task.id})}/>*/}
            {/*                <button onClick={() => dispatch({type: "deleteTask", payload: task.id})}>Delete Task*/}
            {/*                </button>*/}
            {/*            </li>*/}

            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}


            {/*<button onClick={() => dispatch({type: "clearDone"})}>Clear all finished tasks</button>*/}
        </div>
    );
}

export default App;
