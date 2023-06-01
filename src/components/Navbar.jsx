import { useContext } from "react";
import { searchContext } from "../context/SearchContextProvider";

const Logo = () => {
  return (
    <div className="flex gap-2 text-white bg-blue-500 dark:text-black dark:bg-white p-2 rounded-md">
      <span className="text-2xl font-medium">Goggl</span>
      <svg
        className="w-7 h-auto"
        width="800px"
        height="800px"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M622.4 682.453333l60.330667-60.309333 256.405333 256.405333-60.330667 60.309334z"
          fill="#616161"
        />
        <path
          d="M426.666667 426.666667m-341.333334 0a341.333333 341.333333 0 1 0 682.666667 0 341.333333 341.333333 0 1 0-682.666667 0Z"
          fill="#616161"
        />
        <path
          d="M692.266667 753.92l60.309333-60.330667 185.514667 185.514667-60.330667 60.330667z"
          fill="#37474F"
        />
        <path
          d="M426.666667 426.666667m-277.333334 0a277.333333 277.333333 0 1 0 554.666667 0 277.333333 277.333333 0 1 0-554.666667 0Z"
          fill="#64B5F6"
        />
        <path
          d="M573.866667 302.933333c-36.266667-42.666667-89.6-68.266667-147.2-68.266666s-110.933333 25.6-147.2 68.266666c-8.533333 8.533333-6.4 23.466667 2.133333 29.866667 8.533333 8.533333 23.466667 6.4 29.866667-2.133333C341.333333 296.533333 381.866667 277.333333 426.666667 277.333333s85.333333 19.2 115.2 53.333334c4.266667 4.266667 10.666667 8.533333 17.066666 8.533333 4.266667 0 10.666667-2.133333 12.8-4.266667 8.533333-8.533333 8.533333-23.466667 2.133334-32z"
          fill="#BBDEFB"
        />
      </svg>
    </div>
  );
};

const SearchBar = () => {
  const context = useContext(searchContext);
  const onSubmit = (e) => {
    if (e.key === "Enter") context.handleSearch(e.target.value);
  };

  return (
    <div className="flex-1 order-3 sm:-order-none relative min-w-full sm:min-w-0">
      <i className="fa-solid fa-magnifying-glass absolute top-1/2 left-4 -translate-y-1/2 opacity-20 text-sm"></i>
      <input
        className="text-base w-full max-w-md py-2 pr-5 pl-12 rounded-3xl text-gray-700 outline-none shadow-md"
        type="text"
        name="search"
        id="search"
        onKeyDown={onSubmit}
        placeholder="Search Google or type a URL"
      />
    </div>
  );
};

const ThemeSwitch = ({ darkTheme, handleTheme }) => {
  return (
    <button
      onClick={handleTheme}
      className="flex items-center gap-1 bg-white py-3 px-4 rounded-3xl cursor-pointer"
    >
      <img
        className="w-6"
        src={`./images/${darkTheme ? "light" : "moon"}.svg`}
        alt="icon"
      />
      {darkTheme ? "Light" : "Dark"}
    </button>
  );
};

function Navbar({ dark, handleTheme }) {
  return (
    <nav className="flex justify-between items-center gap-5 sm:gap-12 flex-wrap sm:flex-nowrap p-5">
      <Logo />
      <SearchBar />
      <ThemeSwitch darkTheme={dark} handleTheme={handleTheme} />
    </nav>
  );
}

export default Navbar;
