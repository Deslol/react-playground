import {useTasks, useTasksDispatcher} from "../customHooks/TasksProvider";

export default function TaskList() {
    const tasks = useTasks()
    const tasksDispatcher = useTasksDispatcher()
    return (
        <ul>
            {tasks?.items.map((task) => (
                <li key={task.id}>
          <span
              style={{
                  textDecoration: task.done ? 'line-through' : 'none',
              }}
          >
            {task.text}
          </span>

                    <button
                        onClick={() =>
                            tasksDispatcher ? tasksDispatcher({
                                type: 'TOGGLE_ITEM',
                                payload: task.id
                            }) : console.error("dispatcher not defined")
                        }
                    >
                        Toggle
                    </button>

                    <button
                        onClick={() =>
                            tasksDispatcher ? tasksDispatcher({
                                type: 'DELETE_ITEM',
                                payload: task.id
                            }) : console.error("dispatcher not defined")
                        }
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}