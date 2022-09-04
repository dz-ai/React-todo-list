import TodoItem from "../todo-item/todo-item";
import { myTasks } from '../../mock/mock'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Edit from "../edit/edit";
import handleKeypress from "../../util/util";


function TodoList() {
    const [tasks, setTasks] = useState(myTasks);
    const [newTask, setNewTask] = useState({ task: '' });
    const [edit, setEdit] = useState({status: false, value: ''});

    const onAddTaskChange = (event) => {
        setNewTask({
            id: uuidv4(),
            task: event.target.value,
            isComplete: false,
        });
    };

    const addTask = () => {
        console.log(newTask);
        setTasks([newTask, ...tasks]);
        myTasks.push(newTask);
        setNewTask({task: ''});
        console.log(myTasks);
    };

    const checkboxToggle = (itemId, isComplete) => {
        setTasks(tasks => {
            const item = tasks.find(item => item.id === itemId);
            item.isComplete = isComplete;
            console.log(item);
            return [...tasks]
        });
    };

    const removeItem = (itemId) => {
        setTasks(tasks => {
           tasks = tasks.filter(item => item.id !== itemId);
            return [...tasks]
        });
    };

    const editItem = (itemId) => {
        setEdit({status: true, value: itemId});
    };

    if ( tasks.length !== 0 && tasks.filter(task => task.isComplete === false).length === 0 ) {
        setTasks([]);
    }

    if (edit.value) {
        return (
            <Edit setTasks={setTasks}
                  setEdit={setEdit}
                  edit={edit}/>
        );
    };

    return (
        <>
            <div>
                <input onChange={onAddTaskChange}
                       onKeyDown={event =>  handleKeypress(event,addTask)}
                       type="text" placeholder="Task"
                       value={newTask.task}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="tasks-list-wrapper">
                {tasks.length > 0 ?
                    tasks.map(item =>
                        <TodoItem
                            key={item.id}
                            index={tasks.indexOf(item)}
                            item={item}
                            checkToggle={checkboxToggle}
                            removeItem={removeItem}
                            editItem={editItem}
                        />) :
                    <span>nothing to do :)</span>
                }
            </div>

        </>
    );

};

export default TodoList;