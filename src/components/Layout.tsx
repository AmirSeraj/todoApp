import BackDropComp from "./BackDropComp";
import Footer from "./Footer";
import StatusBar from "./StatusBar";
import Header from "./Header";
import TodoList from "./TodoList";
import Sidebar from "./Sidebar";
import AddTodoForm from "./AddTodoForm";
import { useTodoState } from "../hooks/useTodoState";
import { useEffect, useMemo } from "react";
import { useDisclosure } from "@nextui-org/modal";
import { todoLimit } from "../lib/constants";
import ModalComponent from "./ModalComponent";

export default function Layout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { todos, handleSubmitTodo, handleDoneTodo, handleDeleteTodo } =
    useTodoState();

  useEffect(() => {
    if (todos.length > todoLimit) {
      onOpen();
    }
  }, [todos]);

  const completedProgress = useMemo(() => {
    if (todos.length === 0) return "0%";
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const completedPercentage = (completedTodos / todos.length) * 100;
    return `${completedPercentage}%`;
  }, [todos]);

  return (
    <div className="content min-h-screen w-full bg-pink-300 xl:px-80 lg:px-60 md:px-48 sm:px-20 px-8">
      <ModalComponent isOpen={isOpen} onClose={onClose} />
      <StatusBar completedProgress={completedProgress} />
      <BackDropComp />
      <main className="rounded-md shadow-lg drop-shadow-lg bg-[#f0f0f0] w-full h-full overflow-hidden grid grid-rows-[55px_1fr]">
        <Header todos={todos} />
        <div className="h-full grid grid-cols-[7fr_4fr]">
          <TodoList
            todos={todos}
            handleDoneTodo={handleDoneTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
          <Sidebar>
            <AddTodoForm onAddTodo={handleSubmitTodo} todos={todos} />
          </Sidebar>
        </div>
      </main>
      <Footer />
    </div>
  );
}
