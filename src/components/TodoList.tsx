import clsx from "clsx";
import { TodoTypes } from "../lib/types";
import { TiDelete } from "react-icons/ti";
import { todoLimit } from "../lib/constants";
import ModalComponent from "./ModalComponent";

interface TodoListProps {
  todos: TodoTypes[];
  handleDoneTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  handleDoneTodo,
  handleDeleteTodo,
}: TodoListProps) {
  if (todos.length === 0) {
    return <p className="text-red-600 text-center w-full mt-4">No todos</p>;
  }

  return (
    <ul className="flex flex-col p-3 h-full overflow-auto">
      {todos.map((todo) => (
        <li
          role="button"
          onClick={() => handleDoneTodo(todo.id)}
          key={todo.id}
          className="border-b border-slate-400 flex items-center justify-between py-3 px-1"
        >
          <p
            className={clsx("text-xs capitalize", {
              "line-through text-gray-500": todo.completed,
            })}
          >
            {todo.title}
          </p>
          <TiDelete
            onClick={() => handleDeleteTodo(todo.id)}
            size={22}
            color="red"
            className="cursor-pointer"
          />
        </li>
      ))}
    </ul>
  );
}
