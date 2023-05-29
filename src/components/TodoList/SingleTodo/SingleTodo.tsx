import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../../App.interface";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import "./SingleTodo.css";
// import TodoList from '../TodoList';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

// :React.FC<Props>

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    if(editTodo===''){
      setEdit(false);
    }
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className="single_todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          className="single_todo_text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <span className="single_todo_text_done">{todo.todo}</span>
      ) : (
        <span className="single_todo_text">{todo.todo}</span>
      )}

      <div className="single_todo_icons">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <FiEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <AiOutlineFileDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
