"use server";

import { revalidatePath } from "next/cache";

export async function addTodo(obj) {
  try {
    await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify(obj),
    });
    revalidatePath("/");
  } catch (err) {
    console.log(err);
  }
}

export async function deleteTodo() {
    
}