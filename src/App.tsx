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


function App() {

    let initTasks: TaskType[] = [
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
    ]

 let arr = useState(initTasks); // initial state

 let tasks = arr[0]
 let setTasks = arr[1]


    const removeTask = (id: number) => {
        initTasks = initTasks.filter(task => task.id !== id)
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
