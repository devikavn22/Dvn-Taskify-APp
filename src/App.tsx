import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import { Todo } from "./App.interface";
import TodoList from "./components/TodoList/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    setTodo("");
  };

  console.log(todos);
  return (
    <>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
        {/* {todos.map((item) => (
          <li>{item.todo}</li>
        ))} */}
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;
