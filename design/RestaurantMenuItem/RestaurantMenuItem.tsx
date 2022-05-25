import { setupPreviews } from "@previewjs/plugin-react/setup";
import type { MenuItem } from "../../pages/api/restaurants/[id]";
import { Counter } from "../Counter/Counter";
import { MENU_ITEM_STRAWBERRY_CUPCAKES } from "../testing/fixtures";

export const RestaurantMenuItem = ({
  menuItem,
  count,
  onUpdate,
}: {
  menuItem: MenuItem;
  count: number;
  onUpdate(count: number): void;
}) => {
  const onIncreaseCount = () => onUpdate(count + 1);
  const onDecreaseCount = () => onUpdate(count - 1);
  return (
    <div className="py-2 px-3 flex flex-row justify-between items-center select-none bg-white even:bg-gray-50">
      <img
        className="h-24 w-24 cursor-pointer rounded-md object-cover flex-shrink-0"
        onClick={onIncreaseCount}
        src={
          menuItem.photoUrl ||
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8f/jwfwAI1AOGKpHmUwAAAABJRU5ErkJggg=="
        }
      />
      <div
        className="py-2 px-3 flex-grow cursor-pointer font-light self-stretch flex flex-row items-center"
        onClick={onIncreaseCount}
      >
        {menuItem.name}
      </div>
      {count > 0 && (
        <Counter
          {...{
            count,
            onIncreaseCount: onIncreaseCount,
            onDecreaseCount: onDecreaseCount,
          }}
        />
      )}
    </div>
  );
};

setupPreviews(RestaurantMenuItem, () => {
  const base = {
    menuItem: MENU_ITEM_STRAWBERRY_CUPCAKES,
  };
  return {
    example: {
      ...base,
      count: 0,
    },
    picked: {
      ...base,
      count: 100,
    },
  };
});
