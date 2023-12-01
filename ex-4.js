// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
let i = 0;
while (i < restaurants.length) {
  newRestaurants[i] = `Restaurants Name :${restaurants[i]}`;
  // newRestaurants.push(`Restaurants Name :${restaurants[i]}`);
  i++;
}

console.log(newRestaurants);
