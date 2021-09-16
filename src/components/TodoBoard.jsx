import React from "react";

function TodoBoard({ todo, setTodo, idx, todos, setTodos, setEditMode }) {

    const editDelete = (currentValue,id) =>{
        if(idx===id){
            return false;
        }
        else{
            return true;
        }
     }

  const edit = (e) => {
    e.preventDefault();
    setTodo(todos[idx]);
    const newTodos = [...todos];
    const newTodos2= newTodos.filter(editDelete);
    setTodos(newTodos2);
    setEditMode(true);

  };


  const delet = (e) => {
    e.preventDefault();
    const newTodos = [...todos];
    const newTodos2 = newTodos.filter(editDelete);
    setTodos(newTodos2);
  };

  return (
    <div className="App2">
      <div className="container2">
        <h1 id="header" class="header">
          Todo: {idx + 1}
        </h1>
        <p className="new-task box">{todo.name}</p>
        <p className="new-task box">{todo.email}</p>
        <p className="new-task box">{todo.description}</p>
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
