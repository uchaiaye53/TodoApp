import React, { useContext, useState } from "react";
import TodoBoard from "./TodoBoard";
import { Todolist } from "../context/TodoContext";

function TodoHome() {
  const [allTodos, setAllTodos] = useContext(Todolist);

  const [editMOde, setEditMode] = useState(false);
  const initialForm = {
    name: "",
    email: "",
    description: "",
  };

  const [formTodo, setFormTodo] = useState(initialForm);

  function handleChange(e) {
    setFormTodo({ ...formTodo, [e.target.name]: e.target.value });
  }

  const onclck = (e) => {
    e.preventDefault();
    setAllTodos([...allTodos, formTodo]);
    setFormTodo(initialForm);
    setEditMode(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="header">TO DO BOX</h1>

        <form className="new-task box" onSubmit={onclck}>
          <div className="task">
            <p className="lebel">
              <label htmlFor="new-task">Name:</label>
            </p>
            <input
              type="text"
              id="new-task"
              name="name"
              value={formTodo.name}
              onChange={handleChange}
            />
          </div>
          <div className="task">
            <p className="lebel">
              <label htmlFor="new-task">Email:</label>
            </p>
            <input
              type="email"
              id="new-task"
              name="email"
              value={formTodo.email}
              onChange={handleChange}
            />
          </div>
          <div className="task">
            <p className="lebel">
              <label htmlFor="new-task">Todo:</label>
            </p>
            <textarea
              id="new-task"
              name="description"
              rows="3"
              cols="40"
              value={formTodo.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <button className="button" type="submit">
              {editMOde ? "Save Edit" : "Create"}
            </button>{" "}
          </div>
        </form>
      </div>

      <div className="property">
        {allTodos.map((formTodo, idx) => (
          <TodoBoard
            key={idx}
            idx={idx}
            formTodo={formTodo}
            setFormTodo={setFormTodo}
            setEditMode={setEditMode}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoHome;
