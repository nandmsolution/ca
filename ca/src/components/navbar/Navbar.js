import { useState } from "react";
export const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const navItems = ["Home", "Services", "About Us", "Contact Us"];
  return (
    <div>
      <header>
        <div className="p-4  md:flex items-center md:justify-between">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl text-indigo-400 font-bold"> Brand Name </h1>
            <button
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <label
                for="menu-toggle"
                className="cursor-pointer  md:hidden block"
              >
                <svg
                  className="fill-current  text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <title>menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </label>
            </button>
          </div>
          <nav>
            <ul
              className={
                toggle
                  ? "hidden md:flex mt-5 md:mt-0 pt-3 md:pt-0 items-center md:justify-center"
                  : "block  md:flex mt-5 md:mt-0 pt-3 md:pt-0 items-center md:justify-center"
              }
            >
              {navItems.map((item) => (
                <li>
                  <a className="px-3 pt-3 md:pt-0 cursor-pointer  block text-2xl border-b-2 border-transparent hover:border-indigo-400 ">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
