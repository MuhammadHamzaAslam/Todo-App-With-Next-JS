const Todo = [
  {
    task: "Sleeping",
    id: 1,
  },
  {
    task: "Break Fast",
    id: 2,
  },
  {
    task: "School",
    id: 3,
  },
];

export async function GET() {
  return Response.json(Todo);
}
