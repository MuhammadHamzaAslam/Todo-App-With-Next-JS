"use client";
import { updateTodo, deleteTodo } from "@/app/actions/todo";
import React from "react";

async function AllTodos() {
  let todosApi = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  todosApi = await todosApi.json();
  console.log("todosApi =>", todosApi);

  const onComplete = async (todo) => {
    let obj = { ...todo };
    obj.isCompleted = !obj.isCompleted;
    await updateTodo(obj);
  };

  const editTheTodo = async () => {
    alert("Edit functionality will be added soon!");
  };

  async function deleteTheTodo(id) {
    await deleteTodo({ id });
  }

  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      {todosApi.map((data) => (
        <div
          className={`flex justify-between items-center p-4 w-full max-w-lg border border-gray-300 shadow-lg rounded-lg bg-white ${
            data.isCompleted ? "opacity-50 line-through" : ""
          } transition-all duration-300`}
          key={data.id}
        >
          <h1
            onClick={() => onComplete(data)}
            className={`cursor-pointer text-lg ${
              data.isCompleted ? "text-gray-500" : "text-gray-800"
            }`}
          >
            {data.task}
          </h1>
          <div className="flex gap-3">
            <button
              onClick={() => deleteTheTodo(data._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-200"
            >
              Delete
            </button>
            <button
              onClick={() => editTheTodo(data.id)}
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all duration-200"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllTodos;
