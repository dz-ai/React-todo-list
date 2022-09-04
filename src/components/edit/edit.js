import {useState} from "react";
import handleKeypress from "../../util/util";
import './style.css';

function Edit({setTasks, setEdit, edit}) {
    const [newEdit, setNewEdit] = useState('');

    const handleEdit = (event) => {
        setNewEdit(event.target.value)
    };

    const handleEditDone = () => {
        setTasks(prevTasks => {
            const item = prevTasks.find(task => task.id === edit.value);
            console.log('item ', item)
            item.task = newEdit;
            return [...prevTasks];
        })
        setEdit({status: false, value: ''});
    };

    return (
        <div className="edit-wrapper">
            <label>Edit Task</label>
            <input onChange={handleEdit}
                   onKeyDown={event => handleKeypress(event, handleEditDone)}
                   type="text"
                   value={newEdit}/>
            <button onClick={handleEditDone}>done</button>
        </div>
    );
}

export default Edit;