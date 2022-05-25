import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setupPreviews } from "@previewjs/plugin-react/setup";
import Link from "next/link";
import React from "react";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";
import type { RestaurantItem } from "../../pages/api/restaurants";

export const RestaurantList = (props: {
  empty?: React.ReactNode;
  restaurantList: RestaurantItem[];
}) => {
  return (
    <div className="bg-white overflow-hidden">
      {props.restaurantList.length === 0 && props.empty}
      {props.restaurantList.map((restaurant) => (
        <RestaurantListItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

setupPreviews(RestaurantList, {
  example: {
    restaurantList: RESTAURANT_LIST,
  },
});

const RestaurantListItem = ({ restaurant }: { restaurant: RestaurantItem }) => {
  return (
    <Link href={`/restaurants/${restaurant.id}`}>
      <a
        className="pt-28 pb-6 px-3 cursor-pointer text-white text-xl filter hover:brightness-125 flex flex-row justify-between bg-no-repeat bg-cover bg-center group"
        style={{
          backgroundImage: `linear-gradient(hsla(0, 0%, 40%, 0.2), hsla(0, 0%, 0%, 0.2)), url('${restaurant.photoUrl}')`,
        }}
      >
        <div className="rounded-md bg-gray-600 bg-opacity-60 p-2 group-hover:bg-white group-hover:bg-opacity-80 group-hover:text-black">
          {restaurant.name}
        </div>
        <div className="w-6">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </a>
    </Link>
  );
};
