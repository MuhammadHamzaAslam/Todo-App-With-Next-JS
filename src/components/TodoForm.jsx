"use client";
import { addTodo } from "@/app/actions/todo";
import React, { useRef } from "react";

const TodoForm = async () => {
  const formRef = useRef(null);

  const handleAddTodo = async (formData) => {
    const obj = { task: formData.get("task") };
    if (obj.task) {
      await addTodo(obj);
      formRef?.current?.reset();
    } else {
      alert("Please add a task");
    }
  };

  let todosUser = await fetch("http://localhost:3000/api/users")
  todosUser = await todosUser.json()
  console.log('todosUser =>' , todosUser);

  return (
    <form
      action={handleAddTodo}
      ref={formRef}
      className="flex justify-center items-center flex-row gap-3 my-8"
    >
      <input
        type="text"
        name="task"
        placeholder="Enter your Todo"
        className="my-3 border-2 outline-none focus:border-blue-500 border-gray-300 py-3 px-4 rounded-lg w-full max-w-md shadow-sm transition-all duration-200"
      />
      <select name="users" >
        {
          todosUser?.map((data)=>(
            <option value={data._id}> {data.fullName} </option>
          ))
        }
      </select>
      <input
        type="submit"
        className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold cursor-pointer hover:bg-blue-600 transition-all duration-200"
        value="Add Todo"
      />
    </form>
  );
};

export default TodoForm;
