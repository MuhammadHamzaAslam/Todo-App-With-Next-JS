import React from "react";

const TodoForm = () => {
  return (
    <form className="flex justify-center items-center flex-row gap-3 my-6">
      <input
        type="text"
        name="task"
        placeholder="Enter Your Todo"
        className="my-3 border-4 outline-none focus:border-blue-400 border-black py-4 px-4 rounded-xl w-1/3"
      />
      <input
        type="submit"
        className="bg-blue-400 py-4 px-8 rounded-xl text-xl box-border"
        value={'Add Todo'}
      />
    </form>
  );
};

export default TodoForm;
