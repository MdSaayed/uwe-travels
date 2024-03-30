import { Link, NavLink } from "react-router-dom";
import { Logo } from "../assets";
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <header className="bg-white relative">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          {/* mobile navbar  */}
          <ul className={`${isOpen ? "flex items-center gap-6" : "hidden"}`}>
            <ul
              className={
                "flex shadow-sm flex-col justify-center absolute top-0 left-0 z-10 bg-white items-center h-[100vh] gap-4 w-full sm:w-auto"
              }
            >
              <TfiClose
                onClick={toggleMenu}
                className="roundedp-2  transition text-xl absolute top-3 right-3"
              ></TfiClose>

              <li className="text-xl">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active text-[#5E3BEE]  font-semibold"
                      : "text-[#1C1E53]"
                  }
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink
                  to="/destination"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active text-[#5E3BEE] font-semibold"
                      : ""
                  }
                  onClick={toggleMenu}
                >
                  Destination
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink
                  to="/trips"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active text-[#5E3BEE] font-semibold"
                      : ""
                  }
                  onClick={toggleMenu}
                >
                  Trips
                </NavLink>
              </li>

              <li className="text-xl">
                <NavLink
                  to={"/contact"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active text-[#5E3BEE] font-semibold"
                      : ""
                  }
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </li>

              <>
                <li className="text-xl">
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active text-[#5E3BEE] font-semibold"
                        : ""
                    }
                    onClick={toggleMenu}
                  >
                    About
                  </NavLink>
                </li>
              </>
            </ul>
          </ul>
          <div className={`hidden md:block`}>
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/destination"
                  >
                    {" "}
                    Destination{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="trips"
                  >
                    {" "}
                    Trips{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="contact"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="about"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                to="login"
              >
                Login
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
