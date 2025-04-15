import './App.css'
import {TaskType, Todolist} from "./Todolist.tsx";
import {useState} from "react";

// useState - это функция, которая принимает данные и возвращает массив
// function useState2(data: any) {
//     return [[{}, {}, {}], () => {}]
// }
//
// let arr = useState2([{}, {}, {}])
// let tasks = arr[0];
// let setTasks = arr[1];

// export function Counter(){
//     console.log('Counter rendered')
//     const arr = useState(5);
//     const data = arr[0]
//     const setData = arr[1]
//
//     return <div onClick={ () => {setData(data + 1)}}>{data}</div>
// }

export type FilterValuesType = 'all' | 'completed' | 'active';


function App() {

     // let arr = useState(initTasks); // initial state
     // let tasks = arr[0] // initial tasks
     // let setTasks = arr[1]
    // TODO вместо 2х предыдущих строк, записываем все в 1
    // let [tasks, setTasks] = arr;

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
    ]);

    const [filter, setFilter] = useState<FilterValuesType>('all');


    const removeTask = (id: number) => {
        const filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks);
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value);
    }

    // TODO в новый массив фильтруем/добавляем все таски, id которой не равна id той таски, которую нам надо удалить
    // const resultTasks = tasks.filter((task)=> {
    //     if (task.id !== id) {
    //         return true; // пропускаем/добавляем в новый массив
    //     } else {
    //         return false;
    //     }
    // })

    let tasksForTodolist = tasks;
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(task => task.isDone); // task.isDone = task.isDone === true
    }
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(task => !task.isDone); // !task.isDone = task.isDone === false
    }


    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    )
}


export default App
