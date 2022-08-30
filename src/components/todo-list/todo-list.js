import TodoItem from "../todo-item/todo-item";

function TodoList({ items }) {
    if (items.length === 0) return <span>Nothing to do :)</span>
    return (
        <>{items.map(item => <TodoItem key={item.id} item={item}/> )}</>
    );

}

export default TodoList