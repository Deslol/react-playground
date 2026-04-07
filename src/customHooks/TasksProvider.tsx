import React, {createContext, useContext, useReducer} from "react";

type Task = {
    id: number
    text: string
    done: boolean
}

type TaskActions = { type: "SET_INPUT", payload: string } | { type: "ADD_ITEM" } | {
    type: "TOGGLE_ITEM",
    payload: number
} | { type: "DELETE_ITEM", payload: number } | { type: "CLEAR_BOUGHT" }

const TasksContext = createContext<taskState | undefined>(undefined)
const TasksDispatchContext = createContext<React.Dispatch<TaskActions> | undefined>(undefined)

export function useTasks() {
    return useContext(TasksContext)
}

export function useTasksDispatcher() {
    return useContext(TasksDispatchContext)
}

const initialState: taskState = {
    input: "",
    items: []
}

interface taskState {
    input: string,
    items: Task[]
}


export function TasksProvider({children}: { children: React.ReactNode }) {
    const [state, taskDispatcher] = useReducer(tasksReducer, initialState)

    function tasksReducer(state: taskState, action: TaskActions) {
        switch (action.type) {
            case "ADD_ITEM":
                const newItem = {
                    id: Math.random(),
                    text: state.input,
                    done: false
                }

                return {
                    input: '',
                    items: [...state.items, newItem]
                }
            case "CLEAR_BOUGHT":
                return {
                    input: state.input,
                    items: state.items.filter((task) => {
                        return !task.done
                    })
                }
            case "DELETE_ITEM":
                return {
                    input: state.input,
                    items: state.items.filter((task) => task.id !== Number(action.payload))
                }
            case "SET_INPUT":
                return {
                    input: action.payload,
                    items: state.items
                }
            case "TOGGLE_ITEM":
                return {
                    ...state,
                    items: state.items.map((task) => {
                        return task.id === action.payload ? {...task, done: !task.done} : task
                    })
                }
            default:
                return state
        }
    }

    return (
        <TasksContext.Provider value={state}>
            <TasksDispatchContext.Provider value={taskDispatcher}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}