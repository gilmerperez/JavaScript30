const p = document.querySelector("p");

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello I am a %s string!", "💩");

// Styled
console.log(
  "%cI am some great text",
  "font-size: 50px; background: red; text-shadow: 10px 10px 0 blue;"
);

// Warning!
console.warn("Oh NOOOO");

// Error
console.error("Shit!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
console.assert(1 === 2, "That is wrong!");

// Clearing
// console.clear(); // This will clear the console

// Viewing DOM Elements
console.dir(p);

// Grouping Together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// Counting
console.count("Gilmer");
console.count("Gilmer");
console.count("Gilmer");

// Timing
console.time("Fetching Data");
fetch("https://api.github.com/users/gilmerperez")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching Data");
    console.log(data);
  });
