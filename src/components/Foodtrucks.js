import FoodtrucksToolbar from "./FoodtrucksToolbar";
import FoodtrucksList from "./FoodtrucksList";
import { FoodtruckFilterProvider } from "../contexts/FoodtruckFilterContext";

function Foodtrucks() {
  return (
    <FoodtruckFilterProvider startingShowLocations={false}>
      <FoodtrucksToolbar />
      <FoodtrucksList />
    </FoodtruckFilterProvider>
  );
}

export default Foodtrucks;
