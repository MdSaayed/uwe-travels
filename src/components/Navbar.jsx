import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }


  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>


          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/"> Home </Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/destination"> Destination </Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="trips"> Trips </Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="contact"> Contact </Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="about"> About </Link>
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
              <button onClick={toggleMenu} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar