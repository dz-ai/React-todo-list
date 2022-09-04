function TodoItem({item, index, checkToggle, removeItem, editItem}) {
    const itemCheck = (event) => {
        checkToggle(item.id, event.target.checked);
    };

    const onRemoveItem = () => {
        removeItem(item.id);
    };

    const onAddItem = () => {
        editItem(item.id);
    };

    return (
        <div className="task-wrapper container">
            <p>{index}</p>
            <input type="checkbox"
                   checked={item.isComplete}
                   onChange={itemCheck}
            />
            <p>task: {item.task}</p>
            <button onClick={onAddItem}>Edit</button>
            <button onClick={onRemoveItem}>X</button>
        </div>
    );

}

export default TodoItem;