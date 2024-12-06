import { Input } from "@nextui-org/input";
import ButtonComp from "./ButtonComp";
import React, { memo, useState } from "react";
import { HandleSubmitTodo } from "../lib/types";
import clsx from "clsx";
import { todoLimit } from "../lib/constants";

const AddTodoForm = ({ onAddTodo, todos }: HandleSubmitTodo) => {
  const [todoContent, setTodoContent] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoContent.trim) return;
    if (todoContent) {
      onAddTodo(todoContent);
    }
    setTodoContent("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">Add a todo</h2>
      <Input
        onChange={(e) => setTodoContent(e.target.value)}
        value={todoContent}
        name="title"
        type="text"
        autoFocus
        placeholder="add a todo"
      />
      <ButtonComp
        type="submit"
        color="secondary"
        className={clsx("", {
          hidden: todos.length > todoLimit,
        })}
      >
        Add to list
      </ButtonComp>
    </form>
  );
};

export default memo(AddTodoForm);
