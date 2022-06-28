import { TodosInput } from "./TodosInput";
import { useState } from "react";
import { TodosItem } from "./TodosItem";
import { v4 as uuid } from "uuid";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleClick = (text) => {
    const payload = {
      title: text,
      id: uuid(),
      status: false,
    };
    setTodos([...todos, payload]);
  };
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };
  const handleToggle = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(updatedTodos);
  };
  return (
    <>
      <h1>Todo</h1>
      <TodosInput handleClick={handleClick} />
      {todos.map((item) => {
        return (
          <TodosItem
            key={item.id}
            title={item.title}
            status={item.status}
            id={item.id}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </>
  );
};
