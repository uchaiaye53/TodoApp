import { useState } from 'react';
import './App.css';
import TodoBoard from './TodoBoard';

function App() {
  const [todos, setTodos] = useState([]);

  const [todo, settodo] = useState([
    {
      name: "",
      email: "",
      des: "",
    }
  ]);

  function handleChange(e) {
    settodo({ ...todo, [e.target.name]: e.target.value });
  }


  return (
    <div className="App">
      <div className="container">

        <h1 class="header">TO DO BOX</h1>

        <form className="new-task box" onSubmit={(e) => { e.preventDefault(); setTodos([...todos, todo]); settodo({ name: " ", email: " ", des: " " }) }}>
          <div className="task">
            <label for="new-task">Name</label>
            <input type="text" id="new-task" name="name" value={todo.name} onChange={handleChange} />
          </div>
          <div className="task">
            <label for="new-task">Email</label>
            <input type="email" id="new-task" name="email" value={todo.email} onChange={handleChange} />
          </div>
          <div className="task">
            <label for="new-task">Todo</label>
            <textarea id="new-task" name="des" rows="3" cols="40" value={todo.des} onChange={handleChange}>
            </textarea>
          </div>

          <div><button className="button" type="submit">Creat</button> </div>
        </form>

      </div>

      <div className="property">
        {
          todos.map((todo, idx) => <TodoBoard key={idx} idx={idx} todos={todos} todo={todo} setTodo={settodo} setTodos={setTodos} />)
        }
      </div>

    </div>
  );
}

export default App;
