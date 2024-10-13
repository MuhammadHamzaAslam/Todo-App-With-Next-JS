const Todos = [
  {
    task: "Task 1",
    id: 1,
  },
];

export async function GET() {
  return Response.json(Todos);
}

export async function POST(request) {
  let newTodo = await request.json();
  let obj = {
    ...newTodo,
    id: Todos.length + 1,
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
