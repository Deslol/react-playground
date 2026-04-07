import {useTasks, useTasksDispatcher} from "../customHooks/TasksProvider";
import AddTaskButton from "./AddTaskButton";
import TaskList from "./TaskList";

export default function TaskManager() {
    const state = useTasks()
    const actionDispatcher = useTasksDispatcher()
    return (
        <div>
            <h2>Task Manager</h2>

            <input
                value={state?.input}
                onChange={(e) =>
                    actionDispatcher ? actionDispatcher({
                        type: 'SET_INPUT',
                        payload: e.target.value
                    }) : console.error("Dispatcher undefined")
                }
                placeholder="Enter a task"
            />

            <AddTaskButton/>

            <TaskList/>

            <button
                onClick={() => actionDispatcher ? actionDispatcher({type: 'CLEAR_BOUGHT'}) : console.error("Disptacher undefined")}>
                Clear completed
            </button>
        </div>
    )
}