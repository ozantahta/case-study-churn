import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { authContext } from "../utils/authContext";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  let history = useNavigate();

  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    setLoggedIn,
    loggedIn,
  } = useContext(authContext);

  const handle_email_change = (e) => {
    setEmail(e.target.value);
  };

  const handle_password_change = (e) => {
    setPassword(e.target.value);
  };

  const create_new_user = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  useEffect(() => {
    if (loggedIn) {
      history("/");
    }
  });

  return (
    <div>
      <Navbar />
      <main>
        <section className="relative h-screen max-h-full py-40">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/originals/eb/fa/b8/ebfab827e25eae1356c1e81c0c755f02.jpg')",
            }}
          ></div>
          <div className="container relative mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-gray-200 rounded-lg">
                    <div className="text-blueGray-400 text-center font-bold mb-5 mt-7">
                      <h6 className="text-blueGray-500 text-sm font-bold uppercase">
                        Sign Up
                      </h6>
                      <hr className="mt-6 border-b-1 border-blueGray-300" />
                    </div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                          onChange={handle_email_change}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                          onChange={handle_password_change}
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-blue-color hover:bg-dark-blue text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button"
                          onClick={create_new_user}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="pt-4">
                  {error ? (
                    <div className="text-white px-3 py-2 border-0 rounded relative mb-4 bg-red-500">
                      <span className="inline-block align-middle mr-8">
                        <b className="capitalize">{error}</b>
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Register;
