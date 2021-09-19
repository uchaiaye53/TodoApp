import { createContext, useState } from "react";
import TodoHome from "../components/TodoHome";

const Todolist = createContext();

const TodoContext = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Todolist.Provider value={[todos, setTodos]}>
        <TodoHome />
      </Todolist.Provider>
    </>
  );
};

export default TodoContext;
export { Todolist };
