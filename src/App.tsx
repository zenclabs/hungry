import { ChevronRightIcon, SearchIcon } from "@heroicons/react/outline";
import React from "react";

export const App = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto rounded-xl overflow-hidden">
        <h1 className="bg-red-600 text-white text-lg font-extralight pt-3 px-5">
          Pick a restaurant
        </h1>
        <div className="p-2 bg-gradient-to-b from-red-600 to-red-700">
          <div className="bg-white flex items-center rounded-xl shadow-xl">
            <input
              className="rounded-l-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
            />
            <div className="p-1">
              <button className="text-red-700 rounded-full p-2 hover:bg-red-200 focus:outline-none w-8 h-8 flex items-center justify-center">
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-red-100 p-2">
          <h2 className="text-red-800 py-2 px-3">Restaurants</h2>
          <ul className="bg-white rounded-lg overflow-hidden">
            <RestaurantListItem name="Chinese Noodle Shop" />
            <RestaurantListItem name="Frankie's crêpe shop" />
          </ul>
        </div>
      </div>
    </div>
  );
};

const RestaurantListItem = (props: { name: string }) => {
  return (
    <li className="py-2 px-3 cursor-pointer text-black hover:bg-red-50 hover:text-red-800 flex flex-row justify-between">
      <div>{props.name}</div>
      <div className="w-6">
        <ChevronRightIcon />
      </div>
    </li>
  );
};
