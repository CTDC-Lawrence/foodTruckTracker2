function withData(maxFoodtrucksToShow) {
  return function (Component) {
    const foodtrucks = [
      { imageSrc: "foodtruck-1124", name: "Douglas Crockford" },
      { imageSrc: "foodtruck-1530", name: "Tamara Baker" },
      { imageSrc: "foodtruck-10803", name: "Eugene Chuvyrov" },
    ];

    return function () {
      const limitFoodtrucks = foodtrucks.slice(0, maxFoodtrucksToShow);
      return <Component foodtrucks={limitFoodtrucks}></Component>;
    };
  };
}

export default withData;
