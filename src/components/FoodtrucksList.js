import { useContext } from "react";
import Foodtruck from "./Foodtruck";
import ReactPlaceHolder from "react-placeholder";
import useRequestRest, { REQUEST_STATUS } from "../hooks/useRequestRest";
import { data } from "../../FoodtruckData";
import { FoodtruckFilterContext } from "../contexts/FoodtruckFilterContext";
import FoodtruckAdd from "./FoodtruckAdd";

function FoodtrucksList() {
  const {
    data: foodtrucksData,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequestRest();

  const { searchQuery, eventYear } = useContext(FoodtruckFilterContext);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>loading Foodtruck Data Failed {error}</b>
      </div>
    );
  }

  //if (isLoading === true) return <div>Loading...</div>

  return (
    <div className="container foodtrucks-list">
      <ReactPlaceHolder
        type="media"
        rows={15}
        className="foodtruckslist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <FoodtruckAdd eventYear={eventYear} insertRecord={insertRecord} />
        <div className="row">
          {foodtrucksData
            .filter(function (foodtruck) {
              return (
                foodtruck.first.toLowerCase().includes(searchQuery) ||
                foodtruck.last.toLowerCase().includes(searchQuery)
              );
            })
            .filter(function (foodtruck) {
              return foodtruck.locations.find((location) => {
                return location.eventYear === eventYear;
              });
            })
            .map(function (foodtruck) {
              return (
                <Foodtruck
                  key={foodtruck.id}
                  foodtruck={foodtruck}
                  updateRecord={updateRecord}
                  insertRecord={insertRecord}
                  deleteRecord={deleteRecord}
                />
              );
            })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default FoodtrucksList;
