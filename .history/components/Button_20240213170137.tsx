"use client";
interface ButtonProps {
  title: string;
  handleOnClick: any;
}

const Button = ({ title, handleOnClick }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={(event) => {
        event.preventDefault();
        handleOnClick();
      }}
    >
      {title}
    </button>
  );
};

export default Button;
