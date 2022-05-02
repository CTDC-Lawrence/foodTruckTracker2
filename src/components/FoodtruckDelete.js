import { useContext } from "react";
import { FoodtruckContext } from "../contexts/FoodtruckContext";

function foodtruckDelete() {
  const { foodtruck, deleteRecord } = useContext(FoodtruckContext);

  return (
    <span className="location w-100">
      <a href="#" className="remSes">
        <i
          onClick={(e) => {
            e.preventDefault();
            if (
              window.confirm("Are you sure you want to delete this foodtruck?")
            ) {
              deleteRecord(foodtruck);
            }
          }}
        >
          -
        </i>
      </a>
      <span className="padL2">Delete Foodtruck</span>
    </span>
  );
}

export default foodtruckDelete;
