import { useState } from "react";

function useFoodtruckFilter(startingShowLocations, startingEventYear) {
  const [showLocations, setShowLocations] = useState(startingShowLocations);
  const [eventYear, setEventYear] = useState(startingEventYear);
  const [searchQuery, setSearchQuery] = useState("");

  const EVENT_YEARS = [
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022"
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
