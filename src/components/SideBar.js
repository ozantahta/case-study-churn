import React from 'react';
import { Link } from 'react-router-dom';
import { home, line, bar, presentation, square } from '../assets/charts';

function SideBar() {
  return (
    <div className="left-0 flex fixed flex-row flex-nowrap">
    <div className="min-w-fit w-[260px] h-screen bg-dark-blue p-5 pt-8 overflow-y-visible overflow-x-hidden">
      <div className="flex gap-x-4 items-center justify-center">
        <h1 className="text-white text-2xl"><a href='/' className='cursor-pointer'>Elements</a></h1>
      </div>
      <hr className="py-1 mt-4" />
      <ul className="pt-2">
        <li className="group hover:bg-gray-500 rounded-lg p-1 cursor-pointer flex gap-x-4 items-center">
          <Link className="flex items-center" to="/dashboard">
            <img
              src={home}
              className="w-8 group-hover:animate-bounce group-hover:opacity-40"
              alt="home"
            />
            <span className="text-white ml-4 group-hover:animate-bounce group-hover:text-blue-color origin-left text-base font-medium duration-200">
              Dashboard
            </span>
          </Link>
        </li>
        <li className="group hover:bg-gray-500 rounded-lg p-1 cursor-pointer flex gap-x-4 items-center">
          <Link className="flex items-center" to="/duration">
            <img
              src={presentation}
              className="w-8 group-hover:animate-bounce group-hover:opacity-40"
              alt="presentation"
            />
            <span className="text-white ml-4 group-hover:animate-bounce group-hover:text-blue-color origin-left text-base font-medium duration-200">
              Duration
            </span>
          </Link>
        </li>
        <li className="group hover:bg-gray-500 rounded-lg p-1 cursor-pointer flex gap-x-4 items-center">
          <Link className="flex items-center" to="/duration_cv">
            <img
              src={line}
              className="w-8 group-hover:animate-bounce group-hover:opacity-40"
              alt="line"
            />
            <span className="text-white ml-4 group-hover:animate-bounce group-hover:text-blue-color origin-left text-base font-medium duration-200">
              Duration CV
            </span>
          </Link>
        </li>
        <li className="group hover:bg-gray-500 rounded-lg p-1 cursor-pointer flex gap-x-4 items-center">
          <Link className="flex items-center" to="/coin">
            <img
              src={bar}
              className="w-8 group-hover:animate-bounce group-hover:opacity-40"
              alt="bar"
            />
            <span className="text-white ml-4 group-hover:animate-bounce group-hover:text-blue-color origin-left text-base font-medium duration-200">
              Coin
            </span>
          </Link>
        </li>
        <li className="group hover:bg-gray-500 rounded-lg p-1 cursor-pointer flex gap-x-4 items-center">
          <Link className="flex items-center" to="/last_coin">
            <img
              src={presentation}
              className="w-8 group-hover:animate-bounce group-hover:opacity-40"
              alt="presentation"
            />
            <span className="text-white ml-4 group-hover:animate-bounce group-hover:text-blue-color origin-left text-base font-medium duration-200">
              Last Coin
            </span>
          </Link>
        </li>
        <li className="group hover:bg-gray-500 rounded-lg p-1 cursor-pointer flex gap-x-4 items-center">
          <Link className="flex items-center" to="/total_revenue">
            <img
              src={square}
              className="w-8 group-hover:animate-bounce group-hover:opacity-40"
              alt="square"
            />
            <span className="text-white ml-4 group-hover:animate-bounce group-hover:text-blue-color origin-left text-base font-medium duration-200">
              Total Revenue
            </span>
          </Link>
        </li>
        <li className="group hover:bg-gray-500 rounded-lg p-1 cursor-pointer flex gap-x-4 items-center">
          <Link className="flex items-center" to="/impression">
            <img
              src={square}
              className="w-8 group-hover:animate-bounce group-hover:opacity-40"
              alt="square"
            />
            <span className="text-white ml-4 group-hover:animate-bounce group-hover:text-blue-color origin-left text-base font-medium duration-200">
              Rewarded Impression
            </span>
          </Link>
        </li>
        <li className="group hover:bg-gray-500 rounded-lg p-1 cursor-pointer flex gap-x-4 items-center">
          <Link className="flex items-center" to="/churned">
            <img
              src={bar}
              className="w-8 group-hover:animate-bounce group-hover:opacity-40"
              alt="bar"
            />
            <span className="text-white ml-4 group-hover:animate-bounce group-hover:text-blue-color origin-left text-base font-medium duration-200">
              Churned
            </span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default SideBar