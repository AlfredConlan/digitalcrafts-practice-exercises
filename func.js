// const calcDiameter = (radius) => {
//   if (typeof radius === "number") {
//     return radius * 2;
//   } else {
//     return 0;
//   }
// };

// // Callback function
// const Circumference = (radius) => {
//     const pi = 3.14;
//     return (calcDiameter(radius) / 2 * pi) * 2;
// }

// //console.log(calcDiameter(2));

// console.log(Circumference(5));

// const CurrentWeather = (location) => {
//     console.log("It is sunny in", location);
// }

// CurrentWeather('Amarillo');

let cars = [];

cars.push(
  (car = {
    make: "Chevrolet",
    model: "Nova",
    mileage: 12,
    country: "US",
    price: 15000,
  })
);

cars.push(
  (car = {
    make: "Toyota",
    model: "Prius",
    mileage: 45,
    country: "Japan",
    price: 12000,
  })
);

cars.push(
  (car = {
    make: "Lexus",
    model: "ES",
    mileage: 30,
    country: "Japan",
    price: 58000,
  })
);

cars.push(
  (car = {
    make: "Cadillac",
    model: "Escalade",
    mileage: 15,
    country: "US",
    price: 48000,
  })
);

const mostEconomical = (cars) => {
  let currentCar = "";
  let currentHighest = 0;

  for (i = 0; i < cars.length; i++) {
    if (cars[i].mileage > currentHighest) {
      currentCar = cars[i].model;
      currentHighest = cars[i].mileage;
    }
  }
  return currentCar;
};

const mostExpensive = (cars) => {
  let currentCar = "";
  let currentHighest = 0;

  for (i = 0; i < cars.length; i++) {
    if (cars[i].price > currentHighest) {
      currentCar = cars[i].model;
      currentHighest = cars[i].price;
    }
  }
  return currentCar;
};

const leastExpensive = (cars) => {
  let currentCar = "";
  let currentLowest = 1000000;

  for (i = 0; i < cars.length; i++) {
    if (cars[i].price < currentLowest) {
      currentCar = cars[i].model;
      currentLowest = cars[i].price;
    }
  }
  return currentCar;
};

let highestMileageCar = mostEconomical(cars);
let mostExpensiveCar = mostExpensive(cars);
let leastExpensiveCar = leastExpensive(cars);

console.log("The most economical car is: " + highestMileageCar);
console.log("The most expensive car is: " + mostExpensiveCar);
console.log("The least expensive car is: " + leastExpensiveCar);
