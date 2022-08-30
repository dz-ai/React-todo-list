import {useState} from "react";

function TodoItem({item, check}) {
    const [checked, setChecked] = useState(item.isComplete);
    console.log(checked);
    const itemCheck = () => {
      check(item.id);
      if (checked) {
          setChecked(false);
      } else {
          setChecked(true);
      }
    };
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={itemCheck}/>
            <span>
                <h3>task: {item.task}</h3>
            </span>

        </div>
    );

}

export default TodoItem;