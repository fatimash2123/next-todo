import Button from "./Button";
const AddTodo = function () {
  return (
    <form className="max-w-sm mx-auto flex justify-center items-center w-full">
      <div className="mb-5">
        <label
          htmlFor="todo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Todo Task
        </label>
        <input
          type="todo"
          id="todo"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Description for a todo"
        />
      </div>
      <Button
        title="Add"
        handleOnClick={() => {
          console.log("add todo click");
        }}
      />
    </form>
  );
};

export default AddTodo;
