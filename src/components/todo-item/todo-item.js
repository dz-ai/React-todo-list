function TodoItem({item}) {
    console.log(item.isComplete);
    return (
        <div>
            <input type="checkbox" checked={item.isComplete && true}/>
            <span>
                <h3>task: {item.task}</h3>
            </span>

        </div>
    );

}

export default TodoItem;