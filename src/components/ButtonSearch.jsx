import PropTypes from "prop-types";

const Button = ({ name, icon: Icon }) => {
  return (
    <button
      type="submit"
      className="text-white w-full mr-3  p-4 flex justify-center items-center bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transform
      transition duration-1000 hover:scale-[1.05]"
    >
      <Icon className="m-[0.30em]" />
      <p className="">{name}</p>
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.func,
};

export default Button;
