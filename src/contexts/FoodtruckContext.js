import { createContext } from "react";

const FoodtruckContext = createContext();

function FoodtruckProvider({
  children,
  foodtruck,
  updateRecord,
  insertRecord,
  deleteRecord,
}) {
  return (
    <FoodtruckContext.Provider
      value={{ foodtruck, updateRecord, insertRecord, deleteRecord }}
    >
      {children}
    </FoodtruckContext.Provider>
  );
}

export { FoodtruckContext, FoodtruckProvider };
