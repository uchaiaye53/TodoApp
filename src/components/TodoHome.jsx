import React, { useState } from "react";
import TodoBoard from "./TodoBoard";

function TodoHome() {
  const [todos, setTodos] = useState([]);
  const [editMOde, setEditMode] = useState(false);
  const demo = () => {
    return {
      name: "",
      email: "",
      description: "",
    };
  };
  const [todo, settodo] = useState(demo);

  function handleChange(e) {
    settodo({ ...todo, [e.target.name]: e.target.value });
  }

  const onclck = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    settodo(demo);
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
              value={todo.name}
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
              value={todo.email}
              onChange={handleChange}
            />
          </div>
          <div className="task">
            <p className="lebel">
                {" "}
              <label htmlFor="new-task">Todo:</label>
            </p>
            <textarea
              id="new-task"
              name="description"
              rows="3"
              cols="40"
              value={todo.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <button className="button" type="submit">
              {
                  editMOde?"Save Edit":"Create"
              }
            </button>{" "}
          </div>
        </form>
      </div>

      <div className="property">
        {todos.map((todo, idx) => (
          <TodoBoard
            key={idx}
            idx={idx}
            todos={todos}
            todo={todo}
            setTodo={settodo}
            setTodos={setTodos}
            setEditMode={setEditMode}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoHome;
