import { connectDB } from "@/app/lib/connectDB";
import { TodoModal } from "@/app/lib/TodoModal";

export async function GET() {
  await connectDB();
  const TodosByMongoDB = await TodoModal.find();

  return Response.json(TodosByMongoDB);
}

export async function POST(request) {
  try {
    let newTodo = await request.json();
    let obj = await new TodoModal({
      task: newTodo.task,
      isCompleted: false,
    });
    await obj.save();
    return Response.json(obj);
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request) {
  let obj = await request.json();
  await TodoModal.deleteOne({ _id: obj.id });
}

export async function PUT(request) {
  let obj = await request.json();
}
// let userTodoInd = Todos.findIndex((todo) => todo.id == obj.id);
// Todos[userTodoInd] = obj;
// return Response.json({ Todos });
