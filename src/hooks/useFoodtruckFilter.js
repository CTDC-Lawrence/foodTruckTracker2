import { useState } from "react";

function useFoodtruckFilter(startingShowLocations, startingEventYear) {
  const [showLocations, setShowLocations] = useState(startingShowLocations);
  const [eventYear, setEventYear] = useState(startingEventYear);
  const [searchQuery, setSearchQuery] = useState("");

  const EVENT_YEARS = [
    "2020",
    "2021",
    "2022",
    "2023"
  ];

  return {
    showLocations,
    setShowLocations,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS,
  };
}

export default useFoodtruckFilter;
