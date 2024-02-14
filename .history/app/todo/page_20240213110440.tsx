import React from "react";
import AddTodo from "../components/AddTodo";

const Todo = function () {
  return (
    <div className="h-screen w-full">
      <h1 className="font-bold text-lg text-center text-3xl underline">
        TODO App
      </h1>
      <AddTodo />
    </div>
  );
};

export default Todo;
