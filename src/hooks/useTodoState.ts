import { useCallback, useState } from "react";
import { TodoTypes } from "../lib/types";

export const useTodoState = () => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);

  const handleSubmitTodo = useCallback((todoContent: string) => {
    setTodos((prev: TodoTypes[]) => [
      ...prev,
      {
        id: Date.now(),
        title: todoContent.trim(),
        completed: false,
      },
    ]);
  }, []);

  const handleDoneTodo = useCallback((id: number) => {
    setTodos((prev: TodoTypes[]) => {
      const index = prev.findIndex((todo) => todo.id === id);
      if (index === -1) return prev;
      const updatedTodos = [...prev];
      updatedTodos[index] = {
        ...updatedTodos[index],
        completed: !updatedTodos[index]?.completed,
      };
      return updatedTodos;
    });
  }, []);

  const handleDeleteTodo = useCallback((id: number) => {
    setTodos((prev: TodoTypes[]) => prev.filter((todo) => todo.id !== id));
  }, []);

  return { todos, handleSubmitTodo, handleDoneTodo, handleDeleteTodo };
};
