
import { connectDB } from "@/app/lib/connectDB";
import { TodoModal } from "@/app/lib/TodoModal";

const Todos = [
  {
    task: "Task 1",
    id: 1,
    isCompleted: false,
  },
];

export async function GET() {
  await connectDB()
  const TodosByMongoDB = await TodoModal.find()
  
  return Response.json(Todos);
}

export async function POST(request) {
  let newTodo = await request.json();
  let obj = {
    ...newTodo,
    id: Todos.length + 1,
    isCompleted: false,
  };
  Todos.push(obj);
  return Response.json(Todos);
}

export async function DELETE(request) {
  let obj = await request.json();
  let todosInd = Todos.findIndex((todo) => todo.id == obj.id);
  Todos.splice(todosInd, 1);
  return Response.json(Todos);
}

export async function PUT(request) {
  let obj = await request.json();
  let userTodoInd = Todos.findIndex((todo) => todo.id == obj.id);
  Todos[userTodoInd] = obj
  return Response.json({ Todos });
}
