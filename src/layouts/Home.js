import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-full">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/originals/eb/fa/b8/ebfab827e25eae1356c1e81c0c755f02.jpg')",
          }}
        ></div>
        <div className="container relative mx-auto items-center flex justify-center">
          <div className="pt-26 sm:pt-0 space-y-8">
            <div className="items-center flex justify-center">
              <h1 className="text-white font-bold text-4xl uppercase font-sans shadow-lg">
                HELLO WORLD!!! 🚀🚀🚀
              </h1>
            </div>
            <div className="items-center flex justify-center">
              <h1 className="text-white font-bold text-4xl uppercase font-sans shadow-lg">
                HELLO WORLD!!! 🚀🚀🚀
              </h1>
            </div>
            <div className="items-center flex justify-center">
              <h1 className="text-white font-bold text-4xl uppercase font-sans shadow-lg">
                THIS WEBSITE HAS DEVELOPED FOR THE STUDY CASE
              </h1>
            </div>
            <div className="items-center flex justify-center m-9">
              <h1 className="text-white font-bold text-4xl uppercase font-sans shadow-lg">
                YOU CAN REACH OUT THE DASHBOARD BY SIGN UP THIS WEBSITE
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
