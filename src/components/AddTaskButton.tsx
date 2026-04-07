import {useTasksDispatcher} from "../customHooks/TasksProvider";

export default function AddTaskButton() {
    const tasksDispatcher = useTasksDispatcher()

    return (
        <button
            onClick={() => tasksDispatcher ? tasksDispatcher({type: 'ADD_ITEM'}) : console.error("dispatcher not defined")}>
            Add task
        </button>
    )
}