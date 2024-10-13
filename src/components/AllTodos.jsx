import React from "react";

async function AllTodos() {
  let todosApi = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  todosApi = await todosApi.json();

  return (
    <div>
      <div className="flex justify-center flex-col items-center gap-3">
        {todosApi.map((data) => (
          <div
            className="flex justify-between items-center p-3 border border-black w-1/3 "
            key={data.id}
          >
            <h1>{data.task}</h1>
            <div className="bg-red-400 capitalize rounded-xl text-white px-8 py-3 box-border">
              del
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTodos;
