import React from 'react';

function TodoBoard({ todo, setTodo, idx, todos, setTodos }) {

    return (
        <div className="App2">
            <div className="container2">
                <h1 id="header" class="header">Todo: {idx + 1}</h1>
                <p className="new-task box">{todo.name}</p>
                <p className="new-task box">{todo.email}</p>
                <p className="new-task box">{todo.des}</p>
                <div>
                    <button className="button2" onClick={(e) => {
                        e.preventDefault();
                        setTodo(todos[idx]);
                        const newTodos = [...todos];
                        newTodos.splice(idx, 1);
                        setTodos(newTodos);
                    }}>Edit</button>

                    <button className="button2" onClick={(e) => {
                        e.preventDefault();
                        const newTodos = [...todos];
                        newTodos.splice(idx, 1);
                        setTodos(newTodos);
                    }}>Delete</button>
                </div>
            </div>

        </div>
    );
}

export default TodoBoard;