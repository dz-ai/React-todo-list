function TodoItem({item, check}) {
    const itemCheck = (e) => {
        check(item.id, e.target.checked);
    };

    return (
        <div>
            <input type="checkbox"
                   checked={item.isComplete}
                   onChange={itemCheck}/>
            <span>
                <h3>task: {item.task}</h3>
            </span>
        </div>
    );

}

export default TodoItem;