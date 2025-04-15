import {FilterValuesType} from "./App.tsx";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsTypes = {
    title: string
    tasks: TaskType[]
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}


export const Todolist = (props: PropsTypes) => { // {title: 'What to learn, tasks: [}
    // debugger
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={()=> {props.removeTask(task.id)}}>x</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={ () => { props.changeFilter('all')}}>All</button>
                <button onClick={ () => { props.changeFilter('active')}}>Active</button>
                <button onClick={ () => { props.changeFilter('completed')}}>Completed</button>
            </div>
        </div>
    )
}