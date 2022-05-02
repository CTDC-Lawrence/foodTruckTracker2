function FoodtrucksRenderProps(props) {
  const foodtrucks = [
    { imageSrc: "foodtruck-1", name: "Las Mexicanas" },
    { imageSrc: "foodtruck-2", name: "Taqueria El Paisa" },
    { imageSrc: "foodtruck-3", name: "Master Arepa" },
  ];
  return props.children({
    foodtrucks: foodtrucks,
  });
}
export default FoodtrucksRenderProps;
