import React from "react";
import AddTodo from "../components/AddTodo";
import MainHeading from "../components/MainHeading";
const Todo = function () {
  return (
    <div className="h-screen w-full">
      <MainHeading title={"TODO App"} />
      <AddTodo />
    </div>
  );
};

export default Todo;
