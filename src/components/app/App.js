import './App.css';
import { myTasks } from '../../mock/mock'
import TodoList from "../todo-list/todo-list";

function App() {
  return (
    <div className="App">
      <h1>To Do</h1><hr/>
        <TodoList items={myTasks}/>
    </div>
  );
}

export default App;
//{
//             myTasks.map(task =>
//             <TodoList
//                 key={task.id}
//                 task={task}
//                 isComp={isComplete}
//                 completeTaggle={completeTaskToggle}
//             />
//         )}