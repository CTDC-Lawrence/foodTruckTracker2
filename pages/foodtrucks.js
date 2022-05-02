import React from "react";
import FoodtrucksRenderProps from "../src/components/FoodtrucksRenderProps";

const Foodtrucks = () => {
  return (
    <FoodtrucksRenderProps>
      {({ foodtrucks }) => {
        return (
          <div>
            {foodtrucks.map(({ imageSrc, name }) => {
              return (
                <img
                  src={`images/${imageSrc}.PNG`}
                  alt={name}
                  key={imageSrc}
                ></img>
              );
            })}
          </div>
        );
      }}
    </FoodtrucksRenderProps>
  );
};

export default Foodtrucks;
