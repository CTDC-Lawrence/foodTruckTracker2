import React, { createContext } from "react";
import useFoodtruckFilter from "../hooks/useFoodtruckFilter";

const FoodtruckFilterContext = createContext();

function FoodtruckFilterProvider({
  children,
  startingShowLocations = false,
  startingEventYear = "2019",
}) {
  const {
    showLocations,
    setShowLocations,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS,
  } = useFoodtruckFilter(startingShowLocations, startingEventYear);

  return (
    <FoodtruckFilterContext.Provider
      value={{
        showLocations,
        setShowLocations,
        eventYear,
        setEventYear,
        searchQuery,
        setSearchQuery,
        EVENT_YEARS,
      }}
    >
      {children}
    </FoodtruckFilterContext.Provider>
  );
}

export { FoodtruckFilterContext, FoodtruckFilterProvider };
