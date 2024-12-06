import clsx from "clsx";
import { TodoTypes } from "../lib/types";

interface TodoListType {
  todos: TodoTypes[];
}

export default function Header({ todos }: TodoListType) {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div className="relative flex justify-between items-center sm:px-6 px-2 bg-pink-200 border-b border-pink-300">
      <div className="flex items-center gap-1">
        {todos.map((todo: TodoTypes) => (
          <div
            className={clsx("w-5 h-5 rounded-full", {
              "bg-slate-500": !todo.completed,
              "bg-blue-500": todo.completed,
            })}
          />
        ))}
      </div>
      <p className="text-xs text-black font-bold">
        {completedTodos.length} / {todos.length} todos completed
      </p>
    </div>
  );
}
