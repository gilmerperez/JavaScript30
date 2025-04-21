// * Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// * The Array some() Method checks if any array elements pass a test provided as a callback function. It returns a Boolean value
// 1. Executes the callback function once for each array element
// 2. Returns true (and stops) if the function returns true for one of the array elements
// 3. Returns false if the function returns false for all of the array elements
// 4. Does not execute the function for empty array elements
// 5. Does not change the original array
// ? Is at least one person 19 or older?
const isAdult = people.some(function (person) {
  const currentYear = new Date().getFullYear;
  if (currentYear - person.year >= 19) {
    return true;
  }
});
console.log("Is at least one person 19 or older?");
console.log(isAdult);

// * The Array every() Method checks if all elements in the array pass the test provided by the provided function. It returns a Boolean value
// 1. Executes a function for each array element
// 2. Returns true if the function returns true for all elements
// 3. Returns false if the function returns false for one element
// 4. Does not execute the function for empty elements
// 5. Does not change the original array
// ? Is everyone 19 or older?
const allAdults = people.every(function (person) {
  const currentYear = new Date().getFullYear;
  if (currentYear - person.year >= 19) {
    return true;
  }
});
console.log("Is everyone 19 or older?");
console.log(isAdult);

// * The Array find() Method returns the value of the first element that passes a test. Similar to the filter() method, but instead returns just the one you are looking for
// 1. Executes a function for each array element
// 2. Returns undefined if no elements are found
// 3. Does not execute the function for empty elements
// 4. Does not change the original array
// ? Find the comment with the ID of '823423'
const comment = comments.find(function (comment) {
  if (comment.id === 823423) {
    return true;
  }
});
console.log("Find the comment with the ID of 823423");
console.log(comment);

// * The Array findIndex() Method
// 1. Executes a function for each array element
// 2. Returns the index (position) of the first element that passes a test
// 3. Returns -1 if no match is found
// 4. Does not execute the function for empty array elements
// 5. Does not change the original array
// ? Find and delete the comment with the ID of '823423'
const index = comments.findIndex(function (comment) {
  if (comment.id === 823423) {
    return true;
  }
});
console.log("Find and delete the comment with the ID of 823423");
comments.splice(index, 1);
console.table(comments);
