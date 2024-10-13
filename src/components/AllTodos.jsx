import React from "react";

const AllTodos = async () => {
  let allTodos = await fetch("http://localhost:3000/api/todos");
  allTodos = await allTodos.json();
  return (
    <div>
      {allTodos.map((data) => (
        <div key={data.id}>
            <h1> {data.task} </h1>
        </div>
      ))}
    </div>
  );
};

export default AllTodos;
