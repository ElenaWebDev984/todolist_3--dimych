import './App.css'
import {TaskType, Todolist} from "./Todolist.tsx";


function App() {

    let tasks: TaskType[] = [
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
    ]

    const removeTask = (id: number) => {
        tasks = tasks.filter(task => task.id !== id)
    }

    // TODO в новый массив фильтруем/добавляем все таски, id которой не равна id той таски, которую нам надо удалить
    // const resultTasks = tasks.filter((task)=> {
    //     if (task.id !== id) {
    //         return true; // пропускаем/добавляем в новый массив
    //     } else {
    //         return false;
    //     }
    // })

    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={tasks}
                      removeTask={removeTask}
            />
        </div>
    )
}


export default App
