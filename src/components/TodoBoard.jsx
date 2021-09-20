import React, { useContext } from "react";
import { Todolist } from "../context/TodoContext";

function TodoBoard({
  formTodo: { name, email, description },
  setFormTodo,
  idx,
  setEditMode,
}) {
  const [allTodos, setAllTodos] = useContext(Todolist);

  const edit = (e) => {
    e.preventDefault();
    setEditMode(true);
    setFormTodo(allTodos[idx]);
    const newTodos = [...allTodos];
    setAllTodos(newTodos.filter((currentValue, id) => idx !== id));
  };

  const delet = (e) => {
    e.preventDefault();
    const newTodos = [...allTodos];
    setAllTodos(newTodos.filter((currentValue, id) => idx !== id));
  };

  return (
    <div className="App2">
      <div className="container2">
        <h1 id="header" className="header">
          Todo: {idx + 1}
        </h1>
        <p className="new-task box">{name}</p>
        <p className="new-task box">{email}</p>
        <p className="new-task box">{description}</p>
        <div>
          <button className="button2" onClick={edit}>
            Edit
          </button>

          <button className="button2" onClick={delet}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoBoard;
