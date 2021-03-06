import { useState } from "react";

function Form(props) {
  const [task, setTask] = useState("");

  function handleChangeInput(event) {
    const inputTask = event.target.value;
    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();
    if (task) {
      props.onAddItem(task);
      setTask("");
    }
  }
  
  return(
    <form>
      <input
        type="text"
        onChange={handleChangeInput}
        value={task}
      />
      <button
        type="submit"
        onClick={handleAddItemToList}
        > Adicionar 
      </button>
    </form>
  );
}

export default Form;