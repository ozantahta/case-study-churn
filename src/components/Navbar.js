import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../utils/authContext";
import { getAuth, signOut } from "firebase/auth";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(true);
  const { loggedIn, setLoggenIn } = useContext(authContext);

  const sign_out = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoggenIn(false);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-32 py-5 navbar-expand-lg bg-gray-300">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  {/* <i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "} */}
                  HOME
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {loggedIn && (
                <li className="flex items-center">
                  <Link
                    to="/dashboard"
                    className="bg-blue-700 text-white hover:bg-blue-900 hover:text-gray-200 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              {!loggedIn && (
                <li className="flex items-center">
                  <Link
                    to="/login"
                    className="bg-white text-blueGray-700 hover:text-gray-300 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  >
                    Sign In
                  </Link>
                </li>
              )}
              {loggedIn ? (
                <li className="flex items-center">
                  <button
                    className="text-gray-200 bg-red-600 hover:bg-red-700 hover:text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    onClick={sign_out}
                  >
                    Sign Out
                  </button>
                </li>
              ) : (
                <li className="flex items-center">
                  <Link
                    to="/register"
                    className="text-gray-200 bg-gray-600 hover:bg-gray-800 hover:text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  >
                    Sign Up
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
