import { createContext, useState } from "react";
import TodoHome from "../components/TodoHome";

const Todolist = createContext();

const TodoContext = () => {
  const [allTodos, setAllTodos] = useState([]);

  return (
    <>
      <Todolist.Provider value={[allTodos, setAllTodos]}>
        <TodoHome />
      </Todolist.Provider>
    </>
  );
};

export default TodoContext;
export { Todolist };
