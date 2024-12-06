export interface TodoTypes {
  id: number;
  title: string;
  completed: boolean;
}

export interface HandleSubmitTodo {
  onAddTodo: (todoContent: string) => void;
  todos: TodoTypes[];
}

export interface BtnType {
  children: React.ReactNode;
  onClick?: () => void;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  className?: string;
  type?: "submit" | "reset" | "button";
}

export interface SidebarType {
  children: React.ReactNode;
}
