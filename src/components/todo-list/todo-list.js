import TodoItem from "../todo-item/todo-item";

function TodoList({ items }) {

    const checkboxToggle = (itemId) => {
        console.log(itemId);
        const item = items.find(item => item.id === itemId);
        if (item.isComplete) {
            item.isComplete = false;
        } else {
            item.isComplete = true;
        }
        console.log(item);
    }

    if (items.length === 0) return <span>Nothing to do :)</span>
    return (
        <>{items.map(item => <TodoItem key={item.id} item={item} check={checkboxToggle}/> )}</>
    );

}

export default TodoList