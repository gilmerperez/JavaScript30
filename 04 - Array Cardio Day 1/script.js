// * Array Cardio Day 1

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// * The Array filter() Method is ONLY for selecting items based on a condition: true/false
// 1. Creates a new array with only the elements that pass the callback function
// 3. It does NOT modify the original array
// 2. If the callback operation returns true, it gets added to the new array, if false, discard it
// TODO: Filter the list of inventors for those who were born in the 1500's
const bornIn1500s = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true;
  }
});
console.table(bornIn1500s);

// * The Array map() Method transforms each item in an array and returns a new array with the results
// 1. Does NOT modify the original array
// 2. Always returns a new array of the same length as the original
// 3. The callback function defines how each item is transformed
// TODO: Map the array of the inventor's first and last names
const fullNames = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`;
});
console.table(fullNames);

// * The Array sort() Method sorts elements of an array in place
// 1. It will change the original array
// TODO: Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
console.table(oldestToYoungest);

// * The Array reduce() Method boils an array down to a single value, this could be sum, average, etc
// 1. The callback function processes each item
// 2. "total" tracks the cumulative value
// 3. Initial value is by default set to 0
// TODO: How many total years did all of the inventors live?
const totalYearsLived = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYearsLived);

// TODO: Sort the inventors by years lived
const oldestInventors = inventors.sort(function (a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;

  if (lastInventor > nextInventor) {
    return -1;
  } else {
    return 1;
  }
});
console.table(oldestInventors);

// TODO: Create a list of Boulevards in Paris that contain 'de' anywhere in the name
const parisStreets = [
  "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard Hippolyte-Marquès",
];

const deStreets = parisStreets.filter((streetName) =>
  streetName.includes("de")
);
console.table(deStreets);

// TODO: Sort the people alphabetically by last name in the people array
const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const lastNameAlphaSort = people.sort(function (lastPerson, nextPerson) {
  const [aLast, aFirst] = lastPerson.split(", ");
  const [bLast, bFirst] = nextPerson.split(", ");
  if (aLast > bLast) {
    return 1;
  } else {
    return -1;
  }
});
console.table(lastNameAlphaSort);

// TODO: Sum up the instances of each item in the transporation array
const transportation = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const instancesOfTransporation = transportation.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.table(instancesOfTransporation);
