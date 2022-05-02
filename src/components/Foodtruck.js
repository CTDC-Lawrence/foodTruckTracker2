import React, { useState, useContext, memo } from "react";
import { FoodtruckFilterContext } from "../contexts/FoodtruckFilterContext";
import { FoodtruckProvider, FoodtruckContext } from "../contexts/FoodtruckContext";
import FoodtruckDelete from "./FoodtruckDelete";
import ErrorBoundary from "./ErrorBoundary";

function Location({ title, event }) {
  return (
    <span className="location w-100">
      {title} <strong>Event: {event.name}</strong>
    </span>
  );
}

function Locations() {
  const { eventYear } = useContext(FoodtruckFilterContext);
  const { foodtruck } = useContext(FoodtruckContext);
  const locations = foodtruck.locations;
  return (
    <div className="locationBox card h-250">
      {locations
        .filter(function (location) {
          return location.eventYear === eventYear;
        })
        .map(function (location) {
          return (
            <div className="location w-100" key={location.id}>
              <Location {...location} />
            </div>
          );
        })}
    </div>
  );
}

function ImageWithFallback({ src, ...props }) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  function onError() {
    if (!error) {
      setImgSrc("/images/foodtruck-99999.jpg");
      setError(true);
    }
  }

  return <img src={imgSrc} {...props} onError={onError} />;
}

function FoodtruckImage() {
  const {
    foodtruck: { id, name },
  } = useContext(FoodtruckContext);
  return (
    <div className="foodtruck-img d-flex flex-row justify-content-center align-items-center h-300">
      <ImageWithFallback
        className="contain-fit"
        src={`/images/foodtruck-${id}.PNG`}
        width="300"
        alt={`${name}`}
      />
    </div>
  );
}

function FoodtruckFavorite() {
  const { foodtruck, updateRecord } = useContext(FoodtruckContext);
  const [inTransition, setInTransition] = useState(false);
  function doneCallback() {
    setInTransition(false);
    console.log(
      `In FoodtruckFavorite:doneCallback    ${new Date().getMilliseconds()}`
    );
  }

  return (
    <div className="action padB1">
      <span
        onClick={function () {
          setInTransition(true);
          updateRecord(
            {
              ...foodtruck,
              favorite: !foodtruck.favorite,
            },
            doneCallback
          );
        }}
      >
        <i
          className={
            foodtruck.favorite === true
              ? "fa fa-star orange"
              : "fa fa-star-o orange"
          }
        />{" "}
        Favorite{" "}
        {inTransition ? (
          <span className="fas fa-circle-notch fa-spin"></span>
        ) : null}
      </span>
    </div>
  );
}

function FoodtruckDemographics() {
  const { foodtruck } = useContext(FoodtruckContext);
  const { name, bio, website, twitterHandle, favorite } = foodtruck;
  return (
    <div className="foodtruck-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {name}
        </h3>
      </div>
      <FoodtruckFavorite />
      <div>
        <p className="card-description">{bio.substr(0, 70)}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="website">
            <h5>Website</h5>
            <h6>{website}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

const FoodtruckNoErrorBoundary = memo(function Foodtruck({
  foodtruck,
  updateRecord,
  insertRecord,
  deleteRecord,
  showErrorCard,
}) {
  const { showLocations } = useContext(FoodtruckFilterContext);
  console.log(`foodtruck: ${foodtruck.id} ${foodtruck.name}`);
  if (showErrorCard) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <img src="/images/foodtruck-99999.jpg" />
          <div>
            <b>Error Showing Foodtruck</b>
          </div>
        </div>
      </div>
    );
  }

  return (
    <FoodtruckProvider
      foodtruck={foodtruck}
      updateRecord={updateRecord}
      insertRecord={insertRecord}
      deleteRecord={deleteRecord}
    >
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <FoodtruckImage />
          <FoodtruckDemographics />
        </div>
        {showLocations === true ? <Locations /> : null}
        <FoodtruckDelete />
      </div>
    </FoodtruckProvider>
  );
},
areEqualFoodtruck);

function Foodtruck(props) {
  return (
    <ErrorBoundary
      errorUI={
        <FoodtruckNoErrorBoundary
          {...props}
          showErrorCard={true}
        ></FoodtruckNoErrorBoundary>
      }
    >
      <FoodtruckNoErrorBoundary {...props}></FoodtruckNoErrorBoundary>
    </ErrorBoundary>
  );
}

function areEqualFoodtruck(prevProps, nextProps) {
  return prevProps.foodtruck.favorite === nextProps.foodtruck.favorite;
}

export default Foodtruck;
