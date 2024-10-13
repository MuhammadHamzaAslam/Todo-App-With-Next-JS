import AllTodos from "@/components/AllTodos";
import TodoForm from "@/components/TodoForm";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-5xl font-mono my-4 pt-4">Todo App With Next JS </h1>
      <TodoForm/>
      {/* <AllTodos/> */}
    </div>
  );
}
