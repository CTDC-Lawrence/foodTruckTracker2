function FoodtrucksRenderProps(props) {
  const foodtrucks = [
    { imageSrc: "foodtruck-1124", name: "Douglas Crockford" },
    { imageSrc: "foodtruck-1530", name: "Tamara Baker" },
    { imageSrc: "foodtruck-10803", name: "Eugene Chuvyrov" },
  ];
  return props.children({
    foodtrucks: foodtrucks,
  });
}
export default FoodtrucksRenderProps;
