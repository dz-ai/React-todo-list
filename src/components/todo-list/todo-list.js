import TodoItem from "../todo-item/todo-item";
import {myTasks} from '../../mock/mock'
import {useState} from "react";

function TodoList() {
    const [tasks, setTasks] = useState(myTasks);

    const checkboxToggle = (itemId, isComplete) => {
        setTasks(tasks => {
            const item = tasks.find(item => item.id === itemId);
            item.isComplete = isComplete;
            console.log(item);
            return [...tasks]
        });
    }

    return (
        <>
            <h1>To Do</h1>
            <hr/>
            {myTasks.filter(task => task.isComplete === false ).length === 0 ?
                <span>Nothing to do :)</span> :
                tasks.map(item =>
                    <TodoItem
                        key={item.id}
                        item={item}
                        check={checkboxToggle}
                    />)}
        </>
    );

}

export default TodoList